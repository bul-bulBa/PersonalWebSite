import { useState } from "react"
import { Button } from "../../ui/button"
import { Redo } from "lucide-react"

type propsType = {
    flip: string
}

const Stack = ({ flip }: propsType) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''} `}>

            <div className="flip-side flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-5">
                    <div className="text-xl font-bold text-primary">Frontend</div>
                    <div className=" flex flex-col gap-1">
                        <span className="text-xl font-bold">Stack:</span>
                        <span>React | JavaScript | TypeScript | Vite</span>
                        <span>HTML | CSS</span>
                    </div>
                    <div className=" flex flex-col gap-1">
                        <span className="text-xl font-bold">Libraries</span>
                        <span>Redux Toolkit | react-router-dom</span>
                        <span>Formik | react-hook-form</span>
                        <span>tailwindcss | Ant Design | Shadcn</span>
                        <span>axios | react-google-recaptcha</span>
                    </div>
                </div>
                <Button onClick={() => setIsFlipped(!isFlipped)}>{flip}<Redo /></Button>
            </div>

            <div className="flip-side back-side flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-5">
                    <div className="text-xl font-bold text-primary">Backend</div>
                    <div className=" flex flex-col gap-1">
                        <span className="text-xl font-bold">Stack:</span>
                        <span>Node.js | Express.js | MongoDB</span>
                    </div>
                    <div className=" flex flex-col gap-1">
                        <span className="text-xl font-bold">Libraries</span>
                        <span>mongodb | mongoose | redis</span>
                        <span>bcrypt | jsonwebtoken | cors</span>
                        <span>nodemailer | ws</span>
                    </div>
                </div>
                <Button onClick={() => setIsFlipped(!isFlipped)}>{flip}<Redo /></Button>
            </div>
        </div>
    )
}

export default Stack