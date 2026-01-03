import { selectOtherContactsEn, selectOtherContactsUA } from "@/store/reducers/other"
import type { contactsType } from "@/store/reducers/other"
import { useSelectText } from "@/lib/useSelectText"

const linkedIn = 'https://www.linkedin.com/in/%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2-%D0%BA%D0%B8%D1%80%D0%B8%D1%87%D1%83%D0%BA-043b553a1/'
const Contacts = () => {
    const text = useSelectText<contactsType>(selectOtherContactsEn, selectOtherContactsUA)

    return (
        <div className="animate-fadeInLeft 
        w-full h-full p-20 flex flex-col gap-5 [@media(min-width:450px)]:text-xl">
            <div className="text-xl font-bold">{text.contacts}:</div>
            <span>{text.location}</span>
            <span>{text.tel} +380687630374</span>
            <span>{text.email} swyatoslav24042010@gmail.com</span>
            <a href="https://t.me/sw1a7">Telegram</a>
            <a href="https://github.com/bul-bulBa">GitHub</a>
            <a href={linkedIn}>linkedIn</a>
        </div>
    )
}

export default Contacts