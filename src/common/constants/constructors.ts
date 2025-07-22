import { CONSTRUCTOR } from "../interfaces/constructor";

export const CONSTRUCTOR_STYLES = {
    [CONSTRUCTOR.FERRARI]: {
        bgPrimary: `bg-[var(--color-ferrari-bg-color)]`,
        textPrimary: `text-white`,
        bgRounded: `bg-[#FFF200]`,
        textRounded: `text-black`
    },
    [CONSTRUCTOR.MERCEDES]: {
        bgPrimary: `bg-[var(--color-mercedes-bg-color)]`,
        textPrimary: `text-[var(--color-mercedes-text-color)]`
    },
    [CONSTRUCTOR.MCLAREN]: {
        bgPrimary: `bg-[var(--color-mclaren-bg-color)]`,
        textPrimary: `text-gray-100`
    },
    [CONSTRUCTOR.REDBULL]: {
        bgPrimary: `bg-[var(--color-redbullracing-bg-color)]`,
        textPrimary: `text-[var(--color-redbullracing-text-color)]`,
        bgRounded: `bg-black`,
        textRounded: `text-[var(--color-redbullracing-text-color)]`
    }
};