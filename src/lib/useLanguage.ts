import { useState, useRef, useEffect } from 'react'
import { setLanguage } from '@/store/reducers/system'
import { useAppDispatch } from '@/store/StoreConfig'

export type langType = 'ua' | 'en' | '' 

export const useLanguage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const lang = localStorage.getItem('language')as 'ua' | 'en' | '' | undefined | null

        if(!lang) {
            const systemLang = navigator.language
            if(systemLang === 'uk' || systemLang === 'uk-UA') dispatch(setLanguage('ua'))
            else dispatch(setLanguage('en'))
        }
        else dispatch(setLanguage(lang))

    }, [])

    const changeLanguage = (newLang: langType) => {
        localStorage.setItem('language', newLang)
        dispatch(setLanguage(newLang))
    }

    return changeLanguage
}