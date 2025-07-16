import { DRIVERS } from "../../data/drivers";

const DriverBio = () => {
    const driver = DRIVERS[0];
    

    return (
        <div id="driver-bio" className="flex flex-wrap gap-4 lg:justify-between">
            <div id="bio" className="rounded-2xl px-4 py-2 mt-10 bg-[rgb(32_33_36)] text-lg">
                {
                    driver.bio.map(item => <p className="mt-2">{item}</p>)
                }
            </div>
            {
                Array.isArray(driver.titles) && driver.titles?.length > 0 ?
                    <div id="titles-summary" className="grid grid-cols-1 p-4 rounded-2xl mt-10 bg-ferrari-bg-theme">
                            {
                                driver.titles.map((obj) => {
                                    const years = obj.details.map(item => item.year).join(", ");
                                    return (
                                        <div className="not-first:mt-4">
                                            <p className="font-semibold text-xl">{obj.details.length}x {obj.type}</p>
                                            <p>{years}</p>
                                        </div>
                                    )
                                })
                            }
                    </div>
                :
                    <></>
            }

            {
                Array.isArray(driver.titles) && driver.titles?.length > 0 ?
                <div id="tiles-by-year-and-constructor">
                    
                </div>
                :
                <></>
            }
        </div>
    );
};

export default DriverBio;