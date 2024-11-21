import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function AppSlider({ ImageArrayList }: { ImageArrayList: string[] }) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="h-[380px] w-[120px]"
        >
            <CarouselContent className="-mt-1 h-[400px]">
                {ImageArrayList.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="pt-1 md:basis-1/3"
                    >
                        <div className="h-[120px] w-[120px]">
                            <Image
                                src={item}
                                width={200}
                                height={200}
                                alt="Images"
                                className="rounded-md h-[100%] border-2 border-AppPrimary"

                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>


    )
}
