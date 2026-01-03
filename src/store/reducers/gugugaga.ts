import { createSlice } from "@reduxjs/toolkit";
import type { stateType } from "../StoreConfig";

export type gugugagaType = {
    seeMore: string,
    back: string,
    about: string,
    toStartProject: string,
    tabs: {
        authorization: string,
        messages: string,
        posts: string,
        edit: string,
        filter: string,
        settings: string
    }
}

const gugugaga = createSlice({
    name: 'gugugaga',
    initialState: {
        en: {
            seeMore: 'see more',
            back: 'back',
            about: 'Social network with a 2FA, post feed and 1-to-1 messaging',
            toStartProject: `If you want to look this project, you must clone repo <a href="https://github.com/bul-bulBa/gugu-gaga">gugu-gaga</a> and switch to dev branch.
                Also to start the project, you must have redis and node.js`,
            tabs: {
                authorization: 'Authorization',
                messages: 'Messages',
                posts: 'Posts',
                edit: 'Edit Profile',
                filter: 'Filter Users',
                settings: 'Customize system and adaptive design'
            }
        },
        ua: {
            seeMore: 'більше',
            back: 'назад',
            about: 'Соц мережа з 2FA, стрічкою постів і 1-на-1 месенджера',
            toStartProject: `Якщо ви хочете подивитися цей проект, ви повинні клонувати репозиторій <a href="https://github.com/bul-bulBa/gugu-gaga">gugu-gaga</a> і перейти до гілки dev.
                Також для запуску проекту ви повинні мати redis і node.js`,
            tabs: {
                authorization: 'Авторизація',
                messages: 'Повідомлення',
                posts: 'Пости',
                edit: 'Змінення Профілю',
                filter: 'Фільтрування Користувачів',
                settings: 'Налаштування системи й адаптивний інтерфейс'
            }
        }
    },
    reducers: {}
})

export const selectGugugagaEN = (state: stateType) => state.gugugaga.en
export const selectGugugagaUA = (state: stateType) => state.gugugaga.ua

export default gugugaga.reducer