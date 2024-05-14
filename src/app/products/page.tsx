import Image from "next/image";
import { produse, preturi } from "../page";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className="flex justify-between m-24 gap-4 w-full h-full flex-wrap">
                {produse.map((produs, index) => {
                    return (
                        <a href={"/product/" + produs} className="w-[25%]">
                            <div className="border-solid flex flex-col justify-center items-center w-full min-h-[650px] hover:scale-110 hover:cursor-pointer transition-all duration-300">
                                <img src={"/" + produs + ".jpg"} alt="" />
                                <h1 className="text-3xl text-center capitalize text-white">{produs} {index}</h1>
                                <h1 className="text-2xl text-center text-white brightness-75">{preturi[index]}</h1>
                            </div>
                        </a>
                    )
                })}
            </div >
        </div >
    );
}