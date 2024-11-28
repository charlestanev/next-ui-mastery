"use client"

import { ColumnDef } from "@tanstack/react-table"

export type DogImages = {
    id: number;
    ImageLink: string;
};

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

export const Convert = (ImageArray: string[]): DogImages[] => {
    return [
        {
            id: 0,
            ImageLink: "kurwa",
        },
        {
            id: 1,
            ImageLink: "kurwa1",
        },
        {
            id: 2,
            ImageLink: "kurwa2",
        },
    ]
}