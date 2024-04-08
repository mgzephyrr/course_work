import * as z from "zod";

export const SignInSchema = z.object({
    username: z.string().email({
        message: "Пожалуйста, введите вашу почту"
    }),
    password: z.string().min(1, {
        message: "Пожалуйста, введите пароль"
    })
})

export const SignUpSchema = z.object({
    first_name: z.string().min(1, {
        message: "Пожалуйста, введите ваше имя"
    }),
    last_name: z.string().min(1, {
        message: "Пожалуйста, введите вашу фамилию"
    }),
    paternity: z.string(),
    email: z.string().email({
        message: "Пожалуйста, введите вашу почту"
    }),
    hashed_password: z.string().min(6, {
        message: "Минимальная длина пароля: 6 символов"
    }),
})

export const EventSchema = z.object({
    id: z.number(),
    event_name: z.string(),
    event_description: z.string(),
    starting_time: z.date(),
    ending_time: z.date(),
    location: z.string(),
    participants_count: z.number(),
    admin_comment: z.string()
})
