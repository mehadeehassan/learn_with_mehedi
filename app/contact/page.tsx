import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-purple-400">Get In Touch</h1>
        <p className="text-gray-300 text-lg">
          আপনার যদি কোনো প্রশ্ন থাকে বা কোনো প্রজেক্ট নিয়ে আলোচনা করতে চান, সরাসরি আমাকে মেইল করতে পারেন।
        </p>
        
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Email Me At</p>
          <a 
            href="mailto:mehedi19999@gmail.com" 
            className="text-2xl md:text-3xl font-extrabold text-purple-300 hover:text-white transition"
          >
            mehedi19999@gmail.com
          </a>
        </div>

        <Link href={"/about"}><button className="inline-block text-gray-500 hover:text-purple-400 underline transition">
          Back to Home
        </button></Link>
      </div>
    </main>
  );
}