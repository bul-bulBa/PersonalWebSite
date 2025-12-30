import CardForm from "./CardForm"
import gugugaga from '../../assets/gugu-gagaScreen.png'
import clearDev from '../../assets/clearDevScreen.png'

const Projects = () => {

    return (
        <div className="w-[100vw] h-[100vh] p-20 animate-fadeInLeft grid md:grid-cols-2">
            <CardForm text="My project" img={gugugaga} />
            <CardForm text="Theme 6" img={clearDev} />
        </div>
    )
}

export default Projects