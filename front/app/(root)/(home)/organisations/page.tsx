"use client";

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '@/constants'
import Link from 'next/link';

export type OrganisationInfo = {
  id: number
  avatar_file_name: string
  stud_org_name: string
  stud_org_description: string
  vk_link: string
  telegram_link: string
}

const Organisations = () => {
  const [organisations, setOrganisations] = useState<OrganisationInfo[] | undefined>();

  useEffect(() => {
    axios.get(API_URL + '/studorg')
    .then((response) => {
      setOrganisations(response.data);
    })
    .catch((error) => {
      console.log('Unexpected error:', error)
    })
  }, [])

  const getBg = (image_filename: string) => {
    if (image_filename){
      return `url(/images/${image_filename})`
    }
    return `url(/images/hero-background.jpg)`
  }

  return (
    <section className='grid max-sm:grid-cols-1 grid-cols-2 xl:grid-cols-3 size-full gap-5
    bg-light-3 p-6 rounded-[14px]'>
      {organisations && organisations?.map((organisation: OrganisationInfo) => {

        return (
          <Link href={"../organisation/" + organisation.id}
                key={organisation.id}
                className={`aspect-square w-auto rounded-[20px]`}
              >

            <div className="flex h-full flex-col justify-between w-auto bg-zinc-400 bg-blend-multiply max-sm:items-center
                  bg-cover cursor-pointer bg-center rounded-[20px] max-md:px-5 max-md:py-8 p-6 lg:p-8 max-sm:py-2"
                  style={{backgroundImage: getBg(organisation.avatar_file_name)}}>
                <h2 className='max-sm:font-extrabold max-sm:text-2xl text-xl font-extrabold lg:text-3xl text-sky-2'>
                  {organisation.stud_org_name}
                </h2>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default Organisations
