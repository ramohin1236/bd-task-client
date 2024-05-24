/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react'
import ProductsCart from '../components/ProductsCart'
import shirt from  '/public/shirt.png'
import useAxiosPublic from '../hooks/useAxiosPublic'
const Shop = () => {
    const [product,setProduct]=useState(null)
    const axiosPublic = useAxiosPublic()

    useEffect(()=>{
        axiosPublic.get('/product')
        .then(data=>setProduct(data.data))
    },[axiosPublic])

    // const [filteredItems, setFilteredItems]=useState([])
    // const [currentPage,setCurrentPage]=useState(1)
    // const [itemsPerPage]= useState(10)

    // const indexOfLastItem= currentPage*itemsPerPage;
    // const indexOfFirstItem= indexOfLastItem- itemsPerPage;
    // const currentItems = filteredItems.slice(indexOfFirstItem,indexOfLastItem);
    // const paginate = (pageNumber)=>setCurrentPage(pageNumber)
    return (
        <div>
            {/* shop banner start */}
            <div className="min-h-screen bg-[#c1dcdc] ">
                <div className="  container mx-auto">
                   
                        <h1 className="text-5xl font-bold text-center mt-6">Welcome to e-commerce</h1>
                       
                        
                     <div className='flex  justify-evenly items-center max-sm:flex-col-reverse relative mt-[-90px]'>
                      <div>
                      <p className="text-6xl font-bold leading-tight">  Best In Style <br />
                        Collection <br />
                        For You</p>
                        <p className='mt-12 text-2xl font-semibold'>Let's explore more with us and enjoy your stylish and easiest life.</p>
                      </div>

                        <img src={shirt} className='md:w-[500px] object-cover' alt="" />
                     </div>
             <div className="flex  md:w-[540px] h-20 relative m-12 pb-5 md:mt-[-110px]">
             <input type="text" placeholder="Product Search Here" className="input input-bordered w-full h-full rounded-2xl text-xl font-semibold " />
             <button className="btn justify-center items-center mt-2 rounded-full font-bold">search</button>
             </div>


                  
                </div>
            </div>
            {/* shop banner end */}
               
              <div>
                <p>Product choose here</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto'> 
                   {/* products starts */}
                   {
                    product?.map((item,idx)=> <ProductsCart key={idx} item={item}/>)
                   }
                    
                    
                   {/* products ends */}
              </div>
                {/* pagination */}
         {/* <div className='flex justify-center mt-6 gap-3'>
              {
              Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_,idx)=>(
                <button
                className={`mx-1 px-3 py-1 rounded-full ${currentPage === idx+1 ? "bg-button text-white text-2xl font-bold":"font-bold text-2xl bg-gray-300"}`}
                onClick={()=>paginate(idx+1)}
                key={idx+1}>
                    {idx+1}
                </button>
              ))
              }
         </div> */}
              </div>
        </div>
    )
}

export default Shop