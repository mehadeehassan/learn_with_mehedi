import Image from 'next/image';
import aboutPhoto from '@/public/Mehadee Photo .jpg';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src={aboutPhoto}
            alt="Mehadee's Profile Picture"
            className="rounded-2xl object-cover border-4 border-purple-600 shadow-2xl"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-purple-400">Hello, I'm Mehadee Hassan</h1>
          <p className="text-gray-300 leading-relaxed">
            আমি একজন ওয়েব ডেভেলপার। বর্তমানে আমি Next.js এবং আধুনিক ওয়েব টেকনোলজি নিয়ে কাজ করতে পছন্দ করি। 
            আমি স্কেলেবল এবং পারফরম্যান্ট ওয়েব অ্যাপ্লিকেশন তৈরিতে আগ্রহী।
          </p>
          
          <div className="flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition">
              My Projects
            </button>
            <Link href={"/contact"}><button className="border border-gray-500 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium transition">
              Contact Me
            </button></Link>
          </div>
        </div>
        
      </div>
    </main>
  );
}