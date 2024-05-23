import AboutSection from "../Section/AboutSection"
import CategoriesSec from "../Section/CategoriesSec"
import CustomersSay from "../Section/CustomersSay"
import HeaderCover from "../components/HeaderCover"
import SubmitComment from "../components/SubmitComment"
import Sweeper from "../components/Sweeper"


const Home = () => {
    return (
        <div>
            <div className="container mx-auto  ">
            <HeaderCover />
            </div>
            <div className="container mx-auto  rounded-lg mt-14">
                <Sweeper />
            </div>
            <div className="rounded-lg mt-36 container mx-auto ">
               
                    <AboutSection />
                
            </div>
            <div className="rounded-lg mt-36">
               
                    <CategoriesSec />
                
            </div>
            <div className="rounded-lg mt-36 container mx-auto">
               
                    <CustomersSay />
                
            </div>
            <div className="mt-16">
                 <SubmitComment/>
             </div>
        </div>
    )
}

export default Home