import Image from "next/image";
import {
  FaChevronDown,
  FaChevronRight,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Button from "./components/Button";

import Achievement from "./components/Achievement";

const data = [
  {
    label: "Forrester",
    detail: "Conversational AI Wave Challenger",
  },
  {
    label: "G2",
    detail: "High Performer Fall 2023",
  },
  {
    label: "ITRG",
    detail: "Top Rated 2023",
  },
  {
    label: "Globe & Mail",
    detail: "Top Growing Companies",
  },
];

const brand = [
  {
    logo: "/Images/brand3.png",
    label: "6.7x ROI in year 1",
  },
  {
    logo: "/Images/brand1.png",
    label: "$750k savings / year",
  },
  {
    logo: "/Images/brand2.png",
    label: "95% recognition rate",
  },
];

export default function Home() {
  return (
    <div className="h-full flex flex-1 flex-col">
      <main className="w-full h-full pb-10 bg-primary">
        {/* Navbar */}
        <nav className="bg-[#121212] z-20 h-30 w-full py-5 px-20 flex justify-between items-center">
          <div className="h-[24] w-[72] cursor-pointer hover:text-[18px] transition-all ease-in-out">
            <Image alt="Logo" src="/Images/logo.png" width="72" height="24" />
          </div>
          <ul
            role="list"
            className="flex justify-center space-x-10 flex-1 items-center"
          >
            <li className="flex justify-center cursor-pointer hover:text-[18px] transition-all ease-in-out items-center">
              <div className="text-[16px] font-medium text-white leading-6">
                Pricing
              </div>
            </li>
            <li className="flex justify-center cursor-pointer hover:text-[18px] transition-all ease-in-out items-center gap-1">
              <div className="text-[16px] font-medium text-white leading-6">
                Platform
              </div>
              <FaChevronDown color="#B69EE0" />
            </li>
            <li className="flex justify-center cursor-pointer hover:text-[18px] transition-all ease-in-out items-center gap-1">
              <div className="text-[16px] font-medium text-white leading-6">
                Solutions
              </div>
              <FaChevronDown color="#B69EE0" />
            </li>
            <li className="flex justify-center cursor-pointer items-center gap-1">
              <div className="text-[16px] font-medium text-white leading-6">
                Resources
              </div>
              <FaChevronDown color="#B69EE0" />
            </li>
          </ul>
          <Button>Get a Demo</Button>
        </nav>

        {/* Hero */}
        <div className="h-full w-full relative justify-center items-center">
          <div className="absolute flex-1 flex top-0 -z-[10px] left-0 right-0 justify-start items-center">
            <Image alt="Hero" src="/Images/bg.png" width={1440} height={1000} />
          </div>
          <div className="flex relative flex-col z-20 justify-center items-center mt-20">
            <div className="lg:w-1/2 sm:w-3/4">
              <h3 className="lg:text-5xl text-3xl text-white font-medium text-center">
                A full customer service team powered by AI
              </h3>
              <p className="text-white font-light lg:text[20px] text-[16px] text-center leading-6 mt-10">
                Don't settle for a basic chatbot - your customers deserve
                better. Get a fully stocked, AI-powered customer
                serviceautomation platform that resolves more inquiries with the
                least amount of effort.
              </p>

              <div className="flex space-x-4 mt-6 items-center justify-center">
                <Button>See Ada in Action</Button>
                <div className="rounded-md ease-in-out transition-all px-4 cursor-pointer border-secondary border bg-transparent text-white font-medium text-sm justify-center items-center text-center hover:border-darkSecondary hover:text-[15px] py-3">
                  Learn more
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative justify-center items-center mt-32 z-20">
            <Image
              alt="Hero1"
              src="/Images/hero1.png"
              height={654}
              width={720}
            />
          </div>
        </div>

        {/* Business Section */}
        <section className="h-full w-full mt-32 px-20">
          <div className="w-1/2">
            <h3 className="lg:text-4xl text-2xl text-white font-normal">
              Basic chatbot have{" "}
              <span className="text-[#9CEAEC]">no business </span>representing{" "}
              <span className="text-[#B69EE0]">your business</span>
            </h3>
            <p className="text-white font-light lg:text[20px] text-sm text-start leading-6 mt-4">
              Ditch code-heavy, old school scripted chatbots. Integrate Ada with
              your existing business systems to resolve complex customer
              inquiries in record time.
            </p>
          </div>

          <div className="flex space-x-4 mt-6 items-center justify-start">
            <Button>See Ada in Action</Button>
            <div className="rounded-md ease-in-out transition-all px-4 cursor-pointer border-secondary border bg-transparent text-white font-medium text-sm justify-center items-center text-center hover:border-darkSecondary hover:text-[15px] py-3">
              Learn more
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Image
              alt="Hero2"
              src="/Images/hero2.png"
              height={560}
              width={1240}
            />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="flex justify-center items-center px-20 space-x-6 mt-10 gap-y-4 flex-wrap">
          {data.map((item) => (
            <Achievement
              detail={item.detail}
              label={item.label}
              key={item.label}
            />
          ))}
        </section>

        {/* Resources */}
        <section className="flex justify-between items sm:flex-col-reverse lg:flex-row item-center px-20 space-x-6">
          <div className="flex justify-center items-center h-full w-full mt-5">
            <Image
              alt="Hero3"
              src="/Images/hero3.png"
              height={608}
              width={608}
            />
          </div>
          <div className="flex relative flex-col z-20 justify-start items-center mt-20">
            <div className="">
              <h3 className="lg:text-5xl text-3xl text-white font-medium text-start">
                Resolve more phone calls with voice AI
              </h3>
              <p className="text-white font-light lg:text[20px] text-[16px] text-start leading-6 mt-10">
                Your customers are waiting — and they have been for some time —
                for the seamless experience only Ada’s platform can provide. Add
                intelligent phone automation using the same knowledge content in
                Ada’s easy-to-use platform.
              </p>

              <div className="flex space-x-4 mt-6 items-center justify-start">
                <Button>Learn More About Ada Voice</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center my-20">
          <div className="text-white font-extrabold text-4xl tracking-tight">
            4,272,090,866
          </div>
          <p className="text-white font-light text-sm tracking-tighter">
            converrsations automated
          </p>
        </div>

        <section className="flex flex-col space-x-4 space-y-4 justify-center items-center px-20 lg:flex-row">
          <div className="flex flex-col space-y-4 w-full items-center justify-center">
            <div className="flex flex-col w-full h-full ring-1 ring-[#FFFFFF10] px-6 justify-start items-start py-10 rounded-md">
              <p className="text-white font-thin text-xs">Up to</p>
              <h3 className="text-5xl font-extrabold text-white leading-8">
                77%
              </h3>
              <p className="text-white text-sm w-3/4 font-normal">
                of customent service interactions resolved throught automation
              </p>
            </div>
            <div className="flex flex-col w-full h-full ring-1 ring-[#FFFFFF10] px-6 justify-start items-start py-10 rounded-md">
              <h3 className="text-5xl font-extrabold text-white leading-8">
                50+
              </h3>
              <p className="text-white text-sm w-3/4 font-normal">
                languages supported instantly
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full items-center justify-center">
            {brand.map((item) => (
              <div key={item.label} className="flex space-x-6 px-6 py-[22px] justify-start items-center rounded-md w-full ring-1 ring-[#FFFFFF10] ">
                <Image
                  alt={item.label}
                  src={item.logo}
                  height={46}
                  width={162}
                />
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full h-screen flex-1 relative my-10 px-20 justify-center items-center">
          <div className="absolute flex top-0 z-0 left-0 right-0 justify-center items-center">
            <Image alt="Bg2" src="/Images/bg1.png" width={800} height={700} />
          </div>
          <div className="flex relative flex-col space-y-4 h-full w-full justify-center items-center">
            <div className="w-3/4">
              <h3 className="flex justify-center items-center text-center text-5xl font-medium text-white">
                Automate your customer service with Ada
              </h3>
            </div>
            <Button>Request a Demo</Button>
          </div>
        </div>

        <div className="flex px-20 justify-center items-center space-x-6 h-[400px]">
          <div className="flex w-3/5 flex-shrink flex-col justify-center px-8 items-start h-full rounded-md ring-1 ring-[#FFFFFF10]">
            <h3 className="text-3xl text-white font-normal w-1/2 mb-3">
              AI-powered automation built for CX teams
            </h3>
            <Button>View all Case Studies</Button>
          </div>
          <div className="flex flex-row space-x-4 justify-between ring-1 ring-[#FFFFFF10] rounded-md py-10 px-6  h-full items-start">
            <div className="w-3/5">
              <Image
                alt="service logo"
                src="/Images/service.png"
                height={40}
                width={150}
              />
              <ul
                role="list"
                className="flex space-y-4 justify-normal items-start flex-col mt-6"
              >
                <li className="flex flex-col justify-normal items-start">
                  <h3 className="text-white font-bold text-3xl">75%</h3>
                  <p className="text-white font-normal text-sm">
                    Inquiries resolved
                  </p>
                </li>
                <li className="flex flex-col justify-normal items-start">
                  <h3 className="text-white font-bold text-3xl">11</h3>
                  <p className="text-white font-normal text-sm">
                    languages supported
                  </p>
                </li>
                <li className="flex flex-col justify-normal items-start">
                  <h3 className="text-white font-bold text-3xl">8x</h3>
                  <p className="text-white font-normal text-sm">
                    Increase in product upsell
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-end items-center text-[#9977D4]">
                <h4 className="font-semibold text-sm hover:text-[16px] cursor-pointer transition-all ease-in-out">
                  Read the Air Asia case Study
                </h4>
                <FaChevronRight color="" />
              </div>
              <p className="font-nomal text-sm text-white my-6">
                “Ada has supported our customer's agents to contribute to the
                overall ancillary income through our Customer Happiness contact
                channels by selling eight times more ancillary products compared
                with 12 months ago.”
              </p>
              <div className="flex justify-normal items-center">
                <Image
                  alt="dp"
                  src="/Images/dp.png"
                  height={50}
                  width={50}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-normal items-start ml-4">
                  <h4 className="font-semibold text-white ttext-sm">
                    Bayley Clark
                  </h4>
                  <p className="text-white font-thin text-sm">
                    Head of Customer Support Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-between mt-10 w-full items-center px-20">
          <div className="flex flex-col justify-center w-3/5 items-start">
            <Image alt="Logo" src="/Images/logo.png" height={60} width={120} />
            <div className="flex justify-center items-center space-x-2 mt-6">
              <div className="cursor-pointer">
                <FaLinkedinIn
                  color="white"
                  className="hover:h-[28px] hover:w-[28px] transition-all ease-in-out"
                />
              </div>
              <div className="cursor-pointer">
                <FaTwitter
                  color="white"
                  className="hover:h-[28px] hover:w-[28px] transition-all ease-in-out"
                />
              </div>
              <div className="cursor-pointer">
                <FaGithub
                  color="white"
                  className="hover:h-[28px] hover:w-[28px] transition-all ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full items-start">
            <ul role="list">
              <h4 className="font-semibold text-white text-xl mb-3">
                Industries
              </h4>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Pricing
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Website Monitoring
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Newsletter Monitoring
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Blog
              </li>
            </ul>
            <ul role="list">
              <h4 className="font-semibold text-white text-xl mb-3">Inspire</h4>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Notion Competitor Monitoring Template
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Competitor Analysis Prompts{" "}
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Figma Competitor SWOT Template
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Best Software Tools
              </li>
            </ul>
            <ul role="list">
              <h4 className="font-semibold text-white text-xl mb-3">Legal</h4>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                About Us
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Contact
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                FAQ
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Terms and Conditions
              </li>
              <li className="text-sm text-gray-500 leading-8 hover:text-[15px] transition-all ease-in-out font-normal cursor-pointer">
                Imprint
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
