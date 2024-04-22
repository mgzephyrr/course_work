"use client"

import { FormError } from '@/components/form-error';
import { Button } from '@/components/ui/button';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { API_URL } from '@/constants';
import { CreateEventSchema, OrganisationSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Input } from "./ui/input"
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import * as z from "zod"
import { FormSuccess } from './form-success';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';


const NewActivityForm = () => {
    type OrganisationInfo = {
        label: string,
        value: number
    }

    const [organisationVariants, setOrganisationVariants] = useState<OrganisationInfo[]>([])

    const [file, setFile] = useState<File>();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [organisationId, setOrganisationId] = useState<number | undefined>()

    useEffect(() => {
        axios.get(API_URL + '/studorg/user_organizations')
        .then((data) => {
            const orgs = data.data.map((org: z.infer<typeof OrganisationSchema>) => {
                return {
                    label: org.stud_org_name,
                    value: org.id
                } as OrganisationInfo
            })

            setOrganisationVariants([{
                    label: "От своего имени",
                    value: -1
                },
                ...orgs])
        })
        .catch((e) => { console.log(e) })
    }, [])

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
            avatar: undefined,
            isStudentOnly: false,
            organisation_id: undefined
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
        const isStudentOnly = (document.getElementById("student_only_checkbox") as HTMLInputElement).value;

        const [start_day, start_month, start_year] = event_start_date.split('.')
        const [start_hours, start_minutes] = event_start_time.split(':')

        const start_datetime = new Date(
            +start_year,
            +start_month - 1,
            +start_day,
            +start_hours + 5,
            +start_minutes
        )

        const [end_day, end_month, end_year] = event_end_date.split('.')
        const [end_hours, end_minutes] = event_end_time.split(':')

        const end_datetime = new Date(
            +end_year,
            +end_month - 1,
            +end_day,
            +end_hours + 5,
            +end_minutes
        )

        if (start_datetime >= end_datetime){
            setError("Дата начала мероприятия не может быть раньше даты окончания мероприятия!")
            return;
        }

        if (!file){
            setError("Загрузите заставку своего мероприятия!")
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
                admin_comment: '',
                isOnlyStudent: isStudentOnly,
                stud_org_id: organisationId === -1 ? undefined : organisationId
            },
            data:{
                file: file
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(() => { setSuccess("Мероприятие отправлено на рассмотрение!"); })
        .catch((e) => { setError("Произошла непредвиденная ошибка!") })
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
                        name="isStudentOnly"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        id="student_only_checkbox"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        Только студенты ВШЭ
                                    </FormLabel>
                                    <FormDescription>
                                        Люди, не учащиеся в ВШЭ не смогут участвовать в мероприятии
                                    </FormDescription>
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="organisation_id"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel>Организатор</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-auto justify-between",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value
                                            ? organisationVariants.find(
                                                (organisation) => organisation.value === field.value
                                            )?.label
                                            : "Выберите организатора"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Найти..." />
                                    <CommandEmpty>Нет совпадений.</CommandEmpty>
                                    <CommandList>
                                        {organisationVariants.map((organisation) => (
                                            <CommandItem
                                                value={organisation.label}
                                                key={organisation.value}
                                                onSelect={() => {
                                                    form.setValue("organisation_id", organisation.value)
                                                    setOrganisationId(organisation.value)
                                                }}
                                            >
                                            <Check
                                                className={cn(
                                                "mr-2 h-4 w-4",
                                                organisation.value === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                            />
                                            {organisation.label}
                                            </CommandItem>
                                        ))}
                                    </CommandList>
                                </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                Вы можете организовать мероприятие от имени какой-либо организации, либо от
                                своего собственного.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                        control={form.control}
                        name="avatar"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Аватар</FormLabel>
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
