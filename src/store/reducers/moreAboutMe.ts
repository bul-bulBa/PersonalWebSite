import { createSlice } from "@reduxjs/toolkit";
import type { stateType } from "../StoreConfig";

export type aboutMeType = {
    name: string,
    title: string,
    moreAboutMe: string
}

const aboutMe = createSlice({
    name: 'aboutMe',
    initialState: {
        en: {
            name: 'Sviatoslav Kyrychuk',
            title: 'More about me',
            moreAboutMe: `My name is Sviatoslav, I am 15 years old (10th grade). <br />
            I have been studying front-end development since 8th grade at <a href="https://profstepschool.com/school">ProfStep</a> courses.
            Last summer, I started learning React on my own, creating a social network called gugu-gaga (the name of the repository on GitHub), as well as several smaller projects for practice.
            I am looking for internship as a React front-end developer.
            It is important for me to gain real experience — I am not afraid of challenges and hard work. <br />
            I am open to discussing any terms) `
        },
        ua: {
            name: 'Киричук Святослав',
            title: 'Більше про мене',
            moreAboutMe: `Я Святослав 15 років (10 клас). <br /> 
            З 8 класу вивчаю frontend на курсах <a href="https://profstepschool.com/school">ProfStep</a>.
            Минулого літа почав самостійно вивчати React, створюючи соціальну мережу gugu-gaga (її назва в git hub),
            й інші невеликі проекти для практики.
            Шукаю стажування на позицію Frontend React developer,
            для мене важливо отримати досвід - труднощі й робота не лякають.
            Буду радий обговорити будь які умови)`
        }
    } as { en: aboutMeType,ua: aboutMeType },
    reducers: {}
})

export const selectAboutMeEN = (state: stateType): aboutMeType => state.aboutMe.en
export const selectAboutMeUA = (state: stateType): aboutMeType => state.aboutMe.ua

export default aboutMe.reducer