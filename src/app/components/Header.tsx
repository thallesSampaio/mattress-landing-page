"use client";
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex flex-col md:flex-row border-b border-solid border-b-[#e8eef3] px-10 py-3">
            <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                    <h2 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">Mattress Prototype</h2>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2"
                    aria-label="Toggle menu"
                >
                    {/* Ícone do botão */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Menu de navegação */}
            <nav className={`flex flex-col md:flex-row ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
                <a href='#products' className="text-[#0e161b] text-sm font-medium leading-normal py-2 md:py-0 md:pl-4">Products</a>
                <a href='#services' className="text-[#0e161b] text-sm font-medium leading-normal py-2 md:py-0 md:pl-4">Services</a>
                <a href='#quality' className="text-[#0e161b] text-sm font-medium leading-normal py-2 md:py-0 md:pl-4">Quality</a>
                <a href='#contact' className="text-[#0e161b] text-sm font-medium leading-normal py-2 md:py-0 md:pl-4">Contact</a>
            </nav>
        </header>
    );
}