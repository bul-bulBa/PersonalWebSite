import AllFunctional from '@/assets/AllFunctional.mp4'

type propsType = {
    about: string,
    howToStart: string
}

const General = ({about, howToStart}: propsType) => {
    

    return (
        <div className='flex flex-col gap-5 text-lg'>
            <div>{about}</div>
            <div dangerouslySetInnerHTML={{ __html: howToStart}}></div>
            <video src={AllFunctional} controls></video>
        </div>
    )
}

export default General