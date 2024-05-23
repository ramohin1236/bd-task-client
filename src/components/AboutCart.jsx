

const AboutCart = ({img,titel,des}) => {
  return (
    <div className="w-96 mt-16 h-56">
           <div className="flex justify-center">
                <img src={img} alt="" />
           </div>
           <div className="p-4">
              <p className="text-center text-2xl font-bold">{titel}</p>
              <p className="my-2 font-semibold text-[#646b6b]">{des}</p>
           </div>
    </div>
  )
}

export default AboutCart