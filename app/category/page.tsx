import alblog from "@/public/al blog.png";
import data from "@/public/data.png";
import profile from "@/public/Mehadee Photo .jpg";
import next from "@/public/next_js.png";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-white">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div className="md:col-span-8 border-r-0 md:border-r border-gray-100 pr-0 md:pr-12">
          <div className="flex gap-4 sm:gap-8 border-gray-100 border-b mb-6 md:mb-10 overflow-x-auto">
            <Link href={"/"}>
              <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm hover:border-b text-gray-500 hover:text-purple-400 font-medium transition-all">
                Home
              </button>
            </Link>
            <button className="pb-3 md:pb-4 whitespace-nowrap text-xs sm:text-sm border-b border-purple-400 text-purple-400 font-medium transition-all">
              Category
            </button>
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
                  alt="data"
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
                  alt="next"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="hidden md:block md:col-span-4 sticky top-25 self-start">
          <div className="flex flex-col">
            <Image
              src={profile}
              className="w-28 h-30 rounded-full mb-5 object-cover ring-2 ring-gray-100 border-gray-100"
              alt="Mehadee Hassan"
            />

            <h2 className="font-bold text-md mb-2">Mehadee Hassan</h2>
            <p className="text-gray-500 mb-4">10k followers</p>
            <p className="text-sm leading-relaxed text-gray-500 mb-8">
              MERN Stack Batch-06 @InterActive Cares | Always learning new
              Technologies 🚀
            </p>
          </div>

          <div>
            <button className="bg-purple-600 text-white rounded-full py-2 px-5 font-medium hover:bg-purple-800 transition">
              Follow
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
