"use client"

import { FormError } from '@/components/form-error';
import { Button } from '@/components/ui/button';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { API_URL } from '@/constants';
import { CreateEventSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Input } from "./ui/input"
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import * as z from "zod"
import { FormSuccess } from './form-success';
import { Textarea } from './ui/textarea';
import { headers } from 'next/headers';

const NewActivityForm = () => {
    const [file, setFile] = useState<File>();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof CreateEventSchema>>({
        resolver: zodResolver(CreateEventSchema),
        defaultValues: {
            event_name: "",
            event_description: "",
            starting_date: "",
            starting_time: "",
            ending_date: "",
            ending_time: "",
            location: "",
            avatar: undefined
        },
    })

    const onSubmit = () => {
        setError("");
        setSuccess("");

        const event_name = (document.getElementById("event_name_input") as HTMLInputElement).value;
        const event_desc = (document.getElementById("event_desc_input") as HTMLInputElement).value;
        const event_start_date = (document.getElementById("event_start_date_input") as HTMLInputElement).value;
        const event_start_time = (document.getElementById("event_start_time_input") as HTMLInputElement).value;
        const event_end_date = (document.getElementById("event_end_date_input") as HTMLInputElement).value;
        const event_end_time = (document.getElementById("event_end_time_input") as HTMLInputElement).value;
        const event_location = (document.getElementById("event_location_input") as HTMLInputElement).value;

        const [start_day, start_month, start_year] = event_start_date.split('.')
        const [start_hours, start_minutes] = event_start_time.split(':')

        const start_datetime = new Date(
            +start_year,
            +start_month - 1,
            +start_day,
            +start_hours,
            +start_minutes
        )

        const [end_day, end_month, end_year] = event_end_date.split('.')
        const [end_hours, end_minutes] = event_end_time.split(':')

        const end_datetime = new Date(
            +end_year,
            +end_month - 1,
            +end_day,
            +end_hours,
            +end_minutes
        )

        if (start_datetime >= end_datetime){
            setError("Дата начала мероприятия не может быть раньше даты окончания мероприятия!")
            return;
        }

        axios.request({
            method: 'POST',
            url: API_URL + "/events/create",
            params:{
                event_name: event_name,
                event_description: event_desc,
                starting_time: start_datetime,
                ending_time: end_datetime,
                location: event_location,
                participants_count: 0,
                admin_comment: ''
            },
            data:{
                file: file
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then((resp) => { console.log(resp) })
        .catch((e) => { console.log(e) } )

        setSuccess("Мероприятие отправлено на рассмотрение!");
    }

  return (
    <FormProvider {...form}>
            <form id="newActivityForm"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 justify-center"
            >
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="event_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Название мероприятия</FormLabel>
                                <FormControl>
                                    <Input
                                        id="event_name_input"
                                        {...field}
                                        placeholder="Не более 50 символов"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="event_description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Описание мероприятия</FormLabel>
                                <FormControl>
                                    <Textarea
                                        id="event_desc_input"
                                        {...field}
                                        placeholder="Не более 2000 символов"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="starting_date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Дата начала мероприятия</FormLabel>
                                <FormControl>
                                    <Input
                                        id="event_start_date_input"
                                        {...field}
                                        placeholder="Формат: DD.MM.YYYY"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="starting_time"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Время начала мероприятия</FormLabel>
                                <FormControl>
                                    <Input
                                        id="event_start_time_input"
                                        {...field}
                                        placeholder="Формат: HH:MM"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ending_date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Дата окончания мероприятия</FormLabel>
                                <FormControl>
                                    <Input
                                        id="event_end_date_input"
                                        {...field}
                                        placeholder="Формат: DD.MM.YYYY"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ending_time"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Время конца мероприятия</FormLabel>
                                <FormControl>
                                    <Input
                                        id="event_end_time_input"
                                        {...field}
                                        placeholder="Формат: HH:MM"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Место проведения</FormLabel>
                                <FormControl>
                                    <Input
                                        id='event_location_input'
                                        {...field}
                                        placeholder="Не более 50 символов"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="avatar"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Аватар (опционально)</FormLabel>
                                <FormControl>
                                    <Input
                                        id='event_avatar_input'
                                        {...field}
                                        type='file'
                                        onChange={(e) => setFile(e.target.files?.[0])}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <div className='flex justify-center'>
                    <Button
                        type="submit"
                        className="max-md:w-full w-1/2 bg-blue-2 hover:bg-blue-500"
                    >
                        Отправить
                    </Button>
                </div>
            </form>
        </FormProvider>
  )
}

export default NewActivityForm
