import NewActivityForm from '@/components/form-new-activity'
import React from 'react'

const NewActivity = () => {
  return (
    <section className='flex size-full flex-col gap-5
      bg-light-3 p-6 rounded-[14px]'>
        <NewActivityForm/>
    </section>
  )
}

export default NewActivity
