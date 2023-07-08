import React, { Fragment } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <Fragment>
      <div
        className={`max-w-6xl flex flex-col md:max-w-full  items-center justify-center bg-green-500  gap-10 pt-[2rem]`}
      >
        <div className="flex flex-col md:flex-row  md:justify-between px-0 px-[4rem] py-2  md:py-4 space-y-6 md:space-y-0  gap-5 md:gap-x-32">
          <div className="max-w-md flex justify-center flex-col gap-4">
            <Logo wRatio={'2/4'} />
            <p className="w-[110%] text-2xs text-white text-justify">
              Spru Products is one of the reliable Manufacturers, Exporters, and
              Suppliers of many items. We are an ISO 9001-2008 certified
              company. Our product range comprises of House Cleaning Chemicals,
              Autocare Products, and Laundry Products. We deliver good quality
              products at low cost. That is why our customers trust us and this
              helps us to create a long-term relationship with our customers.
            </p>
          </div>

          <div className="flex flex-col  space-y-3 md:space-y-2 ">
            <h1 className="text-white font-bold text-2xl max-w-full whitespace-nowrap ">
              Quick Links
            </h1>
            <div>
              <ul className="flex flex-col   text-start py-2 space-y-1 font-light list-none  text-white  text-2xs">
                <li className="max-w-md text-left w-[100%]">
                  <Link href={"/"}>About</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Vision & Mission</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Guiding Principles</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Catalogue</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Certificates</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Career</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Distributor</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Gallery</Link>
                </li>
                <li className="max-w-md text-left">
                  <Link href={"/"}>Contact us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-white flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-white">Get In Touch</h1>
            <ul className="flex flex-col gap-8 ">
                    <div className="flex flex-col">
                        <span>Address</span>
                        <h1>1st Floor, Ories Tower Plot No.- 6, Opp. New High Court Faizabad Road, Lucknow </h1>
                    </div>
                    <div className="flex flex-col">
                        <span>MOBILE</span>
                        <h1>(+91) 7355147501 (24/7 Support Line)</h1>
                    </div>
                    <div className="flex flex-col">
                        <span>Email</span>
                        <h1>info@spruproducts.in</h1>
                    </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100%] text-gray-300 py-10 gap-5 md:gap-0 items-center flex flex-col md:flex-row px-[4rem] justify-between  bg-green-700 text-white font-bold text-center">
        <h1 className="text-xs">© Copyright 2020 SPRU Products </h1>
        <span className="text-xs">Design With By LIVE Solutions </span>
        <ul className="flex gap-5 md:gap-7 text-xs">
            <li>About </li>
            <li>Help Desk</li>
            <li>Privacy Policy</li>
        </ul>

      </div>
    </Fragment>
  );
};

export default Footer;
