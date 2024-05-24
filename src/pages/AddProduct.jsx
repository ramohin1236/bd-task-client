/* eslint-disable no-unused-vars */

import { useForm } from 'react-hook-form';
import useAxiosPublic from './../hooks/useAxiosPublic';
import toast from 'react-hot-toast';


export const AddProduct = () => {

    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
  
        formState: { errors },
      } = useForm()
     
      const onSubmit = async(data) => {
        const image_hosting = import.meta.env.VITE_image_hosting_api
   

     const image_host =`https://api.imgbb.com/1/upload?key=${image_hosting}`;

           const name =data.name;
           const price= data.price;
           const des = data.selectOne;
           const imageFile = { image: data.image[0] };
           try {
            // Upload the image
            const hostingImg = await axiosPublic.post(image_host, imageFile, {
              headers: {
                'content-type': 'multipart/form-data'
              }
            });
        
            console.log(hostingImg.data.success);
        
            if (hostingImg.data.success) {
              const imageUrl = hostingImg.data.data.url; // Extract the image URL from the response
        
             const userInfo={name,price,des,imageUrl}
        
             
        
              // Post the user information to the backend
              const response = await axiosPublic.post('/product', userInfo);
              toast.success("product added successfylly!")
              console.log(response);
           
            }
          } catch (error) {
            console.error('Error:', error);
          }
        
   
      }



    return (
        <div className="container mx-auto mt-20 p-20">
            <p className="text-5xl font-bold m-10">Add Product Here</p>
            <form  onSubmit={handleSubmit(onSubmit)} className="md:flex rounded-3xl border bg-[#c1dcdc] h-96 justify-center items-center gap-7"action="">
                <div>
                     {/* name */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>

                    </div>
                    <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>
                {/* file input */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick a file</span>
                        
                    </div>
                    <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    
                </label>
                </div>

                {/* second div */}
                <div>
                      {/* price */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Price</span>

                    </div>
                    <input {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </label>
                      {/* description */}
                      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </div>
        <select {...register("selectOne")} className="select select-bordered">
          <option value="" disabled selected>Pick one</option>
          <option value="Male-fashion">Male-fashion</option>
          <option value="Mobile">Mobile</option>
          <option value="Casual shirt">Casual shirt</option>
        </select>
      </label>
               
                </div> <br />
                <div className='mt-12'><button className='btn'>Product Add</button></div>
            </form>
        </div>
    )
}
