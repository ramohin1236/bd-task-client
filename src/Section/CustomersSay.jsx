import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import man1 from '/public/man1.png'
import { useState } from 'react';

const CustomersSay = () => {
    const [setSwiperRef] = useState(null);
    return (
        <div>
            <div>
                <p className="text-5xl font-bold mb-12">What customers say about <br /> e-commerce?</p>
                <div>
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={2}
                        centeredSlides={true}

                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper min-md:w-[1400px]"


                    >
                        <SwiperSlide className='border bg-[#c1cfcf] rounded-3xl'>
                            <div >
                                <p className='mb-8 p-8'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={man1} alt="" />
                                    <p className='text-3xl font-bold'>John Doe
                                        <br /> <span className='text-xl font-semibold'>youtuber</span>
                                    </p>
                                </div>
                                <div className='rating rating-lg'>
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                                    <p className='text-2xl font-bold mt-2 ml-4'>4.5</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border bg-[#c1cfcf] rounded-3xl'>
                            <div >
                                <p className='mb-8 p-8'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={man1} alt="" />
                                    <p className='text-3xl font-bold'>John Doe
                                        <br /> <span className='text-xl font-semibold'>youtuber</span>
                                    </p>
                                </div>
                                <div className='rating rating-lg'>
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                                    <p className='text-2xl font-bold mt-2 ml-4'>4.5</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='border bg-[#c1cfcf] rounded-3xl'>
                            <div >
                                <p className='mb-8 p-8'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={man1} alt="" />
                                    <p className='text-3xl font-bold'>John Doe
                                        <br /> <span className='text-xl font-semibold'>youtuber</span>
                                    </p>
                                </div>
                                <div className='rating rating-lg'>
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                                    <p className='text-2xl font-bold mt-2 ml-4'>4.5</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            
           
        </div>
    )
}

export default CustomersSay