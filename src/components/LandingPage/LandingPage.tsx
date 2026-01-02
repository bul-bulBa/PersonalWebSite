import { useWheel } from "@/lib/useWheel"
import { useWindowSize } from "@uidotdev/usehooks";
import AboutMe from "./about-me/AboutMe"
import Project from "./Project"
import Contacts from "./Contacts"
import gugugaga from '../../assets/gugu-gagaScreen.png'
import clearDev from '../../assets/clearDevScreen.png'
import Slide from "./about-me/Slide"
import Nav from './Nav'
import Generalgg from "../Projects/gugugaga/General";
import GeneralCD from "../Projects/cleardev/General";

const LandingPage = () => {
    const page = useWheel(4)
    const size = useWindowSize()

    return (
        <div className="">
            <Nav />

            {page === 1 && <AboutMe size={size} />}
            {page === 2 && <Project Component={Generalgg} link='/gugugaga' />}
            {page === 3 && <Project Component={GeneralCD} link='/cleardev' />}
            {page === 4 && <Contacts />}

            {size.width && size.width < 1024 && <Slide />}
        </div>
    )
}

export default LandingPage