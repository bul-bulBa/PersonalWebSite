

const AboutMe = () => {

    return (
        <div className="h-[100vh] w-[100vw] p-20 flex flex-col gap-10 animate-fadeInLeft
        md:grid grid-cols-2 grid-rows-[10vh_80vh]  ">
            <span className="col-start-1 col-span-2 row-start-1 text-3xl font-bold">Kyrychuk Sviatoslav</span>
            
            <div className="row-start-2 col-start-1 flex flex-col gap-5">
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
            
            <div className="row-start-2 col-start-2 flex flex-col gap-5">
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
        </div>
    )
}

export default AboutMe