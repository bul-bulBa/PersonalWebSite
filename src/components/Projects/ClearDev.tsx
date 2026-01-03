import bullshit from '@/assets/bullshit.mp4'
import { useSelectText } from '@/lib/useSelectText'
import { selectClearDevEN, selectClearDevUA } from '@/store/reducers/cleardev'
import type { clearDevType } from '@/store/reducers/cleardev'

const ClearDev = () => {
    const text = useSelectText<clearDevType>(selectClearDevEN, selectClearDevUA)

    return (
        <div className='w-[100vw] h-[100vh] p-20 animate-fadeInLeft flex flex-col gap-5 text-lg'>
            <div>{text.about}</div>
            <div dangerouslySetInnerHTML={{ __html: text.toStartProject}} />
            <video src={bullshit} controls className='lg:w-2/3'></video>
        </div>
    )
}


export default ClearDev