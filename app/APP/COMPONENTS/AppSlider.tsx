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
            className="h-[200px] w-[200px] flex items-center justify-center"
        >
            <CarouselContent className="-mt-1 h-[220px]">
                {ImageArrayList.map((item, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-6 h-[200px]">

                                    <Image
                                        src={item}
                                        alt={"images in here"}
                                        className="w-full h-auto max-h-[180px]"
                                        width={1000}
                                        height={0}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
