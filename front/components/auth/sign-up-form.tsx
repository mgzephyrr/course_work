"use client"
import * as z from "zod"
import axios from "axios"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "@/components/ui/form"

import { SignUpSchema } from "@/schemas"
import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { useState } from "react"
import { session_url } from "@/constants"

export const SignUpForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            hashed_password: "",
            first_name: "",
            last_name: "",
            paternity: "",
        },
    })

    const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
        setError("");
        setSuccess("");

        axios.post(session_url + "/auth/signup", values)
            .then((data) => {
                setError("");
                setSuccess("На указанный адрес электронной почты отправлено письмо для подтверждения регистрации!");
            })
            .catch((e) => {
                const expectedErr = "Email already in use";
                if (e.response.status !== 400 || e.response.data.detail !== expectedErr) {
                    throw e;
                }
                setError("Пользователь с такой почтой уже зарегистрирован!")
                console.log('Error on Authentication')
                console.log(e)
            })
            .catch((e) => {
                const expectedErr = "Only email addresses ending with @edu.hse.ru are allowed";
                if (e.response.status !== 400 || e.response.data.detail !== expectedErr) {
                    throw '';
                }
                setError("Допускаются только почты, оканчивающиеся на @edu.hse.ru")
                console.log('Error on Authentication')
                console.log(e)
            })
    }

    return (
        <CardWrapper
            headerLabel="Создавай акк. СУКА"
            backButtonLabel="Уже есть акк?? Красавчик"
            backButtonHref="/sign-in"
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Электронная почта</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="email@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Имя</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Ваше имя"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Фамилия</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Ваша фамилия"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="paternity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Отчество</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Ваше отчество (при наличии)"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="hashed_password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Зарегистрироваться
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
