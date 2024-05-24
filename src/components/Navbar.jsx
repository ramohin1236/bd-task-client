import {  Link, NavLink } from 'react-router-dom'
import logo from '/public/logo.png'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const Navbar = () => {
    const {logout,user}= useContext(AuthContext)
    const navNavLink =
    <>
    <li><NavLink to='/' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]' : ''} font-bold`
    }
 >Home</NavLink></li>
    <li><NavLink to='/shop' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]':'' } font-bold`
    }
 >Shop</NavLink></li>
    <li><NavLink to='/product-add' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]':'' } font-bold`
    }
 >Add Product</NavLink></li>
   
        
        
    </>


const logOut = ()=>{
    logout()
}
  return (
    <header className="h-20 ">
    <div className="navbar bg-base-100 container mx-auto ">
<div className="navbar-start">
 <div className="dropdown">
   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </div>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
   {navNavLink}

   </ul>
 </div>
 <a className="btn btn-ghost text-xl">
    <span className='font-bold text-2xl text-[#064e4e]'>e-commerce</span><img src={logo } alt="logo" className='w-12' />
 </a>
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1">
 {navNavLink}
  
 </ul>
</div>
<div className="navbar-end">
    {
        user? <>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
        <li><button className='btn' onClick={logOut}>Logout</button ></li>
      </ul>
    </div>
        </>: <Link to='/signin'> <button className='btn font-semibold text-xl'>Sign in</button></Link>
    }
   
</div>
    </div>
    {/* header Cover design */}
   
 </header>
  )
}

export default Navbar