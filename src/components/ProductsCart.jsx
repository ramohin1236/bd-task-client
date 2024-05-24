import { Link } from "react-router-dom"


const ProductsCart = () => {
  return (

    <Link to={`/product/${1}`} className="card card-compact  bg-base-100 shadow-xl">
       
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="h-full object-contain"/></figure>
    <div className="card-body">
    <div className="flex justify-between" >
      <div>  <p className="badge bg-[#c1dcdc] font-bold">new</p></div>
      <div className='rating rating-lg'>
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-slate-600-500 text-2xl " />
                                    <p className='text-2xl font-bold mt-2 ml-4'>4.5</p>
                                </div>

    </div>
      <h2 className="card-title text-4xl font-bold">very nice shoes</h2>
      <h2 className="card-title text-2xl">1220 BDT</h2>
    
      
    </div>
  </Link>
   
  )
}

export default ProductsCart