import { produse, preturi } from "@/app/page";

function searchIndex(props: any) {
    for (let i = 0; i < produse.length; i++) {
        if (produse[i] === props) {
            return i;
        }
    }
    return -1; // Return a default value when the item is not found
}

function Page(props: any) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className=" flex w-[70%] h-[650px]">
                <div className=" items-center justify-center flex flex-col w-[50%] h-[650px]">
                    <h1 className="text-6xl text-white font-bold uppercase">{decodeURIComponent(props.params.productName)}</h1>
                    <h1 className="text-l mt-4 text-white brightness-75 text uppercase">100% cotton & manufactured in RO,</h1>
                    <h1 className="text-l text-white brightness-75 text uppercase">Oversized fit</h1>

                    <h1 className="text-l mt-10 text-white brightness-75 text uppercase">size guide</h1>
                    
                    {/* Size selection */}
                    <div className="flex mt-12 text-white gap-14">
                        <button className="brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100">S</button>
                        <button className="brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100">M</button>
                        <button className="brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100">L</button>
                        <button className="brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100">XL</button>
                        <button className="brightness-75 hover:scale-110 transition-all duration-300 hover:brightness-100">XXL</button>
                    </div>

                    {/* Color selection */}
                    <div className="flex mt-12 text-white font-bold text-l gap-14">
                        <button className="uppercase flex gap-4 hover:scale-110 transition-all duration-300">
                            <div className="w-6 h-6 bg-black rounded-full border-solid border-2 border-green-400"></div>
                            <p className="brightness-75 hover:brightness-100 transition-all duration-300">spacial black</p>
                            </button>
                        <button className="uppercase flex gap-4 hover:scale-110 transition-all duration-300">
                            <div className="w-6 h-6 bg-white rounded-full border-solid border-2 border-green-400"></div>
                            <p className="brightness-75 hover:brightness-100 transition-all duration-300">sunlight white</p>
                            </button>
                    </div>

                    {/* Add to cart button */}
                    <button className="mt-12 text-white font-bold text-l border-solid border-2 border-white rounded-lg p-3 uppercase brightness-75 hover:brightness-100 hover:scale-110 transition-all duration-300">Add to cart - {preturi[searchIndex(decodeURIComponent(props.params.productName))]}</button>
                </div>

                {/* Image */}
                <div className=" items-center justify-center flex flex-col w-[50%] h-[650px]">
                    <img src={"/" + decodeURIComponent(props.params.productName) + ".jpg"} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Page;