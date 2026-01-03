import { createSlice } from "@reduxjs/toolkit";
import type { stateType } from "../StoreConfig";


export type contactsType = {
    contacts: string,
    location: string,
    tel: string,
    email: string
}

const other = createSlice({
    name: 'other',
    initialState: {
        en: {
            flip: 'Flip',
            contacts: {
                contacts: 'My contacts',
                location: 'Location: Ternopil, Ukraine',
                tel: 'Tel: ',
                email: 'Email: '
            }
        },
        ua: {
            flip: 'Перевернути',
            contacts: {
                contacts: 'Мої контакти',
                location: 'Розташування: Тернопіль, Україна',
                tel: 'Тел: ',
                email: 'Пошта: '
            }
        }
    },
    reducers: {}
})

export const selectOtherFlipEN = (state: stateType) => state.other.en.flip
export const selectOtherFlipUA = (state: stateType) => state.other.ua.flip

export const selectOtherContactsEn = (state: stateType) => state.other.en.contacts
export const selectOtherContactsUA = (state: stateType) => state.other.ua.contacts

export default other.reducer