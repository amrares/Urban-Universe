"use client";

import { useState, useEffect } from "react";

export default function Checkout() {

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
    let numberOfItems = 0;
    let ShippingPrice = 0;

    for (let i = 0; i < cartList.length; i++) {
        var price = parseFloat(cartList[i].price);
        totalPrice += price;
        numberOfItems += 1;
    }

    return (
        <div className="flex justify-between gap-10 h-screen w-full items-center bg-zinc-800 px-32">
            <div className="flex flex-col w-[50vw] mt-0">
                <div className="flex w-[50vw] mb-10 bg-white bg-opacity-20 rounded-lg p-5 flex-col">
                    <div className="flex">
                        <div className="flex justify-center items-center w-6 h-6 rounded-full bg-green-400 text-zinc-800 font-bold">1</div>
                        <h1 className="text-white font-bold px-5">Billing Details</h1>
                    </div>
                    <div className="py-5 flex gap-10">
                        <input type="text" placeholder="First Name" className="w-[50%] h-8 rounded-lg px-5" />
                        <input type="text" placeholder="Last Name" className="w-[50%] h-8 rounded-lg px-5" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div className="py-5">
                        <input type="text" placeholder="Company name (optional)" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div>
                        <select name="Country" id="" className="w-[100%] h-8 rounded-lg px-5">
                            <option value="">Country</option>
                            <option value="1">Romania</option>
                        </select>
                    </div>
                    <div className="py-5">
                        <input type="text" placeholder="Address" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div>
                        <input type="text" placeholder="Address 2 (optional)" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div className="py-5">
                        <input type="text" placeholder="City" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div>
                        <select name="State" id="" className="w-[100%] h-8 rounded-lg px-5">
                            <option value="">County</option>
                            <option value="1">Bihor</option>
                        </select>
                    </div>
                </div>

                <div className="flex w-[50vw] bg-white bg-opacity-20 rounded-lg p-5 flex-col">
                    <div className="flex">
                        <div className="flex justify-center items-center w-6 h-6 rounded-full bg-green-400 text-zinc-800 font-bold">2</div>
                        <h1 className="text-white font-bold px-5">Payment Method</h1>
                    </div>
                    <div className="py-5">
                        <input type="text" placeholder="Card number" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div>
                        <input type="text" placeholder="Name on card" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                    <div className="py-5 flex gap-10">
                        <input type="text" placeholder="Expiration date" className="w-[100%] h-8 rounded-lg px-5" />
                        <input type="text" placeholder="CVC" className="w-[100%] h-8 rounded-lg px-5" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[50vw] h-[90vh] overflow-y-scroll overflow-x-hidden mt-10 bg-white bg-opacity-20 rounded-lg">
                <div className="flex flex-col justify-between">
                    <div className="flex p-10 justify-between">
                        <h1 className="font-bold text-white scale-125">🛒 Cart ({numberOfItems})</h1>
                        <h1 className="font-bold text-white scale-125">{totalPrice} €</h1>
                    </div>
                    <div className="flex gap-4 w-full h-full flex-col mb-4">
                        {cartList.map((produs, index) => {
                            return (
                                <div className="justify-between border-b-2 gap-24 flex items-center w-full p-4 hover:cursor-default transition-all duration-300">
                                    <a href={"/product/" + produs.name}>
                                        <img className="h-[150px] mb-4 transition-all duration-300 hover:scale-110" src={produs.color === "black" ? "/" + produs.name + ".jpg" : "/" + produs.name + "_white.jpg"} alt="" />
                                    </a>

                                    <div className="mb-4">
                                        <h1 className="text-2xl font-bold text-center capitalize text-white">{produs.name}</h1>
                                        <h1 className="text-l font-bold text-center text-white brightness-75">{produs.size} </h1>
                                        <h1 className="text-l font-bold text-center text-white brightness-75">{produs.price}€ </h1>
                                    </div>
                                    <div className="mr-12 text-3xl hover:cursor-pointer mb-4 transition-all duration-300 hover:scale-110" onClick={() => handleRemoveFromCart(index)}>🗑️</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="">
                        <div className="flex px-10 pt-5 justify-between">
                            <h1 className="text-xl font-bold capitalize text-white">Subtotal</h1>
                            <h1 className="text-xl font-bold text-white">{totalPrice}€</h1>
                        </div>
                        <div className="flex px-10 pt-2 justify-between">
                            <h1 className="text-xl font-bold capitalize text-white">Estimated Shipping</h1>
                            <h1 className="text-xl font-bold text-white">{ShippingPrice === 0 ? "Free" : ShippingPrice + "€"}</h1>
                        </div>
                        <div className="flex px-10 pt-2 justify-between">
                            <h1 className="text-xl font-bold capitalize text-white">Total</h1>
                            <h1 className="text-xl font-bold text-white">{totalPrice + ShippingPrice}€</h1>
                        </div>
                        <a href="/checkout" className="bg-white m-10 flex justify-center items-center rounded-lg font-bold text-black w-[90%] min-h-[40px] transition-all duration-300 hover:scale-[1.02]">Place Order</a>
                    </div>
                </div>
            </div >
        </div >
    );
}