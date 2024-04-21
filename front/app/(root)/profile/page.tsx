"use client"

import * as React from "react"
import * as z from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ParticipationTable, { GetStatus } from "@/components/participation-table/participation-table"
import AvatarUploader from "@/components/avatar-uploader"
import ModeratedActivitiesTable from "@/components/moderated-activities-table/moderated-activities-table"
import { useEffect, useState } from "react"
import { EventSchema, UserSchema } from "@/schemas"
import axios from "axios";
import { API_URL } from "@/constants";
import { ParticipanceEventRow } from "@/components/participation-table/columns";
import { ModeratedActivitiesRow } from "@/components/moderated-activities-table/columns";

export function TabsShower({
  signedEvents, organisedEvents
} : {
  signedEvents: ParticipanceEventRow[], organisedEvents: ModeratedActivitiesRow[]
}) {
  return (
    <Tabs defaultValue="avatar" className="w-full">
      <TabsList className="grid w-full grid-cols-3 gap-x-0.5 max-md:h-12 ">
        <TabsTrigger className='data-[state=active]:text-white
                                  data-[state=active]:shadow-sm
                                  data-[state=active]:bg-blue-2
                                  max-md:text-xs
                                  h-full
                                  whitespace-normal'
                     value="avatar">Аватар</TabsTrigger>
        <TabsTrigger className='data-[state=active]:text-white
                                  data-[state=active]:shadow-sm
                                  data-[state=active]:bg-blue-2
                                  max-md:text-xs
                                  h-full
                                  whitespace-normal'
                     value="password">Вы записаны</TabsTrigger>
        <TabsTrigger className='data-[state=active]:text-white
                                  data-[state=active]:shadow-sm
                                  data-[state=active]:bg-blue-2
                                  max-md:text-xs
                                  h-full
                                  whitespace-normal'
                     value="hosted">Ваши мероприятия</TabsTrigger>
      </TabsList>
      <TabsContent value="avatar">
        <Card>
          <CardHeader>
            <CardTitle>Аватар</CardTitle>
            <CardDescription>
              Здесь вы можете изменить аватар.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <AvatarUploader/>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Вы записаны</CardTitle>
            <CardDescription>
              Здесь отображаются все мероприятия, на которые вы зарегистрировались
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ParticipationTable data={signedEvents} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="hosted">
        <Card>
          <CardHeader>
            <CardTitle>Ваши мероприятия</CardTitle>
            <CardDescription>
              Здесь отображаются все мероприятия, которые вы создали.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ModeratedActivitiesTable data={organisedEvents} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default function ProfilePage() {
  //const user = await getUser();

  const [user, setUser] = useState<z.infer<typeof UserSchema> | undefined>()
  const [signedEvents, setSignedEvents] = useState<ParticipanceEventRow[]>([])
  const [organisedEvents, setOrganisedEvents] = useState<ModeratedActivitiesRow[]>([])

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(API_URL + '/auth/me')
    .then((data) => {
      setUser({
          email: data.data['email'],
          first_name: data.data['first_name'],
          last_name: data.data['last_name'],
          paternity: data.data['paternity'],
          avatar_file_name: data.data['avatar_file_name'],
      } as z.infer<typeof UserSchema>)
    })
    .catch((e) => setUser(undefined))

    axios.get(API_URL + '/auth/signedevents')
    .then((data) => {
      setSignedEvents(data.data.map((row: z.infer<typeof EventSchema>) => {
            const start = row.starting_time.toString()
            const end = row.ending_time.toString()

            return {
                id: row.id,
                participants_count: row.participants_count,
                status: GetStatus(start, end),
                name: row.event_name
            }
        }))
    })
    .catch(() => { setSignedEvents([]) })

    axios.get(API_URL + '/auth/my_organized_events')
    .then((data) => {
      setOrganisedEvents(data.data.map((row: z.infer<typeof EventSchema>) => {
            return {
                id: row.id,
                participants_count: row.participants_count,
                status: row.isModerated ? "Принято" : "На рассмотрении",
                name: row.event_name
            }
        }))
    })
    .catch(() => { setOrganisedEvents([]) })
    }, [])

  return (
    <section className='flex size-full flex-col gap-5
        bg-light-3 p-6 rounded-[14px] border shadow-sm max-sm:w-screen'>
      <div className="flex flex-row gap-x-5 items-center">
        <Avatar className={`max-sm:h-[60px] max-sm:w-[60px] h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] border-4 border-gray-300`}>
            {
                !user && <Skeleton className={`max-sm:h-[60px] max-sm:w-[60px] md:h-[90px] md:w-[90px]
                lg:h-[120px] lg:w-[120px] rounded-full`}/>
            }
            {
                user?.avatar_file_name &&
                <AvatarImage src={`images/${user?.avatar_file_name}`}/>
            }
            {
                user && !user?.avatar_file_name &&
                <AvatarFallback className="max-sm:text-xl text-2xl lg:text-4xl">
                    {(user?.first_name.slice(0, 1)! + user?.last_name.slice(0, 1)!)}
                </AvatarFallback>
            }
        </Avatar>
        {
          user &&
          <div className="flex flex-col gap-y-1">
            <h1 className="max-sm:text-xl text-2xl lg:text-3xl font-semibold">{user?.last_name + ' ' +
                                                    user?.first_name + ' ' +
                                                    user?.paternity}</h1>
            <h2 className="text-muted-foreground max-sm:text-xs">{user?.email}</h2>
          </div>
        }

      </div>
      <Separator className="bg-gray-300"/>
      <TabsShower signedEvents={signedEvents} organisedEvents={organisedEvents}/>
    </section>
  )
}
