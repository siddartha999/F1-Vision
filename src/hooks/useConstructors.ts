import { IConstructor } from "../common/interfaces/constructor";
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

    return {
        getConstructorById: getConstructorById
    };
};

export default useConstructors;