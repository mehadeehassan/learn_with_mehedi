import alblog from "@/public/al blog.png";
import data from "@/public/data.png";
import profile from "@/public/Mehadee Photo .jpg";
import next from "@/public/next_js.png";
import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-white">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div className="md:col-span-8 border-r-0 md:border-r border-gray-100 pr-0 md:pr-12">
          <div className="w-full h-24 sm:h-32 md:h-44 bg-gray-50 overflow-hidden rounded-sm mb-6 md:mb-10">
            <Image
              src={next}
              className="w-full h-full object-cover"
              alt="banner"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Mehadee Hassan
          </h1>
          <div className="flex gap-4 sm:gap-8 border-gray-100 border-b mb-6 md:mb-10 overflow-x-auto">
            <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm hover:border-b text-gray-500 hover:text-purple-400 font-medium transition-all">
              Home
            </button>
            <Link href={"/category"}>
              <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm hover:border-b text-gray-500 hover:text-purple-400 font-medium transition-all">
                Category
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm hover:border-b text-gray-500 hover:text-purple-400 font-medium transition-all">
                About
              </button>
            </Link>
          </div>
          <div className="space-y-8 md:space-y-16">
            <article className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="flex-1 w-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-snug cursor-pointer hover:text-purple-400">
                  আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) কি প্রোগ্রামারদের জায়গা দখল
                  করবে?
                </h2>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-3 mb-4 md:mb-6">
                  আর্টিফিশিয়াল ইন্টেলিজেন্স বা AI দ্রুত উন্নতি করলেও এটি
                  প্রোগ্রামারদের বিকল্প নয়, বরং একটি শক্তিশালী সহযোগী টুল। AI
                  কোড লিখতে সাহায্য করতে পারে ঠিকই, কিন্তু জটিল লজিক তৈরি এবং
                  সৃজনশীল সমস্যার সমাধানে একজন দক্ষ ডেভেলপারের বিকল্প আজও নেই।
                </p>
              </div>

              <div className="w-full sm:w-48 md:w-60 h-32 sm:h-36 md:h-40 bg-gray-50 shrink-0">
                <Image
                  src={alblog}
                  className="w-full h-full object-cover"
                  alt="aiblog"
                />
              </div>
            </article>
            <article className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="flex-1 w-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-snug cursor-pointer hover:text-purple-400">
                  ডেটা অ্যানালাইসিস শিখতে কোন কোন স্কিল প্রয়োজন?
                </h2>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-3 mb-4 md:mb-6">
                  আপনি যদি ডেটা নিয়ে কাজ করতে আগ্রহী হন, তবে পাইথন, এসকিউএল
                  (SQL) এবং এক্সেল-এর মতো টুলসগুলোতে দক্ষ হওয়া জরুরি। সঠিক
                  গাইডলাইন মেনে শিখলে এটি আপনার ক্যারিয়ার বদলে দিতে পারে।
                </p>
              </div>

              <div className="w-full sm:w-48 md:w-60 h-32 sm:h-36 md:h-40 bg-gray-50 shrink-0">
                <Image
                  src={data}
                  className="w-full h-full object-cover"
                  alt="aiblog"
                />
              </div>
            </article>
            <article className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="flex-1 w-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-snug cursor-pointer hover:text-purple-400">
                  আধুনিক ওয়েব ডেভেলপমেন্টে Next.js কেন অপরিহার্য হয়ে উঠছে?
                </h2>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-3 mb-4 md:mb-6">
                  আধুনিক ওয়েব ডেভেলপমেন্টে Next.js অপরিহার্য কারণ এটি
                  Server-Side Rendering (SSR) এবং Static Site Generation (SSG)
                  এর মাধ্যমে ওয়েবসাইটকে সুপার-ফাস্ট এবং এসইও (SEO) ফ্রেন্ডলি
                  করে তোলে। এছাড়া এর ফাইল-বেসড রাউটিং এবং অটোমেটিক ইমেজ
                  অপ্টিমাইজেশন ডেভেলপারদের কাজকে অনেক সহজ ও প্রফেশনাল করে দেয়।
                </p>
              </div>

              <div className="w-full sm:w-48 md:w-60 h-32 sm:h-36 md:h-40 bg-gray-50 shrink-0">
                <Image
                  src={next}
                  className="w-full h-full object-cover"
                  alt="aiblog"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="hidden md:block md:col-span-4 sticky top-25 self-start">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl">
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative mb-4">
                <Image
                  src={profile}
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-purple-500 shadow-lg"
                  alt="Mehadee Hassan"
                />
                <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
              </div>

              {/* Name */}
              <h2 className="font-bold text-2xl mb-1 text-center text-white">
                Mehadee Hassan
              </h2>

              {/* Followers */}
              <p className="text-purple-400 font-semibold mb-4">
                10k followers
              </p>

              {/* Bio */}
              <p className="text-sm leading-relaxed text-gray-300 text-center mb-6 line-clamp-3">
                MERN Stack Batch-06 @InterActive Cares | Always learning new
                Technologies 🚀
              </p>

              {/* Follow Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-2.5 rounded-lg mb-4 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Follow
              </button>

              {/* Divider */}
              <div className="w-full h-px bg-gray-700 my-4"></div>

              {/* Skills/Tech Stack */}
              <div className="w-full mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700">
                    React
                  </span>
                  <span className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700">
                    Next.js
                  </span>
                  <span className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700">
                    JavaScript
                  </span>
                  <span className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="w-full">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Connect
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 bg-gray-700 hover:bg-purple-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gray-700 hover:bg-purple-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors text-center"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gray-700 hover:bg-purple-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors text-center"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
