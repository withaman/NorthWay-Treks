"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLink =
        "relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-300 hover:after:scale-x-100";

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Logo */}
                    <div className="text-xl font-bold">NorthWay Treks</div>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex mr-[3rem] gap-6 font-semibold">
                        <li><Link href="/" className={navLink}>Home</Link></li>
                        <li><Link href="/pack" className={navLink}>Packages</Link></li>
                        <li><Link href="/about" className={navLink}>About Us</Link></li>
                        <li><Link href="/contact" className={navLink}>Contact</Link></li>
                    </ul>

                    {/* Desktop Button */}
                    <div className="hidden md:block font-semibold border rounded-2xl px-4 py-1 bg-black text-white cursor-pointer">
                        Book Now
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* MOBILE FULL SCREEN MENU */}
            <div
                className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out 
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <div className="text-xl font-bold">Menu</div>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col items-center justify-center gap-6 h-[80vh] text-xl font-semibold">
                    <li><Link onClick={() => setOpen(false)} href="/">Home</Link></li>
                    <li><Link onClick={() => setOpen(false)} href="/pack">Packages</Link></li>
                    <li><Link onClick={() => setOpen(false)} href="/about">About Us</Link></li>
                    <li><Link onClick={() => setOpen(false)} href="/contact">Contact</Link></li>

                    <li className="pt-4">
                        <button className="bg-black text-white px-8 py-3 rounded-2xl">
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>

            {/* Spacer so content doesn’t hide behind fixed navbar */}
            <div className="h-[60px]" />
        </>
    );
}
