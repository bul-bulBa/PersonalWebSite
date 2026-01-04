import { useState, useRef, useEffect } from 'react'
import { useAppDispatch } from '@/store/StoreConfig'
import { toggleSwipe } from '@/store/reducers/system'

export const useSlide = () => {
    const dispatch = useAppDispatch()
    const firstLoad = useRef(true)
    const isLock = useRef(false)
    const [isView, setIsView] = useState(false)

    const handleView = () => {
        if (isLock.current) return
        firstLoad.current = false
        isLock.current = true
        setIsView(p => !p)
        dispatch(toggleSwipe())

        setTimeout(() => {
            isLock.current = false
        }, 500)
    }

    return { isView, firstLoad: firstLoad.current, handleView }
}