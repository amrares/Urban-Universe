"use client";
import { produse } from "@/app/page";
import React, { useState, useEffect } from "react";

function searchIndex(props: any) {
    for (let i = 0; i < produse.length; i++) {
        if (produse[i].name === props) {
            return i;
        }
    }
    return -1; // Return a default value when the item is not found
}

function Page(props: any) {
    const name = decodeURIComponent(props.params.productName);
    const price = produse[searchIndex(name)].price;

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState("black");
    const [cartList, setCartList] = useState<{ size: string; color: string; name: string; price: string }[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const selectedProduct = produse[searchIndex(name)];
    const [productImage, setProductImage] = useState("");

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    }, [cartList]);

    const handleSizeSelect = (size: any) => {
        setSelectedSize((prevSize) => (prevSize === size ? null : size));
    };

    useEffect(() => {
        // Set the product image to the black color image when component mounts
        const blackColor = selectedProduct.colors.find((color: any) => color.color === "black");
        if (blackColor) {
            setProductImage(blackColor.imageUrl);
        }
    }, [name]); // Run this effect whenever the product name changes

    const handleColorSelect = (color: any) => {
        setSelectedColor(() => {{
                const selectedColor = selectedProduct.colors.find((c: any) => c.color === color);
                if (selectedColor) {
                    setProductImage(selectedColor.imageUrl);
                }
                return color; // Select the new color
            }
        });
    };
    
      
    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            const newItem = {
                size: selectedSize,
                color: selectedColor,
                name: name,
                price: price
            };
            setCartList([...cartList, newItem]);
            // Clear selection after adding to cart
            setSelectedSize(null);
            setSelectedColor("black");
        } else {
            alert("Please select both size and color.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-800">
            <div className=" flex w-[70%] h-[650px]">
                <div className=" items-center justify-center flex flex-col w-[50%] h-[650px]">
                    <h1 className="text-6xl text-white font-bold uppercase">{name}</h1>
                    <h1 className="text-l mt-4 text-white brightness-75 text uppercase">100% cotton & manufactured in RO,</h1>
                    <h1 className="text-l text-white brightness-75 text uppercase">Oversized fit</h1>

                    <h1 className="text-l mt-10 text-white brightness-75 text uppercase">size guide</h1>
                    
                    {/* Size selection */}
                    <div className="flex mt-12 gap-10">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                        key={size}
                        className={`px-2 py-1 transition-all duration-300 hover:brightness-100 hover:scale-110 border-green-400 border-[2px] rounded-xl ${
                            selectedSize === size
                            ? "brightness-100 text-white scale-110"
                            : "brightness-75 text-white border-transparent"
                        }`}
                        onClick={() => handleSizeSelect(size)}
                        >
                        {size}
                        </button>
                    ))}
                    </div>

                    {/* Color selection */}
                    <div className="flex mt-12 text-white font-bold text-l gap-10">
                        {[
                        { name: "spatial black", color: "black" },
                        { name: "sunlight white", color: "white" },
                        ].map(({ name, color }) => (
                        <button
                            key={color}
                            className={`p-2 uppercase flex gap-4 hover:scale-110 transition-all duration-300 border-green-400 border-[2px] rounded-xl ${
                            selectedColor === color
                                ? "brightness-100 scale-110"
                                : "brightness-75 border-transparent"
                            }`}
                            onClick={() => handleColorSelect(color)}
                        >
                            <div
                            className={`w-6 h-6 rounded-full ${
                                color === "black" ? "bg-black" : "bg-white"
                            }`}
                            ></div>
                            <p className="transition-all duration-300">{name}</p>
                        </button>
                        ))}
                    </div>

                    {/* Add to cart button */}
                    <button
                        className="mt-12 text-white font-bold text-l border-solid border-2 border-white rounded-lg p-3 uppercase brightness-75 hover:brightness-100 hover:scale-110 transition-all duration-300"
                        onClick={handleAddToCart}
                    >
                        Add to cart - {price}€
                    </button>
                </div>

                {/* Image */}
                <div className=" items-center justify-center flex flex-col w-[50%] h-[650px]">
                    <img src={productImage} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Page;