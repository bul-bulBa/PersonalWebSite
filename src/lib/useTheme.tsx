import { useState, useRef, useEffect } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | ''>('')

    const setSystemTheme = () => {
        const booleanSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        const systemTheme = booleanSystemTheme === true ? 'dark' : 'light'

        localStorage.setItem('theme', systemTheme)
        document.documentElement.classList.toggle('dark', booleanSystemTheme)
        setTheme(systemTheme)
    }

    useEffect(() => {
        let theme = localStorage.getItem('theme') as 'dark' | 'light' | '' | undefined | null
        
        console.log('SYSYTEM THEME', window.matchMedia('(prefers-color-scheme: dark)').matches)
        
        if (!theme) setSystemTheme()
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }

        console.log(theme)
    }, [])

    const changeTheme = () => {
        console.log('clicked')
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }
        else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }

        console.log(theme, localStorage.getItem('theme'))
    }

    return changeTheme
}