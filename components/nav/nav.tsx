"use client";

import Link from "next/link";
import Me from "@/public/images/me.jpg";
import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const path = usePathname();

  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-10 flex flex-col h-[80px] dark:bg-[rgba(black, 0.1)] white:bg-white w-full justify-center md:h-[100px]"
    >
      <div className="container">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <Link className="rounded-full transition-all" href={"/"}>
            <Image
              className={cn(
                "mr-6 aspect-square w-8 rounded-full object-cover transition-all hover:brightness-125 md:mr-12 md:w-12",
                path === "/" ? "ring-1 ring-foreground" : "ring-0",
              )}
              src={Me}
              width={50}
              height={50}
              alt="image of the author"
            />
          </Link>
          <div className="flex gap-0 md:gap-2">
            <Link
              className={cn(
                "flex w-20 items-center justify-center p-1 transition-all md:w-24 hover:text-orange-400",
                path === "/changelog" ? "font-bold" : "font-normal",
              )}
              href={"/changelog"}
            >
              changelog
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ShinyButton />
        </div>
      </div>
      </div>
    </nav>
  );
}
