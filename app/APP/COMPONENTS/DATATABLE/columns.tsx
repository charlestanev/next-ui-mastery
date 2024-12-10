"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

const ViewLargeImage = ({ ImageLink }: { ImageLink: string }) => {
    const Router = useRouter()

    return (
        <p onClick={() => { Router.push(`/details/?ImageUrl=${ImageLink}`) }}>Show Image</p>
    )
}

export const columns: ColumnDef<DogImages>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        header: "Avatar",
        id: "Avatar",
        cell: ({ row }) => {
            const Image = row.original
            return (
                <Avatar>
                    <AvatarImage src={Image.ImageLink} />
                    <AvatarFallback>
                        {Image.ImageLink}
                        CN
                    </AvatarFallback>
                </Avatar>
            )
        }
    },
    {
        accessorKey: "ImageLink",
        header: "ImageLink",
    },
    {
        header: "Actions",
        id: "actions",
        cell: ({ row }) => {
            const Image = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild >
                        <Button variant="ghost" className="h-8 w-8 p-0" >
                            <span className="sr-only" > Open menu </span>
                            < MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    < DropdownMenuContent align="end" >
                        <DropdownMenuLabel>Actions </DropdownMenuLabel>
                        < DropdownMenuItem
                            onClick={() => {

                            }}
                        >
                            <ViewLargeImage ImageLink={Image.ImageLink} />
                        </DropdownMenuItem>
                        < DropdownMenuSeparator />
                        <DropdownMenuItem>View customer </DropdownMenuItem>
                        < DropdownMenuItem > View payment details </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]
