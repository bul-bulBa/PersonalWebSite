import { selectAboutMeEN, selectAboutMeUA } from "@/store/reducers/moreAboutMe"
import { selectOtherFlipEN, selectOtherFlipUA } from "@/store/reducers/other"
import { useSelectText } from "@/lib/useSelectText"
import type { aboutMeType } from "@/store/reducers/moreAboutMe"
import Stack from "./Stack"
import MoreAboutMe from "./MoreAboutMe"

type propsType = {
    size: {
        width: number | null,
        height: number | null
    }
}

const AboutMe = ({ size }: propsType) => {
    const text = useSelectText<aboutMeType>(selectAboutMeEN, selectAboutMeUA)
    const flip = useSelectText<string>(selectOtherFlipEN, selectOtherFlipUA)

    return (
        <div className='h-[100vh] w-[100vw] p-20 relative
        flex flex-col gap-10
        lg:grid grid-cols-[25rem_1fr] grid-rows-[5rem_1fr]'>

                <span className="col-start-1 col-span-2 row-start-1 text-3xl font-bold">{text.name}</span>

                <div className="perspective animate-fadeInLeft col-start-1 row-start-2">
                    <Stack flip={flip} />
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