import type { stateType } from "@/store/StoreConfig";
import { useAppState } from "@/store/StoreConfig";
import { selectLanguage } from "@/store/reducers/language";

export const useSelectText = <T>(
    selectEn: (state: stateType) => T, 
    selectUa: (state: stateType) => T): T => {
    const lang = useAppState(selectLanguage)

    return useAppState( lang === 'ua' ? selectUa : selectEn )

}