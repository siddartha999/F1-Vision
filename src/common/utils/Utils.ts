
/**
 * Capitalizes the first letter of the given word.
 */
export const capitalizeFirstLetter = (word: string | null) => {
    if (word === null) return null;
    if (word === "") return "";
    return  word[0].toLocaleUpperCase() + word.slice(1);
};