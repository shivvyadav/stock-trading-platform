import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Product", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Referral Programme", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Zerodha.tech", href: "#" },
    { name: "Press & Media", href: "#" },
    { name: "Zerodha cares(CSR)", href: "#" },
  ];

  const supportLinks = [
    { name: "Contact", href: "#" },
    { name: "Support portal", href: "#" },
    { name: "Z-Connect blog", href: "#" },
    { name: "List of charges", href: "#" },
    { name: "Download & resources", href: "#" },
  ];

  const accountLinks = [
    { name: "Open an account", href: "#" },
    { name: "Fund transfer", href: "#" },
    { name: "60 days challenge", href: "#" },
  ];

  return (
    <footer className="border-px mx-auto mt-12 flex flex-col justify-center gap-12 border border-neutral-200 bg-neutral-50 px-6 py-12 sm:flex-row sm:items-start sm:gap-16 lg:gap-24">
      <div className="flex max-w-[260px] flex-col gap-4 text-sm leading-7 text-neutral-600">
        <Link to="/">
          {" "}
          <img
            src="media/logo.svg"
            alt="Logo"
            className="hover:scale-101 w-36 cursor-pointer hover:opacity-90"
          />
        </Link>
        <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <p className="text-[16px] font-semibold">Company</p>
        {companyLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-neutral-600 hover:text-blue-800 hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <p className="text-[16px] font-semibold">Support</p>
        {supportLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-neutral-600 hover:text-blue-800 hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <p className="text-[16px] font-semibold">Account</p>
        {accountLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-neutral-600 hover:text-blue-800 hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
