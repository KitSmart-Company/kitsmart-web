"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const SHEET_SIDES = ["left"] as const;

export function Categories() {
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button className="border-gray-300 border hover:border-white transition-all rounded-2xl hover:text-white hover:bg-none outline-none p-2.5">
              <Menu color="white" size={30} />
            </button>
          </SheetTrigger>
          <SheetContent className="h-full m-0 p-0" side={side}></SheetContent>
        </Sheet>
      ))}
    </>
  );
}
