/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";


const SignIn = () => {
    const [errorMessage, setErrorMessage]=useState('')
    const {signInWithGoogle, signin}=useContext(AuthContext);
     const axiosPublic = useAxiosPublic();
     const location=useLocation();
     const navigate =useNavigate()
    const from = location?.state?.from?.pathname ||"/";
    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm()

    const onSubmit = (data) =>{
        const email =data.email;
        const password = data.password
        signin(email,password)
        .then(result=>{
             const user= result.user;
             const userInfo ={
                name: data.name,
                email: data.email
            }
            axiosPublic.post('/users', userInfo)
            .then( (response)=> {
              console.log(response);
            })
        
             navigate(from,{replace: true})
             toast.success("Successfully Login!")
        }).catch((error)=>{
            const errorMessage= error.message;
            setErrorMessage("Provide a correct email and password")
          
        })
        
      }


    const handlesignInWithGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            const userInfo = {
                name: user.displayName,
                email: user.email
            };
            axiosPublic.post('/users', userInfo)
            .then((response) => {
             
                toast.success("User Created Successfully!");
                <Navigate to="/" state={{from:location}} replace></Navigate>
            })
            .catch((error) => {
                console.error("Error creating user:", error);
                toast.error("Failed to create user.");
            });
            console.log("user", user);
            navigate(from, { replace: true });
        })
        .catch((error) => {
            console.error("Error signing in with Google:", error);
            toast.error("Failed to sign in with Google.");
        });
    }
    
  return (
    <div className="hero min-h-screen bg-[#c1dcdc] shadow-2xl">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
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
             If you are not in registered   <Link to='/sign-up' className="ml-2 hover:scale-110 font-bold text-[#639595]">Sign up</Link>
            </label>
            
          </div>
          <div className="form-control mt-6">
            <button  className="btn btn-primary">Login</button>
          </div>
        </form>
       {/* social login */}
       <div className="text-center mr-2">
               <button className="btn btn-circle  hover:bg-button-hvr text-black hover:text-white">
               <FaGoogle
               onClick={handlesignInWithGoogle}
               className="font-bold text-xl hover:text-white"/>
</button>

               </div>
      </div>
    </div>
  </div>
  )
}

export default SignIn