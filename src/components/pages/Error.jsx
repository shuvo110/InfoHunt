import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-error">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Page Not Found
        </h2>
        <p className="text-base-content/70 max-w-md mx-auto">
          আপনি যে পেইজটি খুঁজছেন তা আমাদের সার্ভারে খুঁজে পাওয়া যাচ্ছে না। আপনি
          হয়তো ভুল লিঙ্কে এসেছেন অথবা এই পেইজটি মুছে ফেলা হয়েছে।
        </p>
        <Link to="/" className="btn btn-primary mt-4">
          ⬅️ হোম পেইজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}

export default Error;
