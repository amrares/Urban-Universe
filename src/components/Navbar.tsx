"use client";

import React, { useState, useEffect } from "react";
import { LinkMeniu } from "./LinkMeniu";

export function Navbar() {
    const [isCartShown, setIsCartShown] = useState(false);
    const [cartList, setCartList] = useState<{ size: string; color: string; name: string; price: string }[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    }, [cartList]);

    return (
        <div className=" bg-zinc-800 flex justify-between p-10 border-solid border-b-4 border-color-white">
            <a href="/" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">
                Urban Universe
            </a>

            {/* right */}
            <div className=" flex gap-8">
                <a href="/" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">Home</a>
                <a href="/about" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">About</a>
                <a href="/products" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">Products</a>
                {/* Cart link */}
                <div
                    onMouseEnter={(e) => {
                        setIsCartShown(true);
                    }}
                    onMouseLeave={(e) => {
                        setIsCartShown(false);
                    }}
                    className="ml-4 cursor-pointer">
                    <div className="hover:-rotate-180 duration-500 scale-150">🛒</div>
                    {/* cart drop menu */}
                    <div
                        className={`cursor-default flex justify-center items-center bg-zinc-800 rounded-lg border-solid border-4 border-color-white duration-500 py-4 absolute right-0 top-[104px] w-72 min-h-[70px] max-h-[50vh] ${isCartShown
                            ? "translate-y-0"
                            : " translate-y-[-50vh] delay-500"
                            }`}>
                        <div className="flex items-center gap-4 w-full h-full flex-col">
                        {cartList.map((produs, index) => {
                            return (
                                <a href={"/product/" + produs} className="w-full">
                                    <div className="border-solid flex flex-col justify-center items-center w-full min-h-[650px] hover:scale-110 hover:cursor-pointer transition-all duration-300">
                                        <img src={"/" + produs + ".jpg"} alt="" />
                                        <h1 className="text-3xl text-center capitalize text-white">{produs.name} {index}</h1>
                                        <h1 className="text-2xl text-center text-white brightness-75">{produs.price[index]}</h1>
                                    </div>
                                </a>
                            )
                            })}
                        </div >
                        <button className="bg-white absolute bottom-[12px] rounded-lg font-bold text-black w-64 min-h-[40px]">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
