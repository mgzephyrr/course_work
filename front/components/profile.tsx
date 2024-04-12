"use client";

import axios from "axios";
import * as z from "zod"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, User } from "lucide-react";
import { API_URL } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserSchema } from "@/schemas";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export function Profile() {
    const router = useRouter();
    const [user, setUser] = useState<z.infer<typeof UserSchema>>();

    axios.defaults.withCredentials = true;
        useEffect(() => {
        axios.get(API_URL + '/auth/me')
        .then((response) => {
            setUser({
                email: response.data['email'],
                first_name: response.data['first_name'],
                last_name: response.data['last_name'],
                paternity: response.data['paternity'],
                avatar_filename: response.data['avatar_file_name'],
            })
        })
        .catch((error) => {
            console.log('Unexpected error:', error)
        })
    }, [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'ghost'}
                    className="p-px rounded-full self-center h-10 w-10"
                >
                    <Avatar>
                        {
                            !user && <Skeleton className="h-12 w-12 rounded-full"/>
                        }
                        {
                            user?.avatar_filename &&
                            <AvatarImage src={`images/${user?.avatar_filename}`}/>
                        }
                        {
                            user && !user?.avatar_filename &&
                            <AvatarFallback>
                                {(user?.first_name.slice(0, 1)! + user?.first_name.slice(0, 1)!)}
                            </AvatarFallback>
                        }

                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuLabel>
                    <p>Мой аккаунт</p>
                    {
                        !user &&
                        <Skeleton className="w-full h-4"/>
                    }
                    {
                        user &&
                        <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
                            {user?.first_name + ' ' + user?.last_name}
                        </p>
                    }

                </DropdownMenuLabel>
                <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            href={'/profile'}
                        >
                            <User className="mr-2 h-4 w-4"/>
                            <span>Профиль</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                        axios.post(API_URL + '/auth/logout')
                        .then(() => {
                            router.push('/sign-in')
                        })
                        .catch((e) => {
                            console.log('Unexpected error', e)
                        })
                    }}>
                        <LogOut className="mr-2 h-4 w-4"/>
                        <span>Выход</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
