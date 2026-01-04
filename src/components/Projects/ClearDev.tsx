import clearDev from '@/assets/ClearDev.mp4'
import { useSelectText } from '@/lib/useSelectText'
import { selectClearDevEN, selectClearDevUA } from '@/store/reducers/cleardev'
import type { clearDevType } from '@/store/reducers/cleardev'

const ClearDev = () => {
    const text = useSelectText<clearDevType>(selectClearDevEN, selectClearDevUA)

    return (
        <div className='container animate-fadeInLeft flex flex-col gap-5 text-lg'>
            <div>{text.about}</div>
            <div dangerouslySetInnerHTML={{ __html: text.toStartProject}} />
            <video src={clearDev} controls className='lg:w-2/3'></video>
        </div>
    )
}


export default ClearDev