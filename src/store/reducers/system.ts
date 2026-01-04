import { createSlice } from "@reduxjs/toolkit";
import type { stateType } from "../StoreConfig";
import type { langType } from "@/lib/useLanguage";

const language = createSlice({
    name: 'system',
    initialState: {
        language: '' as langType,
        lockSwipe: false
    },
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload
        },
        toggleSwipe(state) {
            state.lockSwipe = !state.lockSwipe
        }
    }
})

export const selectLanguage = (state: stateType) => state.system.language
export const selectLockSwipe = (state: stateType) => state.system.lockSwipe

export default language.reducer
export const { setLanguage, toggleSwipe } = language.actions