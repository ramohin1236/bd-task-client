import HeaderCover from "../components/HeaderCover"
import Sweeper from "../components/Sweeper"


const Home = () => {
  return (
    <div className="container mx-auto  ">
        <HeaderCover/>
       <div className="rounded-lg mt-14">
       <Sweeper/>
       </div>
    </div>
  )
}

export default Home