import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, 
    CardFooter, CardHeader, CardTitle, } from "../ui/card"

type propsType = {
    text: string,
    img: string
}

const Project = ({text, img}: propsType) => {

    return (
        <div className="w-[100vw] h-[100vh] p-20 animate-fadeInLeft">
            <Card>
              <CardHeader>
                <img src={img} alt="" />
              </CardHeader>
              <CardContent>
                <p>{text}</p>
              </CardContent>
              <CardFooter>
                <p><Button>See the project</Button></p>
              </CardFooter>
            </Card>
        </div>
    )
}

export default Project