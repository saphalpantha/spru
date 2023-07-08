import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { Fragment, useEffect, useState } from "react";
import  { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Navigation, Pagination, A11y,Autoplay } from "swiper";
import { useWindowSize } from "usehooks-ts";
import { data } from "autoprefixer";

const products = [
  { id: "i1", img: "https://www.spruproducts.in/images/gallery/s5-1.jpg" },
  { id: "i2", img: "https://www.spruproducts.in/images/gallery/s6-1.jpg" },
  { id: "i3", img: "https://www.spruproducts.in/images/gallery/s4-1.jpg" },
  { id: "i4", img: "https://www.spruproducts.in/images/gallery/s3-1.jpg" },
  { id: "i5", img: "https://www.spruproducts.in/images/gallery/s2-1.jpg" },
];

export const ProductCard = ({ img }) => {
  return (
    <div className="overflow-hidden group shadow-md w-[22rem]">
      <img
        className="w-[100%] group-hover:scale-125 duration-150 ease-in h-[100%]"
        alt="img"
        src={img}
      ></img>
    </div>
  );
};

const Products = () => {
  SwiperCore.use([Autoplay])
  const { width } = useWindowSize();
  return (
    <Fragment>
      <div
        className={`max-w-6xl md:max-w-full min-h-sreen  py-32 pt-[16rem] space-y-10  gap-10 bg-[#f8f9fa] `}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-center ">OUR PRODUCTS</h1>
        <div className="flex flex-row justify-around px-[1rem]">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={100}
            slidesPerView={width > 768 ? 3 : 1}
            // navigation
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2rem",
              justifyItems: "center",
              alignItems: "center",
            }}
            autoplay={{
              delay:2500,
              disableOnInteraction:false,
            }}
            // pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log('')}
            // onSlideChange={() => console.log('slide change')}
          >
            {products.map((product) => {
              return (
                <SwiperSlide className="">
                  <ProductCard key={product.id} img={product.img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
