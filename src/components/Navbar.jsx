import logo from '/public/logo.png'

const Navbar = () => {
    const navLink =
    <>
        <li><a>Item 1</a></li>
        
        <li><a>Item 3</a></li>
    </>
  return (
    <header className="h-20 ">
    <div className="navbar bg-base-100 container mx-auto ">
<div className="navbar-start">
 <div className="dropdown">
   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </div>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navLink}
   </ul>
 </div>
 <a className="btn btn-ghost text-xl">
    <span className='font-bold text-2xl text-[#064e4e]'>e-commerce</span><img src={logo } alt="logo" className='w-12' />
 </a>
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1">
   {navLink}
 </ul>
</div>
<div className="navbar-end">
 <a className="btn">Button</a>
</div>
    </div>
    {/* header Cover design */}
   
 </header>
  )
}

export default Navbar