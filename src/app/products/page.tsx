import Image from "next/image";

const produse = [
    "Black Tee",
    "Black Tee",
    "Black Tee",
    "Black Hoodie",
    "Black Hoodie",
    "Black Hoodie",
    "Black Shorts",
    "Black Shorts",
    "Black Shorts"
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

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className="flex justify-between m-24 gap-4 w-full h-full flex-wrap">
                {produse.map((produs, index) => {
                    return (
                        <a href={"/product/" + "black tee"} className="w-[25%]">
                            <div className="border-solid flex flex-col justify-center items-center w-full min-h-[650px] hover:scale-110 hover:cursor-pointer transition-all duration-300">
                                <img src={"/" + produs + ".jpg"} alt="" />
                                <h1 className="text-3xl text-center text-white">{produs}</h1>
                                <h1 className="text-2xl text-center text-white brightness-75">{preturi[index]}</h1>
                            </div>
                        </a>
                    )
                })}
            </div >
        </div >
    );
}
