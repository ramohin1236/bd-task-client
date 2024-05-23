import CategoriesCart from "../components/CategoriesCart"
import img1 from '/public/black_hoodie_mockup.jpg'
import img2 from '/public/creative-reels-composition.png'
import img3 from '/public/Stylish blue plaid shirt for men -4.jpg'

const CategoriesSec = () => {
    return (
        <div>
            <div className="container mx-auto mb-36">
                <p className="text-5xl font-bold">Categories</p>
                <p className="mt-6 text-2xl font-semibold">Find what you are looking for</p>
            </div>



            <div className="hero w-full md:h-[600px] md:bg-[#c1dcdc]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36">
                            <div className="relative mt-[-110px]"><CategoriesCart img={img1}  cate={"Male-fashion"} /></div>
                          <div>
                          <CategoriesCart img={img2} cate={"Mobile"}/>
                          </div>
                           <div  className="relative mt-[-110px]">
                           <CategoriesCart img={img3} cate={"Casual-shirt"}/>
                           </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoriesSec