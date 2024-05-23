/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const CategoriesCart = ({img, cate}) => {
  return (
   <Link>
     <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={img} alt="Shoes" className="h-[500px] object-cover "/></figure>

 
  
</div>
 <p className="text-3xl font-bold">{cate}</p>
   </Link>
  )
}

export default CategoriesCart