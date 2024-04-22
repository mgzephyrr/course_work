"use client"

import EventParticipationTable from '@/components/activity-participation/activity-part-table'
import { ActivityParticipanceRow } from '@/components/activity-participation/columns'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { API_URL } from '@/constants'
import { UserSchema } from '@/schemas'
import axios from 'axios'
import { CalendarFoldIcon, InfoIcon, Rotate3D, UserIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import * as z from "zod";
import { useRouter } from "next/navigation";

export type ActivityInfo = {
  id: number
  event_name: string
  event_description: string
  starting_time: Date
  ending_time: Date
  location: string
  participants_count: number
  image_file_name: string
  isModerated: boolean
  //organizers: data.data['id']
}


function Activity ({params}: { params: {id: number} }) {
  type OrganizerInfo = {
    name: string,
    avatar: string
  }

  const activity_id = params.id
  const router = useRouter()
  const [activity, setActivity] = useState<ActivityInfo | undefined>(undefined);
  const [participationList, setParticipationList] = useState<ActivityParticipanceRow[]>([]);
  const [isAlreadySigned, setIsAlreadySigned] = useState<boolean | undefined>();
  const [organizer, setOrganizer] = useState<OrganizerInfo | undefined>()
  const [isActivityModerated, setIsActivityModerated] = useState<boolean | undefined>();

  const onParticipateClick = (activity_id: number) => {
    axios.post(API_URL + `/events/${activity_id}/sign`, {
      params:{
        event_id: activity_id
      }
    })
    .then(() => {
      setIsAlreadySigned(true)
      toast("Вы приняли участие на мероприятии", {
        description: "Надеемся вам понравится!"
      })
    })
    .catch((e) => {
      if (e.response.data.detail === "User is already registered for this event"){
        toast("Вы уже зарегистрированы на это мероприятие!")
        return;
      }
      toast("Произошла непредвиденная ошибка, повторите попытку позже.")
    })
  }

  function onAcceptClick(activity_id: number) {
    axios.put(API_URL + `/events/${activity_id}/moderate`, {
      params:{
        event_id: activity_id
      }
    })
    .then(() => {
      setIsActivityModerated(true)
      toast("Вы приняли мероприятие", {
        description: "Спасибо за то что приняли участие в процессе модерации!"
      })
    })
    .catch((e) => {
      console.log(e.response)
    })
  }

  function onDeclineClick(activity_id: number){
    axios.delete(API_URL + `/events/${activity_id}/moderate/delete`, {
      params:{
        event_id: activity_id
      }
    })
    .catch((e) => {
      console.log(e.response)
    })
  }

  useEffect(() => {
    axios.get(API_URL + `/events/${activity_id}`,{
      params:{
        event_id: activity_id
      }
    })
    .then((event_data) => {
      setActivity({
        id: event_data.data['id'],
        event_name: event_data.data['event_name'],
        event_description: event_data.data['event_description'],
        starting_time: event_data.data['starting_time'],
        ending_time: event_data.data['ending_time'],
        location: event_data.data['location'],
        participants_count: event_data.data['participants_count'],
        image_file_name: event_data.data['image_file_name'],
        isModerated: event_data.data['isModerated'],
      } as ActivityInfo)
      setIsActivityModerated(event_data.data['isModerated'])
    })
    .catch((e) => {
      console.log(e.response)
      setActivity(undefined)
    })

    axios.get(API_URL + `/events/${activity_id}/participants`, {
        params:{
            event_id: activity_id
        }
    })
    .then((data) => {
      setParticipationList(data.data.map((participant: z.infer<typeof UserSchema>) => {
            return {
                full_name: participant.last_name + ' ' + participant.first_name + ' ' + participant.paternity,
                avatar_filename: participant.avatar_file_name ? participant.avatar_file_name : '/default-avatar.png'
            }
      }))
    })
    .catch((e) => {
      console.log(e)
      setParticipationList([])
    })

    axios.get(API_URL + `/events/${activity_id}/is_sign`, {
        params:{
            event_id: activity_id
        }
    })
    .then((data) => {
      setIsAlreadySigned(data.data)
    })
    .catch((e) => console.log(e))

    axios.get(API_URL + `/events/event_organizer/${activity_id}`, {
        params:{
            event_id: activity_id
        }
    })
    .then((data) => {
      setOrganizer({
        name: data.data['name'],
        avatar: data.data['avatar']
      })
    })
    .catch((e) => console.log(e))
  }, [])

  if (!activity || !organizer){
    return;
  }

  return (
    <section className='flex size-full flex-col gap-3
    bg-light-3 rounded-[10px] border border-gray-300 shadow h-auto'>
      <div className='flex w-full max-sm:h-[132px] h-[200px] lg:h-[264px] bg-cover bg-center border border-gray-300 shadow bg-gray-300 bg-blend-multiply rounded-[10px]'
           style={{backgroundImage: activity?.image_file_name ?
                                    `url(/images/${activity?.image_file_name})` :
                                    "url(/images/hero-background.jpg)"}}>

      </div>
      <div className='flex pt-0 w-full h-auto bg-light-3 rounded-[20px] -mt-11
                      max-sm:flex-col max-sm:items-center px-4'>
        <div className='flex bg-cover bg-center bg-gray-200 rounded-full border border-gray-300
                        lg:-mt-[96px] lg:ml-10 lg:h-[192px] lg:w-[192px] lg:min-w-[192px]
                        -mt-[64px] ml-4 h-[128px] w-[128px] min-w-[128px]
                        max-sm:-mt-[32px] max-sm:h-[64px] max-sm:w-[64px] max-sm:min-w-[64px]'

             style={{backgroundImage:
              organizer.avatar ? `url(/images/${organizer.avatar})` : `url(/images/default-avatar.png)`}}
        />
        <div className='flex w-full flex-row justify-between px-4 py-6 max-md:flex-col max-md:gap-y-6'>
            <div className='flex flex-col gap-y-6'>
              <div className='flex flex-row items-center h-fit w-fit gap-x-4'>
                <CalendarFoldIcon className='lg:h-8 lg:w-8 lg:min-w-8
                                            h-6 w-6 min-w-6
                                            max-sm:h-5 max-sm:w-5 max-sm:min-w-5'/>
                <h1 className='lg:text-2xl font-bold max-sm:text-sm text-lg
                              break-words text-black'>{activity?.event_name}</h1>

              </div>

              <div className='flex flex-row items-center h-fit w-fit gap-x-4'>
                <UserIcon className='lg:h-6 lg:w-6 lg:min-w-6
                                    h-5 w-5 min-w-5
                                    max-sm:h-4 max-sm:w-4 max-sm:min-w-4'/>
                <h2 className='lg:text-lg font-semibold max-sm:text-xs text-md
                              break-words text-black'>{organizer?.name}</h2>
              </div>
            </div>


            {
              isActivityModerated === false &&
              <div className='flex flex-col gap-y-4'>
                <Button className='flex bg-redbutton-1 hover:bg-redbutton-2 justify-center items-center gap-x-4 rounded-[10px] p-2 max-lg:w-full w-[140px]'
                  onClick={() => {
                      onDeclineClick(activity_id)
                      router.replace('/activities')
                      toast("Вы отклонили мероприятие", {
                        description: "Спасибо за то что приняли участие в процессе модерации!"
                      })
                    }}>
                  Отклонить
                </Button>
                <Button className='flex bg-greenbutton-1 hover:bg-greenbutton-2 justify-center items-center gap-x-4 rounded-[10px] p-2 max-md:w-full w-[140px]'
                  onClick={() => {
                    onAcceptClick(activity_id)
                    router.replace(`/activity/${activity_id}`)
                  }}>
                  Принять
                </Button>
              </div>
            }

            {
              isActivityModerated === true && isAlreadySigned === true &&
              <Button className='flex bg-gray-200 hover:bg-gray-300 justify-center items-center gap-x-4 rounded-[10px] p-2 text-muted-foreground'>
                Вы записаны
              </Button>
            }

            {
              isActivityModerated === true && isAlreadySigned === false &&

              <Button className='flex bg-blue-2 hover:bg-blue-500 justify-center items-center gap-x-4 rounded-[10px] p-2'
                      onClick={() => {
                        onParticipateClick(activity_id)
                        router.replace(`/activity/${activity_id}`)
                        }}>
                Принять участие
              </Button>
            }

        </div>

      </div>
      <Separator className='w-full bg-gray-300'/>
      <div className='flex flex-row max-sm:justify-center h-fit w-full px-4 gap-x-4 items-center'>
        <InfoIcon className='lg:h-6 lg:w-6 lg:min-w-6
                             h-5 w-5 min-w-5
                             max-sm:h-4 max-sm:w-4 max-sm:min-w-4'/>
        <h1 className='lg:text-lg font-semibold max-sm:text-xs text-md
                            break-words text-black'>{activity?.event_description}</h1>
      </div>
      <Separator className='w-full bg-gray-300'/>
      <div className='p-4'>
        <EventParticipationTable data={participationList}/>
      </div>

    </section>
  )
}

export default Activity
