import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import AboutMeReducer from './reducers/moreAboutMe'
import LanguageReducer from './reducers/language'
import GuguGagaReducer from './reducers/gugugaga'
import ClearDevReducer from './reducers/cleardev'
import OtherReducer from './reducers/other'

const rootReducer = combineReducers({
    aboutMe: AboutMeReducer,
    language: LanguageReducer,
    gugugaga: GuguGagaReducer,
    cleardev: ClearDevReducer,
    other: OtherReducer,
})
export type stateType = ReturnType<typeof rootReducer>
export const useAppState: TypedUseSelectorHook<stateType> = useSelector

const store = configureStore({ reducer:rootReducer })
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store