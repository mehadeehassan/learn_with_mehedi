"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-10 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo / Back Section */}
        <div className="flex items-center gap-3">
          {pathname !== "/" && (
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300 hover:text-purple-400"
              title="Go back"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <Link
            href="/"
            className="font-bold text-xl text-purple-400 hover:text-purple-300 transition"
          >
            Mehedi
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-2 sm:gap-6 items-center">
          <Link href="/">
            <span
              className={`pb-2 px-3 text-sm font-medium transition-all border-b-2 ${
                isActive("/")
                  ? "border-purple-400 text-purple-400"
                  : "border-transparent text-gray-300 hover:text-purple-400"
              }`}
            >
              Home
            </span>
          </Link>

          <Link href="/category">
            <span
              className={`pb-2 px-3 text-sm font-medium transition-all border-b-2 ${
                isActive("/category")
                  ? "border-purple-400 text-purple-400"
                  : "border-transparent text-gray-300 hover:text-purple-400"
              }`}
            >
              Category
            </span>
          </Link>

          <Link href="/about">
            <span
              className={`pb-2 px-3 text-sm font-medium transition-all border-b-2 ${
                isActive("/about")
                  ? "border-purple-400 text-purple-400"
                  : "border-transparent text-gray-300 hover:text-purple-400"
              }`}
            >
              About
            </span>
          </Link>

          <Link href="/contact">
            <span
              className={`pb-2 px-3 text-sm font-medium transition-all border-b-2 ${
                isActive("/contact")
                  ? "border-purple-400 text-purple-400"
                  : "border-transparent text-gray-300 hover:text-purple-400"
              }`}
            >
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
