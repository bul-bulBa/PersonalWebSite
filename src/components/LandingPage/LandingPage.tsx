import { useWheel } from "@/lib/useWheel"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contacts from "./Contacts"

const LandingPage = () => {
    const page = useWheel()

    return (
        <div className="">
            {page === 1 && <AboutMe />}
            {page === 2 && <Projects />}
            {page === 3 && <Contacts />}
        </div>
    )
}

export default LandingPage