import { createSlice } from "@reduxjs/toolkit";
import type { stateType } from "../StoreConfig";

export type clearDevType = {
    about: string,
    toStartProject: string
}

const clearDev = createSlice({
    name: 'cleardev',
    initialState: {
        en: {
            about: 'Admin dashboard for managing employees: add workers, remove, assign bonuses, and filter them',
            toStartProject: `If you want to look this project, you must clone repo <a href="https://github.com/bul-bulBa/theme6">theme6</a>. Also to start the project, you must have node.js`,
        },
        ua: {
            about: 'Адміністративна панель для управління співробітниками: додавання, видалення, призначення премій та фільтрування співробітників',
            toStartProject: `Якщо ви хочете подивитися цей проект, ви повинні клонувати репозиторій <a href="https://github.com/bul-bulBa/theme6">theme6</a>.
                Також для запуску проекту ви повинні мати node.js`,
        }
    },
    reducers: {}
})


export const selectClearDevEN = (state: stateType): clearDevType => state.cleardev.en
export const selectClearDevUA = (state: stateType): clearDevType => state.cleardev.ua

export default clearDev.reducer