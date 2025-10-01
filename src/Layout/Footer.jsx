
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="border-t-1 overflow-hidden bg-theme-dark">
      <div className="w-full flex h-[50vh] border-b-1 border-gray-400">
        <div className="w-[25%]  border-r-[1px] border-gray-500 h-full px-4">
          <h1 className="text-8xl py-10 font-bold px-20 ">CL</h1>
          <div className="px-8 py-2 text-2xl pl-16 flex flex-col items-start justify-center gap-8 text-[20px] w-full">
            <div className="flex  gap-6 items-center ">
              <span>
                <FaMapLocationDot />
              </span>
              <p>near Railway crossing Ranopali Ayodhya , 224001</p>
            </div>
            <div className="flex gap-6 items-center">
              <span>
                <BsFillPhoneFill />
              </span>{" "}
              85454547546
            </div>
            <div className="flex gap-6 items-center">
              <span>
                <MdOutlineAlternateEmail />
              </span>
              Cafe@lords.com{" "}
            </div>
          </div>
        </div>

        <div className="w-[30%]  h-full border-r-[1px] border-gray-500 font-[600px] text-xl px-8">
          <div className="w-full flex justify-between h-[70%]">
            <div className="w-[43%] px-10 py-10 pb-3 flex flex-col gap-2">
              <h1 className=" pb-4 font-medium">QUICK LINKS</h1>
              <p>Shop All</p>
              <p>Today's Choice</p>
              <p>Coffee</p>
              <p>Snacks</p>
              <p>My Account</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div className="w-[45%]  px-10 py-10  pb-3 flex flex-col gap-2">
              <h1 className=" pb-4 font-medium">INFORMATION</h1>
              <p>FAQ's</p>
              <p>Rewards</p>
              <p>Community</p>
            </div>
          </div>
          <div className="w-full flex justify-start gap-4 h-[30%] items-end py-5 px-9">
            <a
              target="blank"
              href="https://instagram.com/abdulkalam_011"
              className="w-16 h-16 border-1 rounded-full  place text-4xl items-center flex justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              target="blank"
              className="w-16 h-16 border-1 rounded-full  place text-4xl items-center flex justify-center"
            >
              <RiInstagramFill />
            </a>{" "}
            <a
              target="blank"
              className="w-16 h-16 border-1 rounded-full  place text-4xl items-center flex justify-center"
            >
              <FaYoutube />
            </a>{" "}
            <a
              target="blank"
              className="w-16 h-16 border-1 rounded-full  place text-4xl items-center flex justify-center"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="w-[45%] bg h-full p-10">
          <div className="w-full ">
            <h1 className="text-4xl">Stay in the loop</h1>
            <p className="text-xl">stay updated with our new recepies to try</p>
          </div>

          <div className="border-b-1 w-full flex justify-between mt-20 py-2">
            <input
              className="w-[60%]"
              type="text"
              placeholder="EMAIL ADDRESS"
            />
            <button className="flex gap-2">
              SIGN ME UP{" "}
              <span className="text-xl">
                <MdArrowOutward />
              </span>
            </button>
          </div>
          <div className="  w-full h-36 mt-10 ">
            <p className="overflow-hidden h-full text-ellipsis text-[18px]">
              <span className="font-medium">DISCLAIMER : </span> Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Ipsum quasi possimus
              officiis beatae eligendi, modi aperiam laborum temporibus maiores
              sapiente excepturi est. Totam inventore reprehenderit nobis
              placeat, perferendis sed, impedit a quo itaque, provident aut
              excepturi! Debitis accusantium totam dolorum, animi molestias
              corporis molestiae iure corrupti tempora, perspiciatis fuga velit
              et. Eum sed excepturi vero cupiditate cumque. Dignissimos nulla,
              quae hic atque quasi perferendis voluptas repellat unde quidem,
              nihil ullam ipsa nemo quod error aspernatur eveniet. Velit modi
              rerum, doloribus officia non quidem assumenda harum iure hic
              neque, ab at?
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center h-8 ">
        <p>&copy; 2025 cafelords designed and developed by abdul </p>
      </div>
      <h1 className="text-[350px] text-center logoTitle leading-[350px] font-b">
        CAFELORDS
      </h1>
    </div>
  );
};

export default Footer;
