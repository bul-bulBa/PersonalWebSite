import Stack from "./Stack"
import MoreAboutMe from "./MoreAboutMe"


const AboutMe = () => {
    

    return (
        <div className='h-[100vh] w-[100vw] p-20 relative'>
            <div className='flex flex-col gap-10'>
                <span className="col-start-1 col-span-2 row-start-1 text-3xl font-bold">Kyrychuk Sviatoslav</span>

                <div className="perspective animate-fadeInLeft">
                    <Stack />
                </div>
            </div>

            

        </div>
    )
}

export default AboutMe