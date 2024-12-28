import React from "react";
import newArrival1 from "@/app/image/01.jpg";
import newArrival2 from "@/app/image/02.jpg";
import newArrival4 from "@/app/image/04.jpg";
import newArrival5 from "@/app/image/05.jpg";
import bestSelling1 from "@/app/image/06.jpg";
import bestSelling3 from "@/app/image/07.jpg";
import bestSelling4 from "@/app/image/08.jpg";
import bestSelling5 from "@/app/image/09.jpg";
import bestSelling6 from "@/app/image/10.jpg";
import bestSelling7 from "@/app/image/11.jpg";

const UniformGrid = () => {
  const pins = [
    {
      id: "new-arrival-1",
      src: newArrival1.src,
      alt: "New Arrival 1",
      caption: "Oversize Tee",
      price: "$59.00",
    },
    {
      id: "new-arrival-2",
      src: newArrival2.src,
      alt: "New Arrival 2",
      caption: "S-hoddie",
      price: "$119.00",
    },
    {
      id: "new-arrival-4",
      src: newArrival4.src,
      alt: "New Arrival 4",
      caption: "Women Black bag",
      price: "$79.00",
    },
    {
      id: "new-arrival-5",
      src: newArrival5.src,
      alt: "New Arrival 5",
      caption: "Spring hoddie",
      price: "$219.00",
    },
    {
      id: "best-selling-1",
      src: bestSelling1.src,
      alt: "Best Selling 1",
      caption: "Black Oversize Shirt",
      price: "$79.00",
    },
    {
      id: "best-selling-3",
      src: bestSelling3.src,
      alt: "Best Selling 3",
      caption: "Man shoes",
      price: "$119.00",
    },
    {
      id: "best-selling-4",
      src: bestSelling4.src,
      alt: "Best Selling 4",
      caption: "Seasonal Sneaker",
      price: "$59.00",
    },
    {
      id: "best-selling-5",
      src: bestSelling5.src,
      alt: "Best Selling 5",
      caption: "Futuristic Sun Glass",
      price: "$149.00",
    },
    {
      id: "best-selling-6",
      src: bestSelling6.src,
      alt: "Best Selling 6",
      caption: "Style Baggy jean",
      price: "$1000.00",
    },
    {
      id: "best-selling-7",
      src: bestSelling7.src,
      alt: "Best Selling 7",
      caption: "Over size white shirt",
      price: "$59.00",
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pins.map((pin) => (
          <div
            key={pin.id}
            className=" h-auto bg-gray-200 relative rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={pin.src}
              alt={pin.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 w-full p-1 bg-transparent">
              <p className="block text-white text-sm sm:text-base lg:text-lg font-thin m-1 sm:right-72">
                {pin.caption}
              </p>
              <p className="block text-white text-sm sm:text-base lg:text-lg font-thin m-2 sm:right-72">
                {pin.price}
              </p>
              <div className="flex justify-center md:justify-end pl-20 md:pr-10">
                <button className="px-2 py-1 md:px-4 md:py-2 bg-transparent rounded-lg text-white left-3 text-sm sm:text-base lg:text-lg font-thin hover:bg-black transform hover:scale-105 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <div>
        {/* Navbar Section */}
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Women</a>
                </li>
                <li>
                  <a>Men</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">
              Buy
              <p className="text-5xl pl-0 font-thin">Me</p>
            </a>
          </div>

          {/*search bar*/}

          <div className="navbar-end ">
            <button className="btn btn-ghost btn-circle m-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle m-0"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="font-bold transform hover:scale-105 transition duration-300 ">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-2 mx-2">
          <button className="btn btn-outline mx-3">Women</button>
          <button className="btn btn-outline mx-3">Men</button>
        </div>
        <div>
          <button className="btn btn-outline mx-3">Top</button>
          <button className="btn btn-outline mx-3">Bottom</button>
          <button className="btn btn-outline mx-3">Accessory</button>
        </div>
        <h1 className="m-2 font-bold">Best selling</h1>
      </div>

      {/* display new arrival  item */}
      <UniformGrid />
      <div>
      <footer className="footer bg-neutral text-neutral-content p-20">
        <nav>
          <h6 className="footer-title">Contact us</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">TikTok</a>
          <a className="link link-hover">Email</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Term and Condition</a>
        </nav>
        <nav>
          <h6 className="footer-title">We Accept</h6>
          <a className="link link-hover">ABA bank</a>
          <a className="link link-hover">Acelida</a>
          <a className="link link-hover">KH QR</a>
        </nav>
      </footer>
      </div> 
    </div>
  );
};

export default page;
