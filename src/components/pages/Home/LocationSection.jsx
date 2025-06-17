import React from "react";

function LocationSection() {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-12 my-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            📍 Visit Us at InfoHunt
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We're always excited to meet you! Drop by our office for
            collaboration, queries, or just a friendly chat. Check the map to
            find us easily.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Address:</strong> Mirpur 10, Dhaka, Bangladesh
            </li>
            <li>
              <strong>Email:</strong> contact@infohunt.com
            </li>
            <li>
              <strong>Phone:</strong> +880 1234-567890
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17320.587086424897!2d90.36453466220149!3d23.8028744907269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1749533306548!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
