import { FeaturedSection } from "@/components/FeaturedSection";
import Image from "next/image";

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
