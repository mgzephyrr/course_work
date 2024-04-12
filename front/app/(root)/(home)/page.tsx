"use client";

import * as z from "zod"
import axios from 'axios';

import { API_URL } from '@/constants';
import { EventSchema } from '@/schemas';
import { useEffect, useState } from 'react'
import { MapPinIcon, InfoIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const now = new Date()
  const [activity, setActivity] = useState<z.infer<typeof EventSchema>>();

  const getBg = (image_filename: string | undefined) => {
    if (image_filename){
      return `bg-[url('/images/${image_filename}')]`
    }
    return "bg-hero"
  }

  useEffect(() => {
    axios.get(API_URL + '/events/upcoming')
    .then((response) => {setActivity(response.data)})
    .catch((error) => {console.log(error)})
  }, [])

  let time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  let date = (new Intl.DateTimeFormat('ru-RU', { dateStyle: 'full' })).format(now);

  if (activity){
    const db_time = new Date(activity!.starting_time)

    time = db_time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    date = (new Intl.DateTimeFormat('ru-RU', { dateStyle: 'full' })).format(db_time);
  }

  return (
    <section className='flex size-full flex-col gap-5
    bg-light-3 p-6 rounded-[14px]'>
      <h1 className='text-blue-3 text-2xl font-extrabold lg:text-4xl'>Ближайшее мероприятие</h1>
        {
          !activity?.event_description &&
          <Skeleton className="h-8 w-full"/>
        }
        {
          activity?.event_description &&
          <div className="flex flex-row items-center gap-x-3 text-black">
            <InfoIcon className="h-8 w-8 min-w-6"/>
            <h2 className='font-bold text-base lg:text-lg'>{activity?.event_description}</h2>
          </div>
        }

      {!activity && <Skeleton className="h-[300px] w-full rounded-[20px]"/>}
      {
        activity &&
        <div className={`h-[300px] w-full rounded-[20px] ${getBg(activity?.image_file_name)}
                       bg-cover bg-center bg-zinc-500 bg-blend-multiply text-white`}>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-6 lg:p-11 '>
            <h2 className='max-w-[600px] rounded py-2 font-normal'>{activity?.event_name}</h2>

            <div className='flex flex-col gap-2 w-fit'>
              { activity && <h1 className='text-4xl font-extrabold lg:text-6xl text-sky-2'>{time}</h1> }
              { activity && <p className='text-lg font-medium lg:text-2xl text-sky-1'>{date}</p> }
            </div>
          </div>
        </div>
      }

      {
        !activity?.location &&
        <Skeleton className="h-8 w-full"/>
      }
      {
        activity?.location &&
        <div className="flex flex-row items-center gap-x-3 text-muted-foreground">
          <MapPinIcon className="h-8 w-8 min-w-6"/>
          <h2 className='font-bold text-base lg:text-lg'>{activity?.location}</h2>
        </div>
      }

    </section>
  )
}

export default Home
