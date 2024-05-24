import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import man1 from '/public/man1.png'
import { useState } from 'react';

const SingleItem = () => {
    const [setSwiperRef] = useState(null);
    return (
        <div className="container mx-auto mt-14">
            <div className="flex">
                <div>
                    <img src="/public/creative-reels-composition.png" alt="" className="w-[800px] h-[600px] object-cover" />

                    <p className="text-5xl font-bold">i-phone 15</p>
                </div>

                <div>
                    <p className="badge bg-[#c1cbcb] w-28 h-12 font-bold text-xl mb-6">Mobile</p>
                    <p className="text-2xl font-bold">120000 BDT</p>
                    <div className='rating rating-lg'>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                        <p className='text-2xl font-bold mt-2 ml-4'>4.5</p>
                    </div>
                </div>
            </div>


            {/* show review */}
            <div className='mt-24'>
            <div>
                <p className="text-5xl font-bold mb-12">What customers say about <br /> i-phone?</p>
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
            {/* customers objects */}
            <div className=" max-h-screen ">
  <div className="p-10 flex-col ">
    <div className="text-center ">
       <div className='flex gap-6 justify-center items-center'>
       <img src='/public/logo.png' alt=""className='w-16' />
      <h1 className="text-5xl font-bold text-[#3e5b5b]">Write Your Opinion</h1>
       </div>
      <p className="py-6 bg-[#9cbbbb] rounded-3xl text-2xl font-semibold mt-2">Write & Give us a Chance </p>
    </div>
    
  </div>
  <div className="  bg-base-100 flex justify-center">
      <form >
       <div className='flex gap-10'>
            {/* left */}
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name " placeholder="name" className="input input-bordered md:w-96" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comments</span>
          </label>
          <input type="Comments" placeholder="Comments" className="input input-bordered md:w-96" required />
          
        </div>
       </div>
       {/* right */}
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input type="Ratings" placeholder="Ratings" className="input input-bordered md:w-96" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Proffesion</span>
          </label>
          <input type="proffesion" placeholder="Proffesion" className="input input-bordered md:w-96" required />
          
        </div>
        </div>
       </div>
        <div className="  flex justify-center">
        <button to='/shop' className="btn bg-[#207474] hover:bg-[#064e4e] hover:scale-110 uppercase border-none text-white text-xl font-semibold my-20 px-4">Submit a Comment </button >
        </div>
      </form>
    </div>
             </div>
        </div>
    )
}

export default SingleItem