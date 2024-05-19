"use client";

import React, { useState, useEffect } from "react";
import { LinkMeniu } from "./LinkMeniu";

export function Navbar() {
    const [isCartShown, setIsCartShown] = useState(false);
    const [cartList, setCartList] = useState<{ size: string; color: string; name: string; price: number }[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    }, [cartList]);

    const handleRemoveFromCart = (index: number) => {
        setCartList((prevCartList) => {
            // Create a copy of the cartList array
            const updatedCartList = [...prevCartList];
            // Remove the item at the specified index
            updatedCartList.splice(index, 1);
            // Return the updated cartList
            return updatedCartList;
        });
    };

    let totalPrice = 0;

    for (let i = 0; i < cartList.length; i++) {
        var price = parseFloat(cartList[i].price);
        totalPrice += price;
    }

    return (
        <div className=" bg-zinc-800 flex justify-between p-10 border-solid border-b-4 border-color-white z-100">
            <a href="/" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">
                Urban Universe
            </a>

            {/* right */}
            <div className=" flex gap-8">
                <a href="/" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">Home</a>
                {/* <a href="/about" className=" hover:scale-110 hover:cursor-pointer hover:text-green-400 transition-all duration-300 font-bold text-white">About</a> */}
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
                        className={`z-50 overflow-y-scroll cursor-default flex flex-col bg-zinc-800 rounded-lg border-solid border-4 border-color-white duration-500 py-4 absolute right-0 top-[104px] w-72 min-h-[70px] max-h-[50vh] ${isCartShown
                            ? "translate-y-0"
                            : " translate-y-[-75vh] delay-500"
                            }`}>
                        <div className="flex gap-4 w-full h-full flex-col mb-4">
                            {cartList.map((produs, index) => {
                                return (
                                    <div className="border-b-2 gap-4 flex justify-center items-center w-full max-h-[50px] p-4 hover:cursor-default transition-all duration-300">
                                        <a href={"/product/" + produs.name}>
                                            <img className="h-[50px] mb-4 transition-all duration-300 hover:scale-110" src={produs.color === "black" ? "/" + produs.name + ".jpg" : "/" + produs.name + "_white.jpg"} alt="" />
                                        </a>
                                        <h1 className="text-m text-center text-white brightness-75 mb-4">{produs.size} </h1>
                                        <div className="mb-4">
                                            <h1 className="text-l text-center capitalize text-white">{produs.name}</h1>
                                            <h1 className="text-m text-center text-white brightness-75">{produs.price}€ </h1>
                                        </div>
                                        <div className="hover:cursor-pointer mb-4 transition-all duration-300 hover:scale-110" onClick={() => handleRemoveFromCart(index)}>🗑️</div>
                                    </div>
                                )
                            })}
                        </div>
                        <a href="/checkout" className="bg-white flex justify-center items-center rounded-lg font-bold text-black w-64 min-h-[40px] transition-all duration-300 hover:scale-[1.02]">Checkout - {totalPrice}€</a>
                    </div>
                </div>
            </div>
        </div>
    );
}