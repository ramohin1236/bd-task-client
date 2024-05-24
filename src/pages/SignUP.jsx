/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import useAxiosPublic from "../hooks/useAxiosPublic"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"


const SignUP = () => {
   
    const image_hosting = import.meta.env.VITE_image_hosting_api
    
     const image_host =`https://api.imgbb.com/1/upload?key=${image_hosting}`
     
    const axiosPublic =useAxiosPublic()

    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm()
     
      const {createUser,updateUserProfile}=useContext(AuthContext);

      const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const imageFile = { image: data.image[0] };
      
        console.log(imageFile);
      
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
      
            // Create the user
            const result = await createUser(email, password);
            const user = result.user;
      
            // Update the user profile
            await updateUserProfile(name, imageUrl);
      
            // Prepare user information for the backend
            const userInfo = {
              displayName: name,
              email: email,
              photoURL: imageUrl
            };
      
            // Post the user information to the backend
            const response = await axiosPublic.post('/users', userInfo);
            console.log(response);
      
            console.log(user);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      
        console.log(name, email, password);
      };

  return (
    <div className="hero min-h-screen bg-[#c1dcdc] shadow-2xl">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sing Up Now!</h1>
        
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick your Image</span>

  </div>
  <input
   {...register("image",{required: true})}
  type="file" className="file-input file-input-bordered w-full max-w-xs" />
  
</label>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
             {...register("name")}
            type="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            {...register("email")}
            type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            {...register("password")}
            type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
             Already have an account?   <Link to='/signin' className="ml-2 hover:scale-110 font-bold text-[#639595]">Sign In</Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUP