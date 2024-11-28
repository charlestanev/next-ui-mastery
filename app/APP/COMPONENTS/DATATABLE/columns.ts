"use client"

import { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<DogImages>[] = [
    {
        accessorKey: "id",
        header: "ID",
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

// const data = [
//     {
//         id: 0,
//         ImageLink: "kurwa",
//     },
//     {
//         id: 1,
//         ImageLink: "kurwa1",
//     },
//     {
//         id: 2,
//         ImageLink: "kurwa2",
//     },
// ]