import {  Link, NavLink } from 'react-router-dom'
import logo from '/public/logo.png'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const Navbar = () => {
    const {logout}= useContext(AuthContext)
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
   <li><NavLink to='/' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]' : ''} font-bold`
    }
 >Home</NavLink></li>
    <li><NavLink to='/shop' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]':'' } font-bold`
    }
 >Shop</NavLink></li>
     <button onClick={logOut}>log out</button>
   </ul>
 </div>
 <a className="btn btn-ghost text-xl">
    <span className='font-bold text-2xl text-[#064e4e]'>e-commerce</span><img src={logo } alt="logo" className='w-12' />
 </a>
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1">
 <li><NavLink to='/' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]' : ''} font-bold`
    }
 >Home</NavLink></li>
    <li><NavLink to='/shop' className={({ isActive }) => 
      `text-xl ${isActive ? 'bg-[#9bb8b8]':'' } font-bold`
    }
 >Shop</NavLink></li>
  <button onClick={logOut}>log out</button>
 </ul>
</div>
<div className="navbar-end">
   <Link to='/signin'> <button className='btn font-semibold text-xl'>Sign in</button></Link>
</div>
    </div>
    {/* header Cover design */}
   
 </header>
  )
}

export default Navbar