import { selectAboutMeEN, selectAboutMeUA } from "@/store/reducers/moreAboutMe"
import type { aboutMeType } from '@/store/reducers/moreAboutMe'
import { useSelectText } from "@/lib/useSelectText"

const MoreAboutMe = () => {
    const text = useSelectText<aboutMeType>(selectAboutMeEN, selectAboutMeUA)

    return (
        <div className='bg-background text-foreground'>
            <div className='text-2xl'>{text.title}</div>
            <div className='text-xl' dangerouslySetInnerHTML={{ __html: text.moreAboutMe}} />
        </div>
    )
}

export default MoreAboutMe

