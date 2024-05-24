import { Link } from "react-router-dom"


const SignUP = () => {
  return (
    <div className="hero min-h-screen bg-[#c1dcdc] shadow-2xl">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sing Up Now!</h1>
        
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick your Image</span>

  </div>
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
  
</label>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" placeholder="name" className="input input-bordered" required />
          </div>
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