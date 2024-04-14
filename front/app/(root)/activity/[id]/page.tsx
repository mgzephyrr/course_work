import { getUser } from '@/app/utils'
import { API_URL } from '@/constants'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

export type EventParticipant = {
  first_name: string
  last_name: string
  paternity: string
  avatar_filename: string
}

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
  event_participants: Array<EventParticipant>
  //organizers: data.data['id']
}

export async function getActivity(activity_id: number): Promise<ActivityInfo | undefined>{
  const user = await getUser();
  // добавить проверку на то может ли чел смотреть (передать айдишник)
  try {
    const event_data = await axios.get(API_URL + `/events/${activity_id}`,{
      params:{
        event_id: activity_id
      }
    })
    const patricipants_data = [
      {
        first_name: 'Виктор',
        last_name: 'Воронов',
        paternity: "Алексеевич",
        avatar_filename: "8f6ac3e0-d5aa-4008-91b4-bace07d717ef.jpg",
      },
      {
        first_name: "Дмитрий",
        last_name: "Елизаров",
        paternity: "Алексеевич",
        avatar_filename: "1d20d321-9030-40a3-b42c-852b510282af.jpg",
      },
      {
        first_name: "Кирилл",
        last_name: "Талан",
        paternity: "Антонович",
        avatar_filename: "0f2ec1cd-c8c6-4853-af29-c993bc53366b.jpg",
      },
    ]
    // const patricipants_data = (await axios.get(API_URL + `/events/${activity_id}/participants`)).data.map(
    //   (user: unknown) => {
    //     return ({
    //       first_name: user['first_name'],
    //       last_name: user['last_name'],        ЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУЖДУ МИШУ
    //       paternity: user['paternity'],
    //       avatar_filename: user['avatar_filename'],
    //     } as EventParticipant)
    //   }
    // )
    const event = {
      id: event_data.data['id'],
      event_name: event_data.data['event_name'],
      event_description: event_data.data['event_description'],
      starting_time: event_data.data['starting_time'],
      ending_time: event_data.data['ending_time'],
      location: event_data.data['location'],
      participants_count: event_data.data['participants_count'],
      image_file_name: event_data.data['image_file_name'],
      isModerated: true,
      event_participants: patricipants_data
      //organizers: data.data['id']
    } as ActivityInfo

    return event
  }
  catch(e){
    console.log(e.response)
    return undefined
  }
}

async function Activity ({params}: { params: {id: number} }) {
  const activity = await getActivity(params.id)
  return (
    <section className='flex size-full flex-col gap-5
    bg-light-3 p-6 rounded-[10px] border border-gray-300 shadow h-[1000px]'>
      <div className='flex w-full max-sm:h-[132px] h-[264px] bg-cover bg-center'
           style={{backgroundImage: activity?.image_file_name ?
                                    `url(/images/${activity?.image_file_name})` :
                                    "url(/images/hero-background.jpg)"}}>

      </div>
      <div className='flex pt-0 w-full h-[264px] bg-gray-500 rounded-[20px] -mt-10'>
        <Image
          className=''
          src={`/images/ab1c505b-09bd-4d43-9ad6-3375e40c0569.jpg`}
          alt='AK'
          width={300}
          height={1}
        />
      </div>
    </section>
  )
}

export default Activity
