import { useState, useRef, useEffect } from 'react'

export const useSlide = () => {
    const firstLoad = useRef(true)
    const isLock = useRef(false)
    const [isView, setIsView] = useState(false)

    // useEffect(() => {
    //     if(isView) document.body.style.overflow = 'hidden';
    //     else document.body.style.overflow = '';
    //     console.log(isView)
    //     return () => {
    //         document.body.style.overflow = '';
    //     };
    // }, [isView]);

    const handleView = () => {
        if (isLock.current) return
        firstLoad.current = false
        isLock.current = true
        setIsView(p => !p)

        setTimeout(() => {
            isLock.current = false
        }, 500)
    }

    return { isView, firstLoad: firstLoad.current, handleView }
}