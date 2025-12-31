import Stack from "./about-me/Stack"

const AboutMe = () => {


    return (
        <div className="h-[99vh] w-[99vw] p-20 flex flex-col gap-10 animate-fadeInLeft">
            <span className="col-start-1 col-span-2 row-start-1 text-3xl font-bold">Kyrychuk Sviatoslav</span>
            
            <div className="perspective">
                <Stack />
            </div>
        </div>
    )
}

export default AboutMe