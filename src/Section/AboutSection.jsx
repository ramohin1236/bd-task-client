import AboutCart from "../components/AboutCart"
import img1 from '/public/Group 3.png'
const AboutSection = () => {
    return (
        <div className="mt-16">
            <p className="text-5xl font-bold">About us</p>
            <p className="mt-6 text-2xl font-semibold">Order now and enjoy <br /> the smart life ber with enough time</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <AboutCart img={img1} titel={"Large Assortment"} des={"we offer many different types of products with fewer variations in each category."} />
                <AboutCart img={img1} titel={"Large Assortment"} des={"we offer many different types of products with fewer variations in each category."} />
                <AboutCart img={img1} titel={"Large Assortment"} des={"we offer many different types of products with fewer variations in each category."} />
            </div>
        </div>
    )
}

export default AboutSection