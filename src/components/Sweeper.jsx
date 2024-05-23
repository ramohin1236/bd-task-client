import {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SweeperCart from './SweeperCart';
import { FaRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import img1 from '/public/black_hoodie_mockup.jpg'
import img2 from '/public/creative-reels-composition.png'
import img3 from '/public/Stylish blue plaid shirt for men -4.jpg'

const Sweeper = () => {


    const [ setSwiperRef] = useState(null);

 
  
   


  return (
    <div>
          
          <div className='flex justify-between'>
          <div className='mb-16'>
              <p className='text-6xl font-bold'>Best Selling
                <br />Products
              </p>
              <p className='mt-4 text-2xl font-medium' >Easiest way to smart <br /> life by buying your favorite product </p>
          </div>

            <div>
            <Link to='/shop' className="btn bg-[#207474] hover:bg-[#064e4e] hover:scale-110 uppercase border-none text-white text-xl font-semibold my-20 px-4">See more<FaRightLong/></Link >
            </div>
          </div>


    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1, // small devices
        },
        768: {
          slidesPerView: 2, // medium devices
        },
        1024: {
          slidesPerView: 3, // large devices
        },
      }}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SweeperCart name={"Hoddie"} img={img1} price={"1500 BDT"} cat={"Male-fashion"}/>
      </SwiperSlide>
      <SwiperSlide>
        <SweeperCart name={"i-phone 14"} img={img2} price={"110000 BDT"} cat={"Mobile"}/>
      </SwiperSlide>
      <SwiperSlide>
        <SweeperCart name={"Full-Sleev-Shirt"} img={img3} price={"1200 BDT"} cat={"Casual-shirt"}/>
      </SwiperSlide>
      <SwiperSlide>
        <SweeperCart name={"Hoddie"} img={img1} price={"1500 BDT"} cat={"Male-fashion"}/>
      </SwiperSlide>
    </Swiper>
  
    
    </div>
  
  
  )
}

export default Sweeper