"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/shared/store";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const [items] = useCartStore((state) => [state.items]);
  return (
    <CartDrawer>
      <button className={cn("group h-[45px]", className)}>
        <div className="flex flex-col items-center gap-1 transition duration-300 ">
          
        <div className="relative">
        <PiShoppingCartSimpleFill
            size={25}
            className="relative text-white"
            strokeWidth={2}
          />
          <b className="w-[15px] h-[15px] left-4 bottom-3 rounded-full flex justify-center items-center text-[8px] absolute text-white bg-red-500">{items.length}</b>
        </div>
          <span className="text-[12px] text-[#d5bdff]">Корзина</span>
        </div> 
      </button>
    </CartDrawer>
  );
};
