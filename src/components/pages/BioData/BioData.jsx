import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-snug">
          নিজের একটি প্রফেশনাল Bio Data তৈরি করুন সহজেই!
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          আপনার ব্যক্তিগত তথ্য, শিক্ষাগত যোগ্যতা, অভিজ্ঞতা ও দক্ষতা দিন — আর এক
          ক্লিকেই তৈরি করুন আপনার স্বপ্নের বায়োডাটা!
        </p>
        <ul className="text-base sm:text-lg mb-8 text-white/90 space-y-2">
          <li>✅ 100% মোবাইল ফ্রেন্ডলি</li>
          <li>✅ রিয়েল টাইম প্রিভিউ সহ</li>
          <li>✅ PDF আকারে ডাউনলোড সুবিধা</li>
        </ul>
        <Link to={"/BioCard"} className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300">
          এখনই শুরু করুন
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
