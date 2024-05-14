import { FeaturedSection } from "@/components/FeaturedSection";
import Image from "next/image";

const produse = [
    "black tee",
    "black tee",
    "black tee",
    "black hoodie",
    "black hoodie",
    "black hoodie",
    "black shorts",
    "black shorts",
    "black shorts"
]

const preturi = [
    "19.99€",
    "19.99€",
    "19.99€",
    "49.99€",
    "49.99€",
    "49.99€",
    "29.99€",
    "29.99€",
    "29.99€"
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
                    The <p className="text-green-400">clothing</p> brand.
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

export { produse, preturi }