import Stack from "./Stack"
import MoreAboutMe from "./MoreAboutMe"

type propsType = {
    size: {
        width: number | null,
        height: number | null
    }
}

const AboutMe = ({ size }: propsType) => {

    return (
        <div className='h-[100vh] w-[100vw] p-20 relative
        flex flex-col gap-10
        lg:grid grid-cols-[25rem_1fr] grid-rows-[5rem_1fr]'>

                <span className="col-start-1 col-span-2 row-start-1 text-3xl font-bold">Kyrychuk Sviatoslav</span>

                <div className="perspective animate-fadeInLeft col-start-1 row-start-2">
                    <Stack />
                </div>

            {size.width && size.width > 1024 &&
                <div className="col-start-2 row-start-2">
                    <MoreAboutMe />
                </div>
            }

        </div>
    )
}

export default AboutMe