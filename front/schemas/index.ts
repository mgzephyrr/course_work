import * as z from "zod";

export const SignInSchema = z.object({
    email: z.string().email({
        message: "Пожалуйста, введите вашу почту"
    }),
    password: z.string().min(1, {
        message: "Пожалуйста, введите пароль"
    })
})

export const SignUpSchema = z.object({
    email: z.string().email({
        message: "Пожалуйста, введите вашу почту"
    }),
    password: z.string().min(6, {
        message: "Минимальная длина пароля: 6 символов"
    }),
    name: z.string().min(1, {
        message: "Пожалуйста, введите ваше имя"
    }),
    surname: z.string().min(1, {
        message: "Пожалуйста, введите вашу фамилию"
    }),
    paternity: z.string()
})
