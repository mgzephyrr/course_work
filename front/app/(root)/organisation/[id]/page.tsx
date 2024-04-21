"use client"

import React, { useEffect, useState } from 'react'
import { OrganisationInfo } from '../../(home)/organisations/page'
import axios from 'axios'
import { API_URL } from '@/constants'
import { Separator } from '@/components/ui/separator'
import { InfoIcon } from 'lucide-react'
import Image from 'next/image';
import OrganisationMembersTable from '@/components/organisation-members/organisation-members-table'
import { OrganisationMember } from '@/components/organisation-members/columns'

function Organisation({params}: { params: {id: number} }) {
  type MemberInfo = {
    first_name: string,
    last_name: string,
    avatar_file_name: string,
    paternity: string,
    role_name: string
  }

  const organization_id = params.id
  const [organisation, setOrganisation] = useState<OrganisationInfo | undefined>()
  const [orgMembers, setOrgMembers] = useState<OrganisationMember[]>([])

  useEffect(() => {
    axios.get(API_URL + `/studorg/${organization_id}`, {
        params:{
            stud_org_id: organization_id
        }
    })
    .then((organisation_data) => {
        setOrganisation({
            id: organisation_data.data['id'],
            avatar_file_name: organisation_data.data['avatar_file_name'],
            stud_org_name: organisation_data.data['stud_org_name'],
            stud_org_description: organisation_data.data['stud_org_description'],
            vk_link: organisation_data.data['vk_link'],
            telegram_link: organisation_data.data['telegram_link'],
        })
    })
    .catch((e) => console.log(e))

    axios.get(API_URL + `/studorg/${organization_id}/members`, {
        params:{
            organization_id: organization_id
        }
    })
    .then((data) => {
        setOrgMembers(data.data.map((member: MemberInfo) => {
            return {
                full_name: member['last_name'] + ' ' + member['first_name'] + ' ' + member['paternity'],
                avatar_filename: member['avatar_file_name'] ? member['avatar_file_name'] : '/default-avatar.png',
                role: member['role_name']
            }
        }))
    })
    .catch((e) => setOrgMembers([]))
  }, [])

  if (!organisation){
    return;
  }

  return (
    <section className='flex size-full flex-col gap-3 p-6
    bg-light-3 rounded-[10px] border border-gray-300 shadow h-auto max-sm:w-screen'>
        <div className="flex flex-row gap-x-5 items-center">
            <div className='flex bg-cover bg-center bg-gray-200 rounded-full border-gray-300
                            lg:border-4 lg:h-[192px] lg:w-[192px] lg:min-w-[192px]
                            border-2 h-[128px] w-[128px] min-w-[128px]
                            max-sm:border-1 max-sm:h-[64px] max-sm:w-[64px] max-sm:min-w-[64px]'

                 style={{backgroundImage: organisation?.avatar_file_name?
                        `url(/images/${organisation?.avatar_file_name})` :
                        `url(/images/hero-background.jpg)`}}
            />
            <div className="flex flex-col gap-y-2">
                <h1 className="max-sm:text-xl text-2xl lg:text-4xl font-semibold">{organisation?.stud_org_name}</h1>
                <div className='flex flex-row items-center h-fit w-fit gap-x-4 text-muted-foreground'>
                    <Image
                        src={'/icons/vk-icon.svg'}
                        alt={'vk-icon'}
                        width={32}
                        height={32}
                    />
                    <h2>{organisation?.vk_link ? organisation?.vk_link : "Нет ссылки"}</h2>
                </div>
                <div className='flex flex-row items-center h-fit w-fit gap-x-4 text-muted-foreground'>
                    <Image
                        src={'/icons/telegram-icon.svg'}
                        alt={'vk-icon'}
                        width={32}
                        height={32}
                    />
                    <h2>{organisation?.telegram_link ? organisation?.telegram_link : "Нет ссылки"}</h2>
                </div>
            </div>
        </div>
        <Separator className='w-full bg-gray-300'/>
        <div className='flex flex-row max-sm:justify-center h-fit w-full px-4 gap-x-4 items-center'>
            <InfoIcon className='lg:h-6 lg:w-6 lg:min-w-6
                                h-5 w-5 min-w-5
                                max-sm:h-4 max-sm:w-4 max-sm:min-w-4'/>
            <h1 className='lg:text-lg font-semibold max-sm:text-xs text-md
                                break-words text-black'>
                {organisation?.stud_org_description ? organisation?.stud_org_description : "Нет описания"}
            </h1>
        </div>
        <Separator className='w-full bg-gray-300'/>
        <OrganisationMembersTable data={orgMembers} />
    </section>
  )
}

export default Organisation
