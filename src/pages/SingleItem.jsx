import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import man1 from '/public/man1.png'
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';


const SingleItem = () => {
    const {user}=useContext(AuthContext)
    const [setSwiperRef] = useState(null);
    const [comments,setComments]=useState([])
    const [ratings,setRatings]=useState([])
    console.log(ratings);
    const product = useLoaderData();
    const {_id,name}=product;
  
    
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm()


      const onSubmit = async (data) => {
        const userName = user.displayName;
        const comment = data.Comments;
        const ratings = data.Ratings;
        const passion = data.proffesion;
        const userPhoto = user.photoURL;
        const userId = data.id;
      const info={userName,comment, ratings,passion,userId,userPhoto}
    //   comment, userId, userName, userPhoto
      
         try{
            const response = await axiosPublic.post(`/product/${product._id}`, info);
            if (response.data.insertedId) {
                toast.success("Thank you for your kind opinion.");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
               
            }
         }catch (error) {
            console.error('Error:', error);
          }
  
      };

      useEffect(()=>{
          axiosPublic.get(`/products/${_id}`)
          .then(response => {
            console.log(response);
            const { comments, averageRating } = response.data;
            setComments(comments)
            setRatings(averageRating)
            console.log('Comments:', comments);
            console.log('Average Rating:', averageRating);
            // Display comments and average rating in your UI
        })
        .catch(error => {
            console.error('Error fetching comments or average rating:', error);
        }); 
      },[axiosPublic,_id])
    
    console.log(product);
    return (
        <div className="container mx-auto mt-14">
            <div className="flex">
                <div>
                    <img src={product.imageUrl} alt="" className="w-[800px] h-[600px] object-cover" />

                    <p className="text-5xl font-bold">{product.name} </p>
                </div>

                <div>
                    <p className="badge bg-[#c1cbcb] w-36 h-12 font-bold text-xl mb-6">{product.des} </p>
                    <p className="text-2xl font-bold">{product.price}  BDT</p>
                    <div className='rating rating-lg'>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                        <p className='text-2xl font-bold mt-2 ml-4'>{ratings}</p>
                    </div>
                </div>
            </div>


            {/* show review */}
            <div className='mt-24'>
            <div>
                <p className="text-5xl font-bold mb-12">What customers say about <br /> {name}</p>
                <div> 
                   
                        {comments.length >0? <p className='text-3xl'>This Product has <span className='font-bold text-blue-700'> {comments.length}</span> Comments.</p>:<p className='text-3xl'>This Product has <span className='font-bold text-blue-700'>No Comments</span> Yet.</p> }
                   
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
                    {
                        comments?.map((item,idx)=><SwiperSlide key={idx} className='border bg-[#c1cfcf] rounded-3xl'>
                        <div >
                            <p className='mb-8 p-8'>{item.comment}</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-8 p-6'>
                                <img src={item?.userPhoto} alt="" className='w-28 h-20 object-cover rounded-full'/>
                                <p className='text-3xl font-bold'>{item.userName}
                                    
                                </p>
                            </div>
                            <div className='rating rating-lg'>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                                <p className='text-2xl font-bold mt-2 ml-4'>{item?.ratings}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                    }
                        
                    

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
      <form  onSubmit={handleSubmit(onSubmit)}>
       <div className='flex gap-10'>
            {/* left */}
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Product Id</span>
          </label>
          <input  {...register("id")} type="text" placeholder="Proffesion" className="input input-bordered md:w-96" defaultValue={_id} readOnly required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comments</span>
          </label>
          <input  {...register("Comments")} type="Comments" placeholder="Comments" className="input input-bordered md:w-96" required />
          
        </div>
       </div>
       {/* right */}
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input  {...register("Ratings")} type="number" placeholder="Ratings" className="input input-bordered md:w-96" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Proffesion</span>
          </label>
          <input  {...register("proffesion")} type="proffesion" placeholder="Proffesion" className="input input-bordered md:w-96" required />
          
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