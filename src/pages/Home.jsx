import AboutSection from "../Section/AboutSection"
import CategoriesSec from "../Section/CategoriesSec"
import HeaderCover from "../components/HeaderCover"
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
        </div>
    )
}

export default Home