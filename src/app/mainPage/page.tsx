import React from "react";
import posterWomen from "@/app/image/women.jpg";
import posterMen from "@/app/image/men.jpg";
import newArrival1 from "@/app/image/pic1.jpg";
import newArrival2 from "@/app/image/pic2.jpg";
import newArrival3 from "@/app/image/pic3.jpg";
import newArrival4 from "@/app/image/pic4.jpg";
import newArrival5 from "@/app/image/pic5.jpg";
import bestSelling1 from "@/app/image/pic6.jpg";
import bestSelling2 from "@/app/image/pic7.jpg";
import bestSelling3 from "@/app/image/pic8.jpg";
import bestSelling4 from "@/app/image/pic9.jpg";
import bestSelling5 from "@/app/image/pic10.jpg";
import bestSelling6 from "@/app/image/pic11.jpg";
import bestSelling7 from "@/app/image/pic12.jpg";

const page = () => {
  return (
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
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
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
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
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
          <button className="btn btn-ghost btn-circle">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Hero Section */}

      <div className="flex flex-col sm:flex-row w-full relative gap-1">
        <div className="relative w-full sm:w-1/2 h-[100vw] sm:h-[110vh] overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src="https://i.pinimg.com/736x/f7/44/6d/f7446da84c4c41dd66196866253ab854.jpg"
              alt="Women"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-10 left-5 text-white text-3xl sm:text-5xl lg:text-6xl font-thin sm:left-72 cursor-pointer hover:underline transform hover:scale-105 transition duration-300 hover:text-pink-300">
              Women
            </button>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 h-[100vw] sm:h-[110vh] overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src="https://i.pinimg.com/736x/b0/46/98/b04698303671f455ec7e45c88d686fec.jpg"
              alt="Men"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-10 right-5 text-white text-xl sm:text-5xl lg:text-6xl font-thin sm:right-72 cursor-pointer hover:underline transform hover:scale-105 transition duration-300 hover:text-blue-300">
              Men
            </button>
          </div>
        </div>
      </div>

      {/* New Arrival Section */}
      <div>
        <button className="font-bold text-black text-xl p-3 cursor-pointer btn btn-ghost block  ">
          New Arrival
        </button>
        <div className="carousel rounded-box relative ">
          {/* card */}
          <div className=" bg-pink-200  carousel-item  relative   ">
            <img src={newArrival1.src} alt="clothe" />

            <div className="  w-full  absolute  bottom-5 ">
              <p className=" block text-white text-sm sm:text-base lg:text-lg font-thin m-2  sm:right-72">
                Classic Oversize white Tee
              </p>
              <p className=" block text-white text-sm sm:text-base lg:text-lg font-thin m-2 sm:right-72">
                $59.00
              </p>
              <div className="flex justify-center md:justify-end pl-20 md:pr-10">
                <button className="  px-2  py-1 md:px-4  md:py-2  bg-transparent rounded-lg text-white  left-3 text-sm sm:text-base lg:text-lg font-thin hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item m-1">
            <img src={newArrival2.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={newArrival3.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={newArrival4.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={newArrival5.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={newArrival1.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={newArrival2.src} alt="clothe" />
          </div>
        </div>
      </div>

      {/*best selling*/}
      <div>
        <button className="font-bold text-black text-xl p-3 cursor-pointer btn btn-ghost">
          Best selling
        </button>
        <div className="carousel rounded-box">
          <div className="carousel-item m-1">
            <img src={bestSelling1.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={bestSelling2.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={bestSelling3.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={bestSelling4.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={bestSelling5.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={bestSelling6.src} alt="clothe" />
          </div>
          <div className="carousel-item m-1">
            <img src={bestSelling7.src} alt="clothe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
