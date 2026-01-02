import type { ReactComponentElement } from "react"
import { Button } from "../ui/button"
import { Link } from "@tanstack/react-router"

type propsType = {
  text: string,
  img: string
}

const Project = ({ Component, link }: any) => {

  return (
    <div className="w-[100vw] h-[100vh] p-20 animate-fadeInLeft flex flex-col gap-5">
      <Component />
      <Link to={link}><Button>See more</Button></Link>
    </div>
  )
}

export default Project