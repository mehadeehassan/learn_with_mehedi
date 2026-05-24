import aboutPhoto from "@/public/Mehadee Photo .jpg";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-10 lg:px-20 py-8 md:py-12">
        <div className="flex gap-4 sm:gap-8 border-gray-100 border-b mb-8 md:mb-12 overflow-x-auto">
          <Link href={"/"}>
            <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm hover:border-b text-gray-500 hover:text-purple-400 font-medium transition-all">
              Home
            </button>
          </Link>
          <Link href={"/category"}>
            <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm hover:border-b text-gray-500 hover:text-purple-400 font-medium transition-all">
              Category
            </button>
          </Link>
          <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm border-b border-purple-400 text-purple-400 font-medium transition-all">
            About
          </button>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-80 md:h-80 flex-shrink-0">
            <Image
              src={aboutPhoto}
              alt="Mehadee's Profile Picture"
              className="rounded-2xl object-cover border-4 border-purple-600 shadow-2xl w-full h-full"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400">
              Hello, I'm Mehadee Hassan
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              আমি একজন ওয়েব ডেভেলপার। বর্তমানে আমি Next.js এবং আধুনিক ওয়েব
              টেকনোলজি নিয়ে কাজ করতে পছন্দ করি। আমি স্কেলেবল এবং পারফরম্যান্ট
              ওয়েব অ্যাপ্লিকেশন তৈরিতে আগ্রহী।
            </p>

            <div className="flex gap-3 sm:gap-4 pt-4">
              <Link href={"/category"}>
                <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded-lg font-medium transition text-sm sm:text-base">
                  My Projects
                </button>
              </Link>
              <Link href={"/contact"}>
                <button className="border border-gray-500 hover:bg-gray-800 px-4 sm:px-6 py-2 rounded-lg font-medium transition text-sm sm:text-base">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
