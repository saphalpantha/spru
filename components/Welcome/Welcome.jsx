import React from "react";
import Card from "./Card";

const data = [
  {
    id: "i1",
    title: "Manufacturing",
    desc: "Our Manufacturing facilities is located at Nawabganj, Barabanki, Uttar Pradeh.",
    img: "/images/wel1.png",
  },
  {
    id: "i2",
    title: "Market Presence",
    desc: "We support the on field sales team through round the clock Marketing and Technical support.",
    img: "/images/wel2.png",
  },
  {
    id: "i3",
    title: "R & D",
    desc: "We have a team of consultants who are specialist for various products of the Industry.",
    img: "/images/wel3.png",
  },
  {
    id: "i4",
    title: "Contact",
    desc: "Please feel free to comunicate with us 24/7.",
    img: "/images/wel4.png",
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen w-full gap-14  flex flex-col md:flex-row justify-between px-[4rem] py-[2rem]">
      <img src="https://www.spruproducts.in/images/pic11.jpg"></img>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Welcome to SPRU Products</h1>
        <p className=" max-w-6xl leading-[1.4rem] md:max-w-3xl text-justify">
          Spru Products is one of the reliable Manufacturers, Exporters, and
          Suppliers of many items. We are an ISO 9001-2008 certified company.
          Our product range comprises of House Cleaning Chemicals, Autocare
          Products, and Laundry Products. We deliver good quality products at
          low cost. That is why our customers trust us and this helps us to
          create a long-term relationship with our customers. We use innovation
          and knowledge for creating ideas that can reduce the impact of our
          business operations on the environment. All our products are
          eco-friendly, biodegradable with extraordinary performance in action.
          These are manufactured using sophisticated machines, under the
          guidance of our qualified technician & team of experts.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center items-center pt-[2rem]">
        {data.map(item => (<Card key={item.id} title={item.title} img={item.img} desc={item.desc}/>))}
      </div>
      </div>
    </div>
  );
};

export default Welcome;
