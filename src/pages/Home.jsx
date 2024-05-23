import AboutSection from "../Section/AboutSection"
import HeaderCover from "../components/HeaderCover"
import Sweeper from "../components/Sweeper"


const Home = () => {
    return (
        <div className="container mx-auto  ">
            <HeaderCover />
            <div className="rounded-lg mt-14">
                <Sweeper />
            </div>
            <div className="rounded-lg mt-14">
               
                    <AboutSection />
                
            </div>
        </div>
    )
}

export default Home