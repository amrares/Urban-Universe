import * as React from "react"
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const produse = [
    "t-shirt",
    "hoodie",
    "shorts",
    "t-shirt_white",
    "hoodie_white",
    "shorts_white"
]

export function FeaturedSection() {
    return (
        <Carousel className="w-[90%] m-4"

            opts={{
                loop: true,
            }}>
            <CarouselContent>
                {produse.map((produs, index) => {
                    return (
                        <CarouselItem key={index} className="basis-1/5">
                            <a href={"/product/" + produs}>
                                <Card className="border-transparent bg-zinc-800">
                                    <CardContent className="flex aspect-square justify-center transition-all duration-500 hover:brightness-75">
                                        <img src={"/" + produs + ".jpg"} alt="" />
                                    </CardContent>
                                </Card>
                            </a>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
