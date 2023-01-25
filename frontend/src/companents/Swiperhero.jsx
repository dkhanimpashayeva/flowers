// import React from 'react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../companents/Swiperhero.scss'
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// const Swiperhero = () => {
//   return (
//     <div>
//        <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
 
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide className='slidefirst'>
//         <div className="swiper-info">
//         <span>Floral</span>
//         <h4>  Excellent bouquets for you</h4>
//         </div>
//        </SwiperSlide>
//       <SwiperSlide className='slidesecond'>   
//       <div className="swiper-info">
//         <span>Floral</span>
//         <h4>  Excellent bouquets for you</h4>
//         </div>



//           </SwiperSlide>
//           <SwiperSlide className='slidethird'>   
//           <div className="swiper-info">
//         <span>Floral</span>
//         <h4>  Excellent bouquets for you</h4>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//     </div>
//   )
// }

// export default Swiperhero



 import '../companents/Swiperhero.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Swiperhero = () => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slidefirst'>
        <div className="swiper-info">
                  <span>Floral</span>
        <h4>  Excellent bouquets for you</h4>
        </div>


        </SwiperSlide>
        <SwiperSlide className='slidesecond'> 
        <div className="swiper-info">
                  <span>Floral</span>
        <h4>  Excellent bouquets for you</h4>
        </div>

        </SwiperSlide>
        <SwiperSlide className='slidetird'>
        <div className="swiper-info">
                  <span>Floral</span>
        <h4>  Excellent bouquets for you</h4>
        </div>


        </SwiperSlide>
    
      </Swiper>
    </div>
  )
}

export default Swiperhero

