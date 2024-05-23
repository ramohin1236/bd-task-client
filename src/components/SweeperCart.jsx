/* eslint-disable react/prop-types */


const SweeperCart = ({img,name,price,cat}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
       
    <figure><img src={img} alt="Shoes" className="h-[400px] object-contain"/></figure>
    <div className="card-body">
    <div className="badge bg-[#c1dcdc] font-bold" >{cat}</div>
      <h2 className="card-title text-4xl font-bold">{name}</h2>
      <h2 className="card-title text-2xl">{price}</h2>
    
      
    </div>
  </div>
  )
}

export default SweeperCart