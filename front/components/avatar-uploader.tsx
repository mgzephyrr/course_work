"use client"

import React, { useState } from 'react'

import { UserSchema } from '@/schemas';
import { API_URL } from '@/constants';
import axios from 'axios';
import { Button } from './ui/button';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
import { Input } from './ui/input';


const AvatarUploader = () => {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    setSuccess("")
    setError("")

    e.preventDefault()
    if (!file) return;

    try {
      axios.defaults.withCredentials = true

      const formData = new FormData();
      formData.set("file", file)

      await axios.post(API_URL + "/auth/createavatar", formData)
      setSuccess("Аватар успешно загружен, обновите страницу, чтобы увидеть изменения")
    }
    catch(e){
      if (e.response.data.detail === "Only JPEG, JPG and PNG files are allowed"){
        setError("Для загрузки разрешены только JPG, JPEG или PNG файлы!")
      }
      else if (e.response.data.detail === "File size too large. Maximum size is 1 megabyte."){
        setError("Для загрузки разрешены только файлы, вес которых не превышает 1Мбайт!")
      }
      else{
        setError("Произошла непредвиденная ошибка, попробуйте загрузить аватар позже")
      }
    }
  }

  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit}
      className='flex flex-col gap-y-6'>
        <div className='flex max-md:items-center max-md:flex-col max-md:gap-y-5 gap-x-5'>
          <Input
            type='file'
            name='file'
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          {/* <input
            className='max-sm:w-[200px] whitespace-normal'
            type='file'
            name='file'
            onChange={(e) => setFile(e.target.files?.[0])}>
          </input> */}
          <Button type='submit'
                  className="bg-blue-2 hover:bg-blue-500 max-md:w-full w-1/2
                  whitespace-normal"
                  value='Upload'>Сохранить аватар</Button>
        </div>

        <FormError message={error}/>
        <FormSuccess message={success}/>
      </form>
    </div>
  )
}

export default AvatarUploader
