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
    }).max(50, {
        message: "Имя не может содержать более 50 символов"
    }),
    last_name: z.string().min(1, {
        message: "Пожалуйста, введите вашу фамилию"
    }).max(50, {
        message: "Фамилия не может содержать более 50 символов"
    }),
    paternity: z.string().max(50, {
        message: "Отчество не может содержать более 50 символов"
    }),
    email: z.string().email({
        message: "Пожалуйста, введите вашу почту"
    }),
    hashed_password: z.string().min(6, {
        message: "Минимальная длина пароля: 6 символов"
    }),
})

// сделать схему для реги мероприятия (убрать айдишник, comment и moderated)
export const EventSchema = z.object({
    id: z.number(),
    event_name: z.string(),
    event_description: z.string(),
    starting_time: z.date(),
    ending_time: z.date(),
    location: z.string(),
    participants_count: z.number(),
    admin_comment: z.string(),
    image_file_name: z.string(),
    isModerated: z.boolean(),
    organizers: z.string()
})

//
export const OrganisationSchema = z.object({
    id: z.number(),
    stud_org_name: z.string(),
    stud_org_description: z.string(),
    vk_link: z.string(),
    telegram_link: z.string(),
    avatar_file_name: z.string(),
})

export const UserSchema = z.object({
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    paternity: z.string(),
    avatar_file_name: z.string()
})

export const FeedbackSchema = z.object({
    review: z.string().min(1, {
        message: "Пожалуйста, оставьте свой отзыв в этом поле"
    }).max(1024, {
        message: "Пожалуйста, сократите ваш отзыв до 1024 символов"
    })
})

export const CreateEventSchema = z.object({
    event_name: z.string().min(1, {
        message: "Пожалуйста, введите название мероприятия"
    }).max(50, {
        message: "Длина названия не должна превышать 50 символов"
    }),
    event_description: z.string().min(1, {
        message: "Пожалуйста, введите описание мероприятия"
    }).max(2000, {
        message: "Длина описания не может превышать 2000 символов"
    }),
    starting_date: z
        .string()
        .regex(new RegExp('(^(31)[.](0[13578]|1[02])[.]((18|19|20)[0-9]{2})$)|(^(29|30)[.](01|0[3-9]|1[1-2])[.]((18|19|20)[0-9]{2})$)|(^(0[1-9]|1[0-9]|2[0-8])[.](0[1-9]|1[0-2])[.]((18|19|20)[0-9]{2})$)|(^(29)[.](02)[.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)$)'), 'Введена некорректная дата'),
    starting_time: z
        .string()
        .regex(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'), 'Введено некорректное время'),
    ending_date: z
        .string()
        .regex(new RegExp('(^(31)[.](0[13578]|1[02])[.]((18|19|20)[0-9]{2})$)|(^(29|30)[.](01|0[3-9]|1[1-2])[.]((18|19|20)[0-9]{2})$)|(^(0[1-9]|1[0-9]|2[0-8])[.](0[1-9]|1[0-2])[.]((18|19|20)[0-9]{2})$)|(^(29)[.](02)[.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)$)'), 'Введена некорректная дата'),
    ending_time: z
        .string()
        .regex(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'), 'Введено некорректное время'),
    location: z.string().min(1, {
        message: "Пожалуйста, введите место проведения мероприятия"
    }).max(50, {
        message: "Место проведения мероприятия не может содержать более 50 символов"
    }),
    avatar: z.any(),
    isStudentOnly: z.boolean(),
    organisation_id: z.optional(z.number())
})
