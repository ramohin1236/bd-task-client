import { Link } from 'react-router-dom'
import bannerImg from '/public/banner.png'
import { FaRightLong } from 'react-icons/fa6'

const HeaderCover = () => {
  return (
    <div className="hero min-h-screen bg-[#c1dcdc] rounded-3xl">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={bannerImg} className="md:h-[600px] rounded-lg " />
      <div>
      <p className="uppercase text-3xl">New Arrivals</p>
        <h1 className="text-7xl font-bold uppercase ">just  for </h1>
        <p className=" flex italic  justify-end text-5xl uppercase text text-[#037272]  font-bold">you</p>
        
        <Link to='/shop' className="btn bg-[#207474] hover:bg-[#064e4e] hover:scale-110 uppercase border-none text-white text-xl font-semibold my-20 px-4">Explore now <FaRightLong/></Link >
      </div>
    </div>
  </div>
  )
}

export default HeaderCover