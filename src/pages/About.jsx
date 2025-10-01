import React from "react";
import { Link } from "react-router";

const About = () => {
  React.useEffect(() => {
    document.title = "CafeLords - About";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <section className="  px-[100px] text-black">
      <div className="flex justify-between items-center h-[90vh]">
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
      <section className="grid grid-cols-3 gap-8 mt-16 h-[35vh] overflow-hidden text-3xl">
        <div className="bg-theme-dark col-span-2 p-8 rounded ">
          <h1 className="text-5xl ">Our Story</h1>
          <p className="text-[25px] leading-[35px] mt-5 font-nunito">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quis,
            et ad nihil ab aliquid pariatur ullam? Repellendus animi dicta ab,
            perspiciatis illo commodi iure fugiat, eveniet accusamus reiciendis
            labore iste earum ipsum temporibus! Harum odit maiores repellendus
            nobis aliquam veritatis possimus alias ipsa vel. Doloremque possimus
            eius necessitatibus modi.
          </p>
        </div>
        <div className=" flex flex-col  justify-between overflow-hidden ">
          <div className="w-full h-[65%] bg-blue-400 rounded overflow-hidden gap-5 bg-theme-dark">
            <img
              src="images/map.png"
              alt=""
              className="w-full object-cover h-[85%]"
            />
            <p className="w-full h-[15%] py-2 overflow-hidden text-[16px] flex items-center justify-center">
              opening from 07:00 am to 11:00 pm
            </p>
          </div>
          <a
            target="blank"
            href="https://www.google.com/maps/place/The+Ramayana+Hotel,+Ayodhya/@26.7837525,82.1757592,13.52z/data=!4m8!1m2!2m1!1sHotels!3m4!1s0x399a09e814db2f5b:0x540c7be1e35d67ae!8m2!3d26.770802!4d82.210682?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            className="h-[30%] rounded bg-theme-dark text-center py-3"
          >
            <h1>Visit Us</h1>
            <p className="text-[16px]">
              special offers available only at shop 🔥
            </p>
          </a>
        </div>
      </section>
      <section className=" mb-5 p-5 text-3xl">
        <h1 className="text-center text-black font-major text-3xl my-20 text-[64px]">
          Why Us ?
        </h1>
        <div className="flex gap-4">
          <div className="flex w-[40%]  justify-center items-center relative">
            <img
              className="absolute -z-9 scale-150"
              src="images/blobS.png"
              alt=""
            />
            <img src="images/girl-blob.png" alt="" />
          </div>
          <div className="flex flex-col gap-8 w-[60%] overflow-auto">
            <div className="flex  bg-gray-100 w-full h-[155px] rounded-xl gap-6 items-center p-3 shadow-md">
              <div className="rounded-full bg-theme w-32 h-32 flex justify-center items-center text-[48px]">
                1
              </div>
              <div className="w-[80%] text-black">
                <h1>title</h1>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, delectus culpa. Sed aperiam natus commodi quidem,
                  recusandae dolorem saepe corrupti maxime quaerat obcaecati
                  veniam, repellendus nemo delectus dignissimos nobis sint.
                </p>
              </div>
            </div>
            <div className="flex bg-gray-100 shadow-md w-full h-[155px] rounded-xl gap-6 items-center p-3">
              <div className="rounded-full bg-theme w-32 h-32 flex justify-center items-center text-[48px]">
                2
              </div>
              <div className="w-[80%] text-black">
                <h1>title</h1>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, delectus culpa. Sed aperiam natus commodi quidem,
                  recusandae dolorem saepe corrupti maxime quaerat obcaecati
                  veniam, repellendus nemo delectus dignissimos nobis sint.
                </p>
              </div>
            </div>
            <div className="flex bg-gray-100 shadow-md w-full h-[155px] rounded-xl gap-6 items-center p-3">
              <div className="rounded-full bg-theme w-32 h-32 flex justify-center items-center text-[48px]">
                3
              </div>
              <div className="w-[80%] text-black">
                <h1>title</h1>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, delectus culpa. Sed aperiam natus commodi quidem,
                  recusandae dolorem saepe corrupti maxime quaerat obcaecati
                  veniam, repellendus nemo delectus dignissimos nobis sint.
                </p>
              </div>
            </div>
            <div className="flex bg-gray-100 shadow-md w-full h-[155px] rounded-xl gap-6 items-center p-3">
              <div className="rounded-full bg-theme w-32 h-32 flex justify-center items-center text-[48px]">
                4
              </div>
              <div className="w-[80%] text-black">
                <h1>title</h1>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, delectus culpa. Sed aperiam natus commodi quidem,
                  recusandae dolorem saepe corrupti maxime quaerat obcaecati
                  veniam, repellendus nemo delectus dignissimos nobis sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-10">
        <Link
          to="/menu"
          className="text-black m-auto text-xl px-3 py-2 bg-theme rounded text-3 xl"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default About;
