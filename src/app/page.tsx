import { FeaturedSection } from "@/components/FeaturedSection";
import Image from "next/image";

const produse = [
    {
        name: "t-shirt",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/t-shirt.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/t-shirt_white.jpg" }
        ],
        price: "19.99"
    },
    {
        name: "t-shirt",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/t-shirt.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/t-shirt_white.jpg" }
        ],
        price: "19.99"
    },
    {
        name: "t-shirt",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/t-shirt.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/t-shirt_white.jpg" }
        ],
        price: "19.99"
    },
    {
        name: "hoodie",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/hoodie.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/hoodie_white.jpg" }
        ],
        price: "49.99"
    },
    {
        name: "hoodie",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/hoodie.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/hoodie_white.jpg" }
        ],
        price: "49.99"
    },
    {
        name: "hoodie",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/hoodie.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/hoodie_white.jpg" }
        ],
        price: "49.99"
    },
    {
        name: "shorts",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/shorts.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/shorts_white.jpg" }
        ],
        price: "29.99"
    },
    {
        name: "shorts",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/shorts.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/shorts_white.jpg" }
        ],
        price: "29.99"
    },
    {
        name: "shorts",
        colors: [
            { name: "spatial black", color: "black", imageUrl: "/shorts.jpg" },
            { name: "sunlight white", color: "white", imageUrl: "/shorts_white.jpg" }
        ],
        price: "29.99"
    }
]

export default function Home() {
    return (
        <div>
            {/* hero section */}
            <div className=" h-[80vh] bg-zinc-800 flex flex-col justify-center items-center">
                <Image
                    src="/logo.png"
                    alt="hero"
                    width={300}
                    height={300}
                />
                <h1 className="text-xl text-white flex gap-1">
                    The <p className="text-green-400">#1</p> online reseller.
                </h1>
            </div>

            {/* featured item */}
            <div className="w-full bg-zinc-800 flex flex-col justify-center items-center">
                <h1 className="text-3xl text-white font-bold">Featured</h1>
                <FeaturedSection />
            </div>
        </div>
    );
}

export { produse }