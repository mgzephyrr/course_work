import FeedbackForm from '@/components/feedback-form'
import React from 'react'

const FeedbackPage = () => {
  return (
    <section className='flex size-full flex-col gap-5
      bg-light-3 p-6 rounded-[14px]'>
        <FeedbackForm />
    </section>
  )
}

export default FeedbackPage
