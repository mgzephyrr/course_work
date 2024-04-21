"use client"

import { FormError } from '@/components/form-error';
import { Button } from '@/components/ui/button';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { API_URL } from '@/constants';
import { FeedbackSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import router from 'next/router';
import { Input } from "./ui/input"
import React, { useState } from 'react'
import { useForm, Form, FormProvider } from 'react-hook-form';
import * as z from "zod"
import { FormSuccess } from './form-success';
import { Textarea } from './ui/textarea';

const FeedbackForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof FeedbackSchema>>({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            review: "",
        },
    })

    const onSubmit = () => {
        setError("");
        setSuccess("");
        const formValues = document.getElementById("reviewForm") as HTMLFormElement;

        // ЗАПРОСЕЦ
        setSuccess("Ваш отзыв успешно направлен команде разработчиков!");
    }

  return (
    <FormProvider {...form}>
            <form id="reviewForm"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 justify-center"
            >
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="review"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Отзыв</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        placeholder="Оставьте ваш отзыв здесь"
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

export default FeedbackForm
