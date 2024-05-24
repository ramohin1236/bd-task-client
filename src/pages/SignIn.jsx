import { FaGoogle } from "react-icons/fa6"
import { Link } from "react-router-dom"


const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-[#c1dcdc] shadow-2xl">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
             If you are not in registered   <Link to='/sign-up' className="ml-2 hover:scale-110 font-bold text-[#639595]">Sign up</Link>
            </label>
            <button className="w-12 h-12 bg-[#639595]  rounded-full ">
                <FaGoogle className="text-3xl font-bold text-center ml-2"/> 
            </button>
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

export default SignIn