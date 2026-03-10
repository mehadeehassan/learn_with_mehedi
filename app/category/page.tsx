import Image from "next/image";
import mylogo from "@/public/logo.svg";
import alblog from "@/public/al blog.png";
import profile from "@/public/Mehadee Photo .jpg";
import data from "@/public/data.png";
import next from "@/public/next_js.png";
import Link from "next/link";

export default function home() {
return (
<div className="min-h-screen bg-white font-sans text-black">
  <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20  grid grid-cols-1 md:grid-cols-12 gap-12">
    <div className="md:col-span-12  border-gray-100 pr-0 md:pr-12 ">
      <div className="space-y-16 mt-40">
        
        <article className="flex justify-between items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold md:text-2xl mb-2 leading-snug cursor-pointer hover:text-purple-700">
              আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) কি প্রোগ্রামারদের জায়গা দখল করবে?
            </h2>

            <p className="text-gray-500 text-sm md:text-base line-clamp-3 mb-6">
              আর্টিফিশিয়াল ইন্টেলিজেন্স বা AI দ্রুত উন্নতি করলেও এটি প্রোগ্রামারদের বিকল্প নয়, 
              বরং একটি শক্তিশালী সহযোগী টুল। AI কোড লিখতে সাহায্য করতে পারে ঠিকই,
              কিন্তু জটিল লজিক তৈরি এবং সৃজনশীল সমস্যার সমাধানে একজন দক্ষ ডেভেলপারের বিকল্প আজও নেই।
            </p>
          </div>

          <div className="w-60 h-40 md:h-28 bg-gray-50 shrink-0">
            <Image src={alblog}
            className="w-full h-full object-cover"
            alt="aiblog" />
          </div>
        </article>
        <article className="flex justify-between items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold md:text-2xl mb-2 leading-snug cursor-pointer hover:text-purple-700">
              ডেটা অ্যানালাইসিস শিখতে কোন কোন স্কিল প্রয়োজন?
            </h2>

            <p className="text-gray-500 text-sm md:text-base line-clamp-3 mb-6">
              আপনি যদি ডেটা নিয়ে কাজ করতে আগ্রহী হন, তবে পাইথন, এসকিউএল (SQL) এবং এক্সেল-এর মতো টুলসগুলোতে দক্ষ হওয়া জরুরি। সঠিক গাইডলাইন মেনে শিখলে এটি আপনার ক্যারিয়ার বদলে দিতে পারে।
            </p>
          </div>

          <div className="w-60 h-40 md:h-28 bg-gray-50 shrink-0">
            <Image src={data}
            className="w-full h-full object-cover"
            alt="aiblog" />
          </div>
        </article>
        <article className="flex justify-between items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold md:text-2xl mb-2 leading-snug cursor-pointer hover:text-purple-700">
              আধুনিক ওয়েব ডেভেলপমেন্টে Next.js কেন অপরিহার্য হয়ে উঠছে?
            </h2>

            <p className="text-gray-500 text-sm md:text-base line-clamp-3 mb-6">
              আধুনিক ওয়েব ডেভেলপমেন্টে Next.js অপরিহার্য কারণ এটি Server-Side Rendering (SSR) এবং Static Site Generation (SSG) এর মাধ্যমে ওয়েবসাইটকে সুপার-ফাস্ট এবং এসইও (SEO) ফ্রেন্ডলি করে তোলে। এছাড়া এর ফাইল-বেসড রাউটিং এবং অটোমেটিক ইমেজ অপ্টিমাইজেশন ডেভেলপারদের কাজকে অনেক সহজ ও প্রফেশনাল করে দেয়।
            </p>
          </div>

          <div className="w-60 h-40 md:h-28 bg-gray-50 shrink-0">
            <Image src={next}
            className="w-full h-full object-cover"
            alt="aiblog" />
          </div>
        </article>
      </div>
    </div>
  </main>
</div>
  );
}