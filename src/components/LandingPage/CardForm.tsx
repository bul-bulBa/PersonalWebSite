import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, 
    CardFooter, CardHeader, CardTitle, } from "../ui/card"


type propsType = {
    text: string,
    img: string
}

const CardForm = ({text, img}: propsType) => {

    return (
        <div className="w-[80%]">
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

export default CardForm