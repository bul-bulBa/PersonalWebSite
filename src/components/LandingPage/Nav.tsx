import { Sun } from 'lucide-react'
import { useTheme } from '../../lib/useTheme'


const Nav = () => {
    const changeTheme = useTheme()

    return (
        <div className="fixed top-5 left-1/2
        bg-background rounded-full z-2
        flex items-center">
            <span onClick={changeTheme}>
                <Sun />
            </span>
        </div>
    )
}

export default Nav