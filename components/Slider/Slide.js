import SwiperCore , { Navigation, Pagination, Scrollbar,  A11y, Autoplay } from 'swiper';

import  { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const sliderData = [
  {id:'s1', img:'https://www.spruproducts.in/images/main-slider/1.png'},
  {id:'s2', img:'https://www.spruproducts.in/images/main-slider/2.png' },
  {id:'s2', img:'https://www.spruproducts.in/images/main-slider/3.png'},
]

const DisplayImage = ({subtitle, heading, img}) => {

  return(

    <div className='w-[100vw] md:h-[90vh] h-[35vh]  bg-black  relative'>
      <img className='w-[100%] h-[100%] opacity-100 bg-contain bg-top' src={img} alt={"img"}></img>
  </div>
    )
}

export default () => {
  SwiperCore.use([Autoplay])
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      {sliderData.map(i => {
        return(
          <SwiperSlide>
            <DisplayImage img={i.img} subtitle={i.subtitle} heading={i.heading}/>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};