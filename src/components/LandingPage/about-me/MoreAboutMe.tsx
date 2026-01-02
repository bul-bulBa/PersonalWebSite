import { useAppState } from "@/store/StoreConfig"
import { selectAboutMeEN, selectAboutMeUA } from "@/store/reducers/moreAboutMe"
import { selectLanguage } from '@/store/reducers/language'

const MoreAboutMe = () => {
    const lang = useAppState(selectLanguage)
    const text = lang === 'ua'
    ? useAppState(selectAboutMeUA)
    : useAppState(selectAboutMeEN)

    return (
        <div className='bg-background text-foreground'>
            <div className='text-2xl'>{text.title}</div>
            <div className='text-xl' dangerouslySetInnerHTML={{ __html: text.moreAboutMe}} />
        </div>
    )
}

export default MoreAboutMe

