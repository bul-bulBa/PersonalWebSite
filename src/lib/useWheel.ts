import { useState, useRef, useEffect } from 'react'

export const useWheel = (count: number) => {
    const [page, setPage] = useState(1)
    const locked = useRef(false)

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (locked.current) return
            locked.current = true

            if (e.deltaY > 0) setPage(p => Math.min(p + 1, count))
            else setPage(p => Math.max(p - 1, 1))

            setTimeout(() => {
                locked.current = false
            }, 500);
        }

        window.addEventListener('wheel', onWheel, { passive: true })

        // swipe
        let startY = 0

        const onPointerDown = (e: PointerEvent) => {
            if (e.pointerType !== 'touch') return
            startY = e.clientY
        }

        const onPointerUp = (e: PointerEvent) => {
            if (e.pointerType !== 'touch') return
            if (locked.current) return
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

        window.addEventListener('pointerdown', onPointerDown)
        window.addEventListener('pointerup', onPointerUp)

        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('pointerdown', onPointerDown)
            window.removeEventListener('pointerup', onPointerUp)
        }
    }, [])

    return page
}