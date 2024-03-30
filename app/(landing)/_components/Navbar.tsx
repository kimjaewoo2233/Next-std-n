"use client"
import { useScrollTrack } from "@/hooks/use-scroll-track";
import { cn } from "@/lib/utils";
import Logo from "./Logo";


const Navbar = () => {
    const scrolled = useScrollTrack();

    return (
        <div className={
            cn(
                "fixed top-0 z-50 flex items-center w-full p-6 bg-background",
                scrolled && "border-b shadow-sm"
            )
        }>
            <Logo/>
            <div className="md:ml-auto md:justify-end flex items-center w-full justify-between gap-x-2">
                Login
            </div>
        </div>
    )
}

export default Navbar;