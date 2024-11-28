"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<DogImages>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        id: 'Avatar',
        cell: ({ row }) => {
            const { ImageLink } = row.original;
            return (
                
            )
        }
    },
    {
        accessorKey: "ImageLink",
        header: "Image Link",
    },
]

export const Convert = (data: string[]): DogImages[] => {
    return data.map((item, index) => {
        return {
            id: index + 1,
            ImageLink: item,
        }
    })
}