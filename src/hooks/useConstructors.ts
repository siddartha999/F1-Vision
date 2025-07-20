import { CONSTRUCTOR_STYLES } from "../common/constants/constructors";
import { CONSTRUCTOR, IConstructor } from "../common/interfaces/constructor";
import { IConstructorContextProps } from "../common/interfaces/context";
import { constructors as cs } from "../data/constructors";

/**
 * One-stop location to manage constructor data.
 */
const useConstructors = (): IConstructorContextProps => {
    const constructors = cs;

    /**
     * Returns the corresponding constructor for the given id.
     */
    const getConstructorById = (constructorId: string): IConstructor | null => {
        const res = constructors.filter(cs => cs.id === constructorId);
        return res && res.length > 0 ? res[0] : null;
    };

    /**
     * Returns tailwind theme for the given constructor id.
     */
    const getConstructorThemeById = (constructorId: string): string => {
        const res = constructors.filter(cs => cs.id === constructorId)[0];
        if (!res) return ``;
        return CONSTRUCTOR_STYLES[res.name];
    };

    return {
        getConstructorById: getConstructorById,
        getConstructorThemeById: getConstructorThemeById
    };
};

export default useConstructors;