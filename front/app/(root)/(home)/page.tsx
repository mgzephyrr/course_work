import React from 'react'

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }); // должна быть дата и время мероприятия
  const date = (new Intl.DateTimeFormat('ru-RU', { dateStyle: 'full' })).format(now); // должна быть дата и время мероприятия

  return (
      <section className='flex size-full flex-col gap-5 text-white
      bg-light-3 p-6 rounded-[14px]'>
        <h1 className='text-blue-3 text-2xl font-extrabold lg:text-4xl'>Ближайшее мероприятие</h1>
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-zinc-500 bg-blend-multiply'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-6 lg:p-11 '>
            <h2 className='max-w-[600px] rounded py-2 font-normal'>
              Очень длинное название мероприятия длиной 52 символа
            </h2>

            <div className='flex flex-col gap-2 w-fit'>
              <h1 className='text-4xl font-extrabold lg:text-6xl text-sky-2'>{time}</h1>
              <p className='text-lg font-medium lg:text-2xl text-sky-1'>{date}</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home
