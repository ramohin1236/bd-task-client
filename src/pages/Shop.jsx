/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react'
import ProductsCart from '../components/ProductsCart'
import shirt from '/public/shirt.png'
import useAxiosPublic from '../hooks/useAxiosPublic'

const Shop = () => {
    const [product, setProduct] = useState(null)
    const axiosPublic = useAxiosPublic()
    const [category, setCategory] = useState([])
    const [sortOptin, setSortOption] = useState('default')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const [filteredItems, setFilteredItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(7)

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    useEffect(() => {
        try {
            axiosPublic.get('/product')
                .then(data => {
                    setProduct(data.data)
                    setFilteredItems(data.data)
                })
        } catch (err) {
            console.log("error for fetching data", err);
        }

    }, [axiosPublic])

    useEffect(() => {
        const fetchtData = async () => {
            try {
                const response = await fetch('/category.json')
                const data = await response.json()
                console.log(data);
                setCategory(data);

            }
            catch (err) {
                console.log("error for fetching data", err);
            }
        }

        fetchtData()
    }, [])

    // sort data
    const handelSort = (option) => {
        setSortOption(option)

        let sortedItems = [...filteredItems];

        //  logic
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price)
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price)
                break;

            default:
                break;

        }

        setFilteredItems(sortedItems)
        setCurrentPage(1)
    }



    const filterItems = (category) => {
        const filtered = category === 'All' ? product : product.filter((item) => item.des=== category);
        console.log("dfsfsadf",category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
        setCurrentPage(1)
    }


    // show all data
    const showAll = () => {
        setFilteredItems(product)
        setSelectedCategory("All")
        setCurrentPage(1)
    }

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


            {/* filter and sort start */}
            <div className='rounded-3xl mt-12 mb-12 container mx-auto bg-[#9cbbbb] p-6 md:flex justify-around '>
            <div>
                    {/* all buttons */}
                    <div>
                        <p className='text-3xl font-bold mt-12 mb-4'>Category Here</p>
                        <div className="pt-4  items-center flex     overflow-x-auto  gap-7 mb-4 ">
                            <button className={`border-x-4  font-bold hover:bg-button hover:text-white border-button rounded-2xl mx-8 px-8 py-2 ${selectedCategory === "All" ? "activee" : ""}`} onClick={showAll}>All</button>
                            <button className={`border-x-4  font-bold hover:bg-button hover:text-white border-button rounded-2xl mx-8 px-8 py-2 ${selectedCategory === "Casual shirt" ? "activee" : ""}`} onClick={() => filterItems("Casual shirt")}>Casual shirt</button>
                            <button className={`border-x-4  font-bold hover:bg-button hover:text-white border-button rounded-2xl mx-8 px-8 py-2 ${selectedCategory === "Male-fashion" ? "activee" : ""}`} onClick={() => filterItems("Male-fashion")}>Male-fashion</button>
                            <button className={`border-x-4  font-bold hover:bg-button hover:text-white border-button rounded-2xl mx-8 px-8 py-2 ${selectedCategory === "Mobile" ? "activee" : ""}`} onClick={() => filterItems("Mobile")}>Mobile</button>
                          

                        </div>
                    </div>
                </div>
                {/* sort line here */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-2xl font-bold">Sort with price & length</span>

                    </div>
                    <select
                      onChange={(e) => handelSort(e.target.value)}
                      value={sortOptin}
                    className="select select-bordered text-xl font-semibold">
                    <option value="default" className='text-xl font-bold'  selected>Defalut</option>
  <option value="A-Z" className='text-xl font-bold'>A-Z</option>
  <option value="Z-A" className='text-xl font-bold'>Z-A</option>
  <option value="low-to-high" className='text-xl font-bold'>Price-Low-to-High</option>
  <option value="high-to-low" className='text-xl font-bold'>Price-High-to-Low</option>
                      
                    </select>

                </label>
            </div>
            {/* filter and sort end*/}
            <div>
                <p>Product choose here</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto'>
                    {/* products starts */}
                    {
                        currentItems?.map((item, idx) => <ProductsCart key={idx} item={item} />)
                    }


                    {/* products ends */}
                </div>
                {/* pagination */}
                <div className='flex justify-center mt-6 gap-3'>
                    {
                        Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, idx) => (
                            <button
                                className={`mx-1 px-3 py-1 rounded-full ${currentPage === idx + 1 ? "bg-button text-black text-2xl font-bold" : "font-bold text-2xl bg-gray-300"}`}
                                onClick={() => paginate(idx + 1)}
                                key={idx + 1}>
                                {idx + 1}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop