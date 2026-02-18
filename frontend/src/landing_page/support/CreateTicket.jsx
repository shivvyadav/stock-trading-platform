import React from "react";

const CreateTicket = () => {
  const account = [
    { name: "Online account opening", href: "#" },
    { name: "Offline account opening", href: "#" },
    { name: "Company, Partnership and HUF Account Opening", href: "#" },
    { name: "NRI account opening", href: "#" },
    { name: "Charges at Zerodha", href: "#" },
    { name: "Zerodha IDFC First Bank 3-in-1 Account", href: "#" },
    { name: "Getting started", href: "#" },
  ];
  const ZerodhaAccount = [
    { name: "Login credentials", href: "#" },
    { name: "Account modification and segment Addition", href: "#" },
    { name: "DP ID and bank details ", href: "#" },
    { name: "Your profile", href: "#" },
    { name: "Transfer and conversion of shares", href: "#" },
  ];
  const YourZerodhaAccount = [
    { name: "Margin, Product and Order types", href: "#" },
    { name: "Kite Web and Mobile", href: "#" },
    { name: "Trading FAQs", href: "#" },
    { name: "Corporate actions", href: "#" },
    { name: "Sentinel", href: "#" },
    { name: "Kite API", href: "#" },
    { name: "Pi and other platforms", href: "#" },
    { name: "Stockreports +", href: "#" },
    { name: "GTT", href: "#" },
  ];
  const Funds = [
    { name: "Adding funds", href: "#" },
    { name: "Withdrawing funds", href: "#" },
    { name: "eMandates", href: "#" },
    { name: "Adding Bank Accounts", href: "#" },
  ];
  const Console = [
    { name: "Reports ", href: "#" },
    { name: "Ledger", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "60 Day challenge", href: "#" },
    { name: "IPO", href: "#" },
    { name: "Referral Program", href: "#" },
  ];
  const Coin = [
    { name: "Understanding Mutual Funds ", href: "#" },
    { name: "About Coin", href: "#" },
    { name: "Buying and Selling", href: "#" },
    { name: "Starting an SIP", href: "#" },
    { name: "Managing your portfolio", href: "#" },
    { name: "Coin App", href: "#" },
    { name: "Moving to Coin", href: "#" },
    { name: "Government Securities", href: "#" },
  ];

  return (
    <>
      <h1 className="mx-auto max-w-6xl px-8 text-xl font-medium md:text-2xl md:pl-20 lg:pl-32">
        To create a ticket, select a relevant topic
      </h1>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:my-4 lg:grid-cols-3 lg:px-0 lg:pl-28 md:pl-16">
        <div className="flex max-w-xs flex-col text-left">
          <h2 className="text-md mb-4 mt-8 px-4 md:text-lg">
            <i class="ti ti-circle-plus"></i> Account Opening
          </h2>
          {account.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-4 max-w-6xl px-4 text-[12px] text-blue-400 md:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex max-w-xs flex-col text-left">
          <h2 className="text-md mb-4 mt-8 px-4 md:text-lg">
            <i class="ti ti-user"></i> Your Zerodha Account
          </h2>
          {ZerodhaAccount.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-4 max-w-6xl px-4 text-[12px] text-blue-400 md:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex max-w-xs flex-col text-left">
          <h2 className="text-md mb-4 mt-8 px-4 md:text-lg">
            <i class="ti ti-chart-histogram"></i> Your Zerodha Account
          </h2>
          {YourZerodhaAccount.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-4 max-w-6xl px-4 text-[12px] text-blue-400 md:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex max-w-xs flex-col text-left">
          <h2 className="text-md mb-4 mt-8 px-4 md:text-lg">
            <i class="ti ti-credit-card-refund"></i> Funds
          </h2>
          {Funds.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-4 max-w-6xl px-4 text-[12px] text-blue-400 md:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex max-w-xs flex-col text-left">
          <h2 className="text-md mb-4 mt-8 px-4 md:text-lg">
            <i class="ti ti-refresh"></i> Console
          </h2>
          {Console.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-4 max-w-6xl px-4 text-[12px] text-blue-400 md:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex max-w-xs flex-col text-left">
          <h2 className="text-md mb-4 mt-8 px-4 md:text-lg">
            <i class="ti ti-coins"></i> Coin
          </h2>
          {Coin.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-4 max-w-6xl px-4 text-[12px] text-blue-400 md:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
