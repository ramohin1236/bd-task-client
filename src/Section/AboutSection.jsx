import AboutCart from "../components/AboutCart"
import img1 from '/public/Group 3.png'
import img2 from '/public/Group 2.png'
import img3 from '/public/Group 1.png'
const AboutSection = () => {
    return (
        <div className="mt-16">
            <p className="text-5xl font-bold">About us</p>
            <p className="mt-6 text-2xl font-semibold">Order now and enjoy <br /> the smart life ber with enough time</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <AboutCart img={img1} titel={"Large Assortment"} des={"we offer many different types of products with fewer variations in each category."} />
                <AboutCart img={img2} titel={"Fast & Free Shipping"} des={"4-day or less delivery time, free shipping and an expedited delivery option."} />
                <AboutCart img={img3} titel={"24/7 Support"} des={"answers to any business related inquiry 24/7 and in real-time."} />
            </div>
        </div>
    )
}

export default AboutSection