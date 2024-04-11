"use client";

import { Skeleton } from "./ui/skeleton";
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
import { Avatar, AvatarFallback } from "./ui/avatar";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { API_URL } from "@/constants";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Profile() {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'ghost'}
                    className="p-px rounded-full self-center h-10 w-10"
                >
                    <Avatar className="h-10 w-10">
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuLabel>
                    <p>Мой аккаунт</p>
                    <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
                        Parik
                    </p>
                </DropdownMenuLabel>
                <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            href={'/profile/1'}
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
