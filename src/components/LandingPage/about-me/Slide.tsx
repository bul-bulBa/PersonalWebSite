import { ChevronLeft } from "lucide-react"
import { useSlide } from '../../../lib/useSlide'
import MoreAboutMe from "./MoreAboutMe"

const Slide = () => {
    const { isView, firstLoad, handleView } = useSlide()

    return (
        <div className={`absolute right-0 top-0 h-full flex items-center transform-right z-2
                ${isView ? 'animate-slideIn' : ''}
                ${!isView && !firstLoad ? 'animate-slideOut' : ''}`}>
                <span className='flex items-center justify-center rounded-l-xl 
                w-10 h-20 bg-primary text-primary-foreground animate-fadeInRight'
                    onClick={handleView}>
                    <span className={`transition-transform duration-500 ${isView ? "rotate-180" : ''}`}>
                        <ChevronLeft />
                    </span>
                </span>


                <div className={`w-[80vw] h-full bg-background p-10`}>
                    <MoreAboutMe />
                </div>
            </div>
    )
}

export default Slide