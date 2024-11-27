"use client"

import { ColumnDef } from "@tanstack/react-table"

export type DogImages = {
    id: number;
    ImageLink: string;
};

const ColumnFunctionDef = (): ColumnDef<DogImages>[] => {
    const columns: ColumnDef<DogImages>[] = [
        {
            accessorKey: "",
            header: "ImageLink",
        }
    ]

    return columns
}