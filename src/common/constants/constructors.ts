import { CONSTRUCTOR } from "../interfaces/constructor";

export const CONSTRUCTOR_STYLES = {
    [CONSTRUCTOR.FERRARI]: {
        bgPrimary: `bg-[var(--color-ferrari-bg-color)]`,
        textPrimary: `text-white`,
        bgRounded: `bg-[#FFF200]`,
        textRounded: `text-black`,
        bgHover: `hover:bg-[#C00000]`,
    },
    [CONSTRUCTOR.MERCEDES]: {
        bgPrimary: `bg-[var(--color-mercedes-bg-color)]`,
        textPrimary: `text-[var(--color-mercedes-text-color)]`,
        bgHover: `hover:bg-[#00A19C]`,
    },
    [CONSTRUCTOR.MCLAREN]: {
        bgPrimary: `bg-[var(--color-mclaren-bg-color)]`,
        textPrimary: `text-gray-100`,
        bgHover: `hover:bg-[#E67300]`,
    },
    [CONSTRUCTOR.REDBULL]: {
        bgPrimary: `bg-[var(--color-redbullracing-bg-color)]`,
        textPrimary: `text-[var(--color-redbullracing-text-color)]`,
        bgRounded: `bg-black`,
        textRounded: `text-[var(--color-redbullracing-text-color)]`,
        bgHover: `hover:bg-[#2A3A5F]`, 
    }
};