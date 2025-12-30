import {useState, useRef, useEffect} from 'react'

export const useWheel = () => {
    const allPages = 3
    const [page, setPage] = useState(1)
    const locked = useRef(false)

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if(locked.current) return
            locked.current = true

            if(e.deltaY > 0) setPage(p => Math.min(p + 1, allPages))
            else setPage(p => Math.max(p - 1, 1))
            
            setTimeout(() => {
                locked.current = false
            }, 500);
        }

        window.addEventListener('wheel', onWheel, { passive: true })

        return () => window.removeEventListener('wheel', onWheel)
    }, [])

    return page
}