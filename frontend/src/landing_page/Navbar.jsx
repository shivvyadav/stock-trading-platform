import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (menuOpen) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [menuOpen]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [menuOpen]);

  const items = [
    { name: "Signup", idx: 0, link: "/signup" },
    { name: "Login", idx: 1, link: "/login" },
    { name: "About", idx: 2, link: "/about" },
    { name: "Products", idx: 3, link: "/products" },
    { name: "Pricing", idx: 4, link: "/pricing" },
    { name: "Support", idx: 5, link: "/support" },
  ];

  return (
    <nav className="shadow-xs fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-neutral-50 px-4 py-6 md:px-8 lg:justify-between lg:px-24 xl:justify-between xl:px-52">
      <div className="hover:scale-101 w-28 hover:cursor-pointer hover:opacity-90 md:w-36">
        <Link to="/">
          <img src="media/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="mr-4 hidden gap-10 text-sm text-gray-600 lg:flex">
          {items.map((item) => (
            <li
              key={item.idx}
              className="cursor-pointer hover:font-semibold hover:text-blue-900"
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          {show && (
            <i
              className="fa-solid fa-bars text-md text-neutral-600 md:text-xl lg:invisible"
              onClick={() => setMenuOpen(true)}
            ></i>
          )}
          {!show && (
            <i
              className="fa-solid fa-xmark md:-top-1.75 absolute -right-0.5 top-0.5 text-lg text-neutral-600 md:right-0 md:text-xl lg:invisible"
              onClick={() => setMenuOpen(false)}
            ></i>
          )}
        </div>
        <div>
          {menuOpen && (
            // full screen mobile menu overlay
            <div
              className="fixed inset-0 z-50 flex flex-col items-start overflow-auto bg-white p-6 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex w-full items-center justify-end">
                <button
                  aria-label="Close menu"
                  className="text-2xl text-neutral-600"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <ul className="mt-8 flex w-full flex-col gap-6 text-lg text-gray-700">
                {items.map((item) => (
                  <li key={item.idx} className="w-full">
                    <Link
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Your Company</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
