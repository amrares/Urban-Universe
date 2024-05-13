import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const produse = [
    "otrava de sobolani",
    "caiet A4",
    "pix",
    "laptop",
    "telefon",
    "masina",
    "bicicleta",
    "papuci",
    "ochelari",
    "pantaloni",
    "tricou",
    "palarie",
    "ceas",
    "bratara",
    "cercei",
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
                                <Card>
                                    <CardContent className="flex aspect-square">
                                        {produs}
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
