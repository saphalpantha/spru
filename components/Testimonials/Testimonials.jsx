import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { Fragment } from "react";
import  { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Navigation, Pagination, A11y,Autoplay } from "swiper";
import { useWindowSize } from "usehooks-ts";


const data = [
  { id: "i1", img: "https://www.spruproducts.in/images/testimonials/t1.jpg", desc:'I am totally surprise with quality, Amazing Products with best quality. SYFO Toilet Cleaner is superb ... Well Done Spru!', name:'Hament Gupta', post:'Propritor', location:'Jaiswal Trading Company, Maharajganj'},
  { id: "i2", img: "https://www.spruproducts.in/images/testimonials/t1.jpg" ,  desc:'I am totally surprise with quality, Amazing Products with best quality. SYFO Toilet Cleaner is superb ... Well Done Spru!',name:'Hament Gupta',post:'Propritor' , location:'Jaiswal Trading Company, Maharajganj'},
  { id: "i3", img: "https://www.spruproducts.in/images/testimonials/t1.jpg" , desc:'I am totally surprise with quality, Amazing Products with best quality. SYFO Toilet Cleaner is superb ... Well Done Spru!',name:'Hament Gupta', post:'Propritor' , location:'Jaiswal Trading Company, Maharajganj'},
  { id: "i4", img: "https://www.spruproducts.in/images/testimonials/t1.jpg", desc:'I am totally surprise with quality, Amazing Products with best quality. SYFO Toilet Cleaner is superb ... Well Done Spru!',name:'Hament Gupta', post:'Propritor', location:'Jaiswal Trading Company, Maharajganj'},
  { id: "i5", img: "https://www.spruproducts.in/images/testimonials/t1.jpg", desc:'I am totally surprise with quality, Amazing Products with best quality. SYFO Toilet Cleaner is superb ... Well Done Spru!', name:'Hament Gupta', post:'Propritor', location:'Jaiswal Trading Company, Maharajganj'},
];

export const TestimonialCard = ({id, img, desc,name, post, location }) => {
  return (
    <div className={`flex  h-[25rem]  py-5 w-[20rem] shadow-md flex-col items-center gap-2 justify-between border-b-4 px-2 border-green-400 ${id === 'i3' && 'mt-[2.5rem]'}`}>
      <img
        className="w-1/3 rounded-full shadow-md"
        alt="img"
        src={img}
      ></img>
      <p className="text-center">{desc}</p>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold  text-center text-xl">{name}</h1>
        <span className="text-2xs text-center">{post}</span>
        <span className="text-center italic">{location}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  SwiperCore.use([Autoplay])
  const { width } = useWindowSize();
  return (
    <Fragment>
      <div
        className={`max-w-6xl md:max-w-full min-h-sreen  py-20 space-y-10  gap-10 bg-[#f8f9fa] `}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-center">Our Testimonials</h1>
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
              padding: "2rem 3rem",
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
            {data.map((i) => {
              return (
                <SwiperSlide className="">
                  <TestimonialCard key={i.id}  id={i.id} name={i.name} desc={i.desc} post={i.post} img={i.img}  location={i.location}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
