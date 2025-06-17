import React from "react";
import TodoAdd from "./TodoAdd";

const ToDo = () => {
  return (
    <div>
      {" "}
      <section className="relative bg-gradient-to-br from-indigo-600 to-blue-500 text-white min-h-[80vh] flex items-center justify-center px-4">
        {/* ব্যাকগ্রাউন্ড ইমেজ */}
        <img
          src="https://images.unsplash.com/photo-1554774853-b414d3f51d4e"
          alt="todo background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* হেডার কনটেন্ট */}
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            আপনার প্রতিদিনের কাজ গুছিয়ে নিন সহজেই
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100 px-2">
            সময় বাঁচান, কাজের গতি বাড়ান। এখনই টুডু লিস্ট তৈরি করে কাজের
            পরিকল্পনা করুন একদম নিজের মত করে।
          </p>
        </div>
      </section>
      <TodoAdd/>
    </div>
  );
};

export default ToDo;
