import { createSlice } from "@reduxjs/toolkit";
import type { stateType } from "../StoreConfig";
import type { langType } from "@/lib/useLanguage";

const language = createSlice({
    name: 'aboutMe',
    initialState: {
        language: '' as langType,
    },
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload
        }
    }
})

export const selectLanguage = (state: stateType) => state.language.language

export default language.reducer
export const { setLanguage } = language.actions