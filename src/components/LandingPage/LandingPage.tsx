import { useWheel } from "@/lib/useWheel"
import { useWindowSize } from "@uidotdev/usehooks";
import AboutMe from "./about-me/AboutMe"
import Contacts from "./Contacts"
import Slide from "./about-me/Slide"
import Nav from './Nav'
import ClearDev from "../Projects/ClearDev";

import GuguGaga from '../Projects/gugugaga/GuguGaga'

const LandingPage = () => {
    const page = useWheel(4)
    const size = useWindowSize()
    
    return (
        <div className="w-[100vw] h-[100vh] relative overflow-hidden">
            <Nav />

            {page === 1 && <AboutMe size={size} />}
            {page === 2 && <GuguGaga />}
            {page === 3 && <ClearDev/>}
            {page === 4 && <Contacts />}

            {size.width && size.width < 1024 && <Slide />}
        </div>
    )
}

export default LandingPage