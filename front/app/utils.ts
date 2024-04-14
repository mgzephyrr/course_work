import { API_URL } from "@/constants"
import { EventSchema, UserSchema } from "@/schemas";
import axios from "axios"
import { cookies } from "next/headers";
import * as z from "zod";

export async function getUser(): Promise<z.infer<typeof UserSchema> | undefined>{
    const cookie = cookies().get("Authorization")
    axios.defaults.withCredentials = true;
    try{
        const data = await axios.get(API_URL + '/auth/mebytoken', {
            params:{
                token: cookie?.value
            }
        })
        const user = {
            email: data.data['email'],
            first_name: data.data['first_name'],
            last_name: data.data['last_name'],
            paternity: data.data['paternity'],
            avatar_filename: data.data['avatar_file_name'],
        } as z.infer<typeof UserSchema>
        return user
    }
    catch(e) {
        return undefined;
    }
}

function GetStatus(start: string, end: string){
    const now = new Date().toISOString();
    if (now < start){
        return "Предстоит"
    }

    if (now > end){
        return "Завершено"
    }

    return "В процессе"
}

export async function getParticipationData(){
    try{
        const cookie = cookies().get("Authorization")
        axios.defaults.withCredentials = true;
        const data = await axios.get(API_URL + '/auth/signedeventsbytoken', {
            params:{
                token: cookie?.value
            }
        });
        const activities = data.data.map((row: z.infer<typeof EventSchema>) => {
            const start = row.starting_time.toString()
            const end = row.ending_time.toString()

            return {
                id: row.id,
                participants_count: row.participants_count,
                status: GetStatus(start, end),
                name: row.event_name
            }
        })
        return activities
    }
    catch(e){
        console.log(e)
        return []
    }
}
