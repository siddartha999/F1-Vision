import { IDriverContextProps } from "../common/interfaces/context";
import { IDriver } from "../common/interfaces/driver";
import DRIVERS from "../data/drivers/drivers";

/**
 * One-stop location to manage driver data.
 */
const useDrivers = (): IDriverContextProps => {
    const drivers = DRIVERS;

    /**
     * Returns the corresponding driver for the given id.
     */
    const getDriverById = (driverId: string): IDriver | null => {
        const res = drivers.filter(d => d.id === driverId);
        return res.length > 0 ? res[0] : null;
    };

    /**
     * Returns the corresponding driver given the full name.
     * @param driverName: firstName-lastName is the expected format. Example: "lewis-hamilton". The property is case-insensitive.
     * NOTE: Edge-cases(if any) will be dealt with later
     */
    const getDriverByFullName = (driverName: string): IDriver | null => {
        const res = drivers.filter(d => `${d.firstName.toLocaleLowerCase()}-${d.lastName?.toLocaleLowerCase()}` === driverName);
        return res.length > 0 ? res[0] : null;
    };

    return {
        getDriverById: getDriverById,
        getDriverByFullName: getDriverByFullName,
    };
};

export default useDrivers;