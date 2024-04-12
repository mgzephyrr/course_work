"use client";

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as z from "zod";
import { API_URL } from '@/constants'
import { EventSchema } from '../../../../schemas'
import Link from 'next/link';

const Activities = () => {
  const [activities, setActivities] = useState<any>();

  useEffect(() => {
    axios.get(API_URL + '/events')
    .then((response) => {
      setActivities(response.data);
    })
    .catch((error) => {
      console.log('Unexpected error:', error)
    })
  }, [])

  const getBg = (image_filename: string) => {
    if (image_filename){
      return `bg-[url('/images/${image_filename}')]`
    }
    return "bg-hero"
  }

  return (
    <div className='flex flex-col gap-y-3'>
      <section className='flex size-full flex-col gap-5
      bg-light-3 p-6 rounded-[14px]'>
        {activities && activities?.map((activity: z.infer<typeof EventSchema>) => {
          const db_time = new Date(activity.starting_time)
          const activity_id = activity.id

          const time = db_time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
          const date = (new Intl.DateTimeFormat('ru-RU', { dateStyle: 'full' })).format(db_time);

          return (
            <Link href={"../activity/" + activity_id}
                  key={activity.id}
                  className={`h-[300px] w-full rounded-[20px] bg-cover ${getBg(activity.image_file_name)}
                  bg-zinc-500 bg-blend-multiply cursor-pointer bg-center`}
                  >
              <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-6 lg:p-11'>
                <h2 className='max-w-[600px] rounded py-2 font-normal text-white'>
                  {activity.event_name}
                </h2>

                <div className='flex flex-col gap-2 w-fit'>
                  <h1 className='text-4xl font-extrabold lg:text-6xl text-sky-2'>{time}</h1>
                  <p className='text-lg font-medium lg:text-2xl text-sky-1'>{date}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </section>
      <div id='upcoming' className=''></div>
      <div id='current'></div>
      <div id='previous'></div>
    </div>
  )
}

export default Activities
