/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"



const ProductsCart = ({item}) => {
    
    console.log(item);
    const {_id,des,imageUrl,name,price}=item




    return (

        <Link to={`/product/${_id}`} className="card card-compact  bg-base-100 shadow-xl">

            <figure><img src={imageUrl} alt="Shoes" className="h-96 object-contain" /></figure>
            <div className="card-body">
                <div className="flex justify-between" >
                    <div>  <p className="badge bg-[#c1dcdc] font-bold">{des}</p></div>
                   

                </div>
                <h2 className="card-title text-4xl font-bold">{name}</h2>
                <h2 className="card-title text-2xl">{price} BDT</h2>


            </div>
        </Link>

    )
}

export default ProductsCart