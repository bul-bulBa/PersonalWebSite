import { useWheel } from "@/lib/useWheel"
import AboutMe from "./about-me/AboutMe"
import Project from "./Project"
import Contacts from "./Contacts"
import gugugaga from '../../assets/gugu-gagaScreen.png'
import clearDev from '../../assets/clearDevScreen.png'
import Slide from "./about-me/Slide"
import Nav from './Nav'

const LandingPage = () => {
    const page = useWheel(4)

    return (
        <div className="">
            <Nav />

            {page === 1 && <AboutMe />}
            {page === 2 && <Project text="gugu gaga site" img={gugugaga} />}
            {page === 3 && <Project text="clearDevSite" img={clearDev} />}
            {page === 4 && <Contacts />}

            <Slide />
        </div>
    )
}

export default LandingPage