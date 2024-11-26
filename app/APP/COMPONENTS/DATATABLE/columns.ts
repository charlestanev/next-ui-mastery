"use client"

import { ColumnDef } from "@tanstack/react-table"

export type DogImages = {
    ImageLink: string
}

export const columns: ColumnDef<string>[] = [
    {
        header: "ImageLink",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]
