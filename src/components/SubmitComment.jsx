import img from '/public/logo.png'

const SubmitComment = () => {
  return (
    <div className=" max-h-screen ">
  <div className="p-10 flex-col ">
    <div className="text-center ">
       <div className='flex gap-6 justify-center items-center'>
       <img src={img} alt=""className='w-16' />
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
  )
}

export default SubmitComment