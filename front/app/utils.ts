import { API_URL } from "@/constants"
import { UserSchema } from "@/schemas";
import axios from "axios"
import * as z from "zod";

export async function getUser(): Promise<z.infer<typeof UserSchema> | undefined>{
    //const cookie = cookies().get("Authorization")
    axios.defaults.withCredentials = true;
    try{
        const data = await axios.get(API_URL + '/auth/me')
        const user = {
            email: data.data['email'],
            first_name: data.data['first_name'],
            last_name: data.data['last_name'],
            paternity: data.data['paternity'],
            avatar_file_name: data.data['avatar_file_name'],
        } as z.infer<typeof UserSchema>
        return user
    }
    catch(e) {
        return undefined;
    }
}
