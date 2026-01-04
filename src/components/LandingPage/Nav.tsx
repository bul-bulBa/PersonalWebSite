import {
    Select, SelectContent, SelectGroup,
    SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Sun, Moon } from 'lucide-react'
import { useAppState } from "@/store/StoreConfig"
import { selectLanguage } from "@/store/reducers/language"
import type { langType } from "@/lib/useLanguage"
import { useTheme } from '../../lib/useTheme'
import { useLanguage } from '@/lib/useLanguage'

const Nav = () => {
    const language = useAppState(selectLanguage)
    const { theme, changeTheme } = useTheme()
    const changeLanguage = useLanguage()

    return (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-2
        flex items-center gap-5">
            <span onClick={changeTheme}
                className=''>
                {theme === 'dark' ? <Moon /> : <Sun />}
            </span>
            <span>
                <Select onValueChange={(v: langType) => changeLanguage(v)} value={language} >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ua">ua</SelectItem>
                        <SelectItem value="en">en</SelectItem>
                    </SelectContent>
                </Select>
            </span>
        </div>
    )
}

export default Nav