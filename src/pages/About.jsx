import React from "react";
import { Link, useNavigate } from "react-router";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { IoStorefrontSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";

const About = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "CafeLords - About";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // href="https://www.google.com/maps/dir//Radha+Ratna+Restaurant+and+Rooms,+Ram+Path+Rd,+near+Lata+Mangeshkar+Chowk,+Nayaghat,+Theri+Bazar,+Ayodhya,+Uttar+Pradesh+224123/@25.4509056,81.8479104,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399a075cfdf26fff:0x843dd1fcbe6e4c88!2m2!1d82.2086975!2d26.8069496?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
  });
  return (
    <section className="text-black">
      <div className="flex justify-between items-center h-[70vh] px-[100px]">
        <div className="w-[50%] h-full flex flex-col justify-center text-black">
          <h1 className="text-[65px] leading-[65px] font-lavish font-bold ">
            Serving the best and Fresh Drinks crafted with Love{" "}
          </h1>
          <p className="text-[20px] leading-[30px]">
            we only Deliver fresh items from our stores and clean focused
            storage to serve the best to you{" "}
          </p>
          <Link
            to="/"
            className="px-3 py-4 bg-theme rounded shadow-md w-44 mt-[16px] text-[20px] "
          >
            ORDER NOW
          </Link>
        </div>
        <div className=" flex items-center justify-center w-[40%] overflow-hidden h-full">
          <img
            className="w-full"
            src="images/imckdh.jpeg"
            alt="coofe cup"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex justify-evenly items-center h-28 px-[100px]">
        <div className="w-80 h-full  rounded-xl flex-center gap-3">
          <span className="h-full w-[40%]  flex-center text-5xl">
            <FaPeopleGroup />
          </span>
          <span className="w-full">
            <h1 className="font-bold text-2xl">100K+ </h1>
            <p className="font-thin text-xl opacity-80">Customer Served</p>
          </span>
        </div>
        <div className="w-80 h-full  rounded-xl flex-center gap-3">
          <span className="h-full w-[40%]  flex-center text-5xl">
            <SiCodechef />
          </span>
          <span className="w-full">
            <h1 className="font-bold text-2xl">1000+ </h1>
            <p className="font-thin text-xl opacity-80">Experinced Chefs</p>
          </span>
        </div>
        <div className="w-80 h-full  rounded-xl flex-center gap-3">
          <span className="h-full w-[40%]  flex-center text-5xl">
            <IoStorefrontSharp />
          </span>
          <span className="w-full">
            <h1 className="font-bold text-2xl">50+ </h1>
            <p className="font-thin text-xl opacity-80">Outlets/Cities</p>
          </span>
        </div>
        <div className="w-80 h-full  rounded-xl flex-center gap-3">
          <span className="h-full w-[40%] flex-center text-5xl">
            <MdReviews />
          </span>
          <span className="w-full">
            <h1 className="font-bold text-2xl">8000+ </h1>
            <p className="font-thin text-xl opacity-80">Positive Reviews</p>
          </span>
        </div>
      </div>

      <section className="flex gap-8 mt-16 h-[45vh] overflow-hidden text-3xl px-[200px]">
        <div className=" w-2/4">
          <div>
            <h1 className="text-2xl text-yellow-400  uppercase leading-snug">
              our story
            </h1>
            <h2 className="text-4xl font-semibold opacity-80 leading-snug">
              How we Begin
            </h2>
            <p className="text-[18px] leading-snug mt-2 text-justify">
              It all started with a rainy afternoon in Melbourne and a cup of
              coffee so good it changed everything. I knew right then I wanted
              to bring that same passion for quality and community back home to
              Ayodhya. After a year of searching for the perfect space and
              countless late nights perfecting our recipes, Cafelords opened
              its doors in 2023.
            </p>
            <p className="text-[18px] leading-snug mt-2 text-justify opacity-20 font-lovers italic">Abdul Kalam - Founder</p>
          </div>
        </div>
        <div className=" h-full flex-center w-2/4 px-20">
          <img src="images\girl-blob.png" alt="girl img" width="80%" loading="lazy"/>
        </div>
      </section>

      <section className=" mb-5 p-22 text-3xl flex-center px-[100px]">
        <div className="flex gap-1 w-[100%] px-[100px] h-fit">
          <div className="flex w-[50%]  justify-center items-center relative">
            <img src="images/our-story.png" alt="" className="scale-1.7" />
          </div>
          <div className="flex flex-col gap-8 w-[50%] overflow-auto  px-8">
            <div>
              <h1 className="text-2xl text-yellow-400  uppercase leading-snug">
                why choose us
              </h1>
              <h2 className="text-4xl font-semibold opacity-80 leading-snug">
                Why we are the best
              </h2>
              <p className="text-[18px] leading-snug text-justify mt-2">
                Beyond home and work, we’ve created a welcoming space for you to
                connect, create, or simply unwind. With cozy seating, free
                Wi-Fi, and a warm smile, we're your home away from home.
              </p>
            </div>
            <div className="flex justify-start flex-wrap text-[16px] gap-4 border-b-1 pb-10 border-gray-300">
              <div className="bg-yellow-200 rounded p-4 flex items-center gap-3 w-52 ">
                <img
                  src="images\about-us\fresh-food.png"
                  alt=""
                  className="w-12"
                />
                <p className="font-semibold opacity-70">Fresh Food</p>
              </div>
              <div className="bg-yellow-200 rounded p-4 flex items-center gap-3 w-52">
                <img
                  src="images\about-us\clean-kitchen.png"
                  alt=""
                  className="w-12"
                />
                <p className="font-semibold opacity-70">Clean kitchen</p>
              </div>
              <div className="bg-yellow-200 rounded p-4 flex items-center gap-3 w-52">
                <img
                  src="images\about-us\customer-support.png"
                  alt=""
                  className="w-12"
                />
                <p className="font-semibold opacity-70">24/7 Services</p>
              </div>
              <div className="bg-yellow-200 rounded p-4 flex items-center gap-3  w-52 ">
                <img
                  src="images\about-us\order-online.png"
                  alt=""
                  className="w-12"
                />
                <p className="font-semibold opacity-70">Order Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="our-features  flex justify-between items-center">
        <div className="w-full h-full py-[60px] px-[100px]">
          <div className="w-[50%] h-full p-[20px] px-[80px]">
            <div>
              <h1 className="text-2xl text-yellow-400  uppercase leading-snug">
                Our features
              </h1>
              <h2 className="text-4xl font-semibold opacity-80 leading-snug">
                Why we are the best
              </h2>
              <p className="text-[18px] leading-snug mt-2 text-justify">
                Experience the perfect blend of convenience and quality with our
                seamless online ordering system. Skip the queues, customize
                every detail, and enjoy exclusive perks that make your daily
                coffee ritual effortless and rewarding.
              </p>
            </div>
            <div className="w-full  mt-5 px-5">
              <ul className="list-disc">
                <li className="leading-loose">
                  ⚡ Express Pickup Ready in Minutes{" "}
                </li>
                <li className="leading-loose">
                  🎁 Members Save 15% on Every Online Order
                </li>
                <li className="leading-loose">
                  📱 One-Click Reorder Your Favorites
                </li>
                <li className="leading-loose">
                  📍 Real-Time Notifications When Order is Ready
                </li>
              </ul>
            </div>
            <button
              className="px-4 py-2 bg-theme mt-10 shadow-md rounded text-[20px] "
              name="order now "
              onClick={() => navigate("/menu")}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>

      <div class=" pb-30">
        <div className="flex-center flex-col mt-10">
          <h1 className="text-2xl text-yellow-400  uppercase leading-snug">
             Team members
            </h1>
             <h2 className="text-4xl font-bold opacity-80 leading-snug">
             Meet to the Souls of CafeLords
            </h2>
        </div>
        <div className="flex justify-evenly items-center  h-full mt-15">
          <div className="w-100 h-120  flex justify-between items-center flex-col">
            <div className="w-full h-[80%] bg-gray-100 rounded-xl"></div>
            <div className="p-6">
            <h1 className="text-2xl text-center font-lavish leading-relaxed">Pradeep Singh</h1>
            <p className="text-[16px] opacity-70 text-center leading-snug">Head of the Chef</p>
            </div>
          </div> 
          <div className="w-100 h-120  flex justify-between items-center flex-col">
            <div className="w-full h-[80%] bg-gray-100 rounded-xl"></div>
            <div className="p-6">
            <h1 className="text-2xl text-center font-lavish leading-relaxed">Amandeep Bhatia</h1>
            <p className="text-[16px] opacity-70 text-center leading-snug">Dessert & Drink Expert</p>
            </div>
          </div> 
          <div className="w-100 h-120  flex justify-between items-center flex-col">
            <div className="w-full h-[80%] bg-gray-100 rounded-xl"></div>
            <div className="p-6">
            <h1 className="text-2xl text-center font-lavish leading-relaxed">Rohan Tyagi</h1>
            <p className="text-[16px] opacity-70 text-center leading-snug">Executive Chef</p>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default About;
