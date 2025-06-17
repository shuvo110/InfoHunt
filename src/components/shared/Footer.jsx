import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <Link
            to="/"
            className="text-white text-xl font-bold"
          >
            <abbr title="Home">
              Infohunt
            </abbr>
          </Link>
          <p className="mt-2 text-gray-400">
            All your daily tools in one place. Stay informed, organized and
            inspired.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to={"/Weather"} className="footerLink">
                Weather
              </Link>
            </li>
            <li>
              <Link to={"/BioData"} className="footerLink">
                Bio Data Create
              </Link>
            </li>
            <li>
              <Link to={"/Recipes"} className="footerLink">
                Recipes
              </Link>
            </li>
            <li>
              <Link to={"/News"} className="footerLink">
                News
              </Link>
            </li>
            <li>
              <Link to={"/ToDo"} className="footerLink">
                To-Do
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-green-500">
              🌐 Facebook
            </a>
            <a href="#" className="hover:text-green-500">
              📸 Instagram
            </a>
            <a href="#" className="hover:text-green-500">
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm text-gray-400">
        © {new Date().getFullYear()} InfoHunt. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
