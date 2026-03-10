"use client";

import Link from "next/link";

export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <Link href={"/about"}><button 
            className={className}
            onClick={() => console.log("Clicked:", children)}
        >
        {children}   
        </button></Link>
        
    );
}