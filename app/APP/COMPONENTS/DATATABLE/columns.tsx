"use client"

import { ColumnDef } from "@tanstack/react-table"

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

export const columns: ColumnDef<DogImages>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "ImageLink",
        header: "ImageLink",
    },
    {
        id: "actions",
        cell: ({ row }) => {

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
                            Copy payment ID
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
