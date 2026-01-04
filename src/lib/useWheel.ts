import { useState, useRef, useEffect } from 'react'
import { useAppState } from '@/store/StoreConfig'
import { selectLockSwipe } from '@/store/reducers/system'

type returnType = {
    page: number,
    swipeFuncs: {
        upSwipe: (e: React.PointerEvent<HTMLDivElement>) => void,
        downSwipe: (e: React.PointerEvent<HTMLDivElement>) => void
    }
}

export const useWheel = (count: number): returnType => {
    const [page, setPage] = useState(1)
    const locked = useRef(false)
    const stateLock = useAppState(selectLockSwipe)
    
    // without useEffect, stateLockRef updates only once, i don't know why
    const stateLockRef = useRef(stateLock)
    useEffect(() => { stateLockRef.current = stateLock }, [stateLock])

    const onWheel = (e: WheelEvent) => {
        if (locked.current || stateLockRef.current) return
        locked.current = true

        if (e.deltaY > 0) setPage(p => Math.min(p + 1, count))
        else setPage(p => Math.max(p - 1, 1))

        setTimeout(() => {
            locked.current = false
        }, 500);
    }

    useEffect(() => {
        window.addEventListener('wheel', onWheel, { passive: true })

        return () => {
            window.removeEventListener('wheel', onWheel)
        }
    }, [])

    // swipe functional
    let startY = 0

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== 'touch') return
        startY = e.clientY
    }

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== 'touch') return
        if (locked.current || stateLockRef.current) return
        locked.current = true

        const diff = startY - e.clientY
        const THRESHOLD = 60

        if (diff > THRESHOLD) {
            setPage(p => Math.min(p + 1, count))
        } else if (diff < -THRESHOLD) {
            setPage(p => Math.max(p - 1, 1))
        }

        setTimeout(() => {
            locked.current = false
        }, 500)
    }

    return {
        page,
        swipeFuncs: {
            upSwipe: onPointerUp,
            downSwipe: onPointerDown
        }
    }
}