
const linkedIn = 'https://www.linkedin.com/in/%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2-%D0%BA%D0%B8%D1%80%D0%B8%D1%87%D1%83%D0%BA-043b553a1/'
const Contacts = () => {

    return (
        <div className="animate-fadeInLeft 
        w-full h-full p-20 flex flex-col gap-5 text-xl">
            <div className="text-xl font-bold">My contacts:</div>
            <span>Location: Ternopil, Ukraine</span>
            <span>tel: +380687630374</span>
            <span>Email: swyatoslav24042010@gmail.com</span>
            <a href="https://t.me/sw1a7">Telegram</a>
            <a href="https://github.com/bul-bulBa">GitHub</a>
            <a href={linkedIn}>linkedIn</a>
        </div>
    )
}

export default Contacts