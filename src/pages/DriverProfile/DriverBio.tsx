import { DRIVERS } from "../../data/drivers";

const DriverBio = () => {
    const driver = DRIVERS[0];
    return (
        <div id="driver-bio" className="flex flex-wrap gap-4 lg:justify-between lg:w-[60%]">
            <div id="" className="rounded-2xl p-2 mt-10 bg-ferrari-bg-theme">
                <p>Sir Lewis Carl Davidson Hamilton (born 7 January 1985) is a British racing driver who competes in Formula One for Ferrari. Hamilton has won a joint-record seven Formula One World Drivers' Championship titles—tied with Michael Schumacher—and holds the records for most wins (105), pole positions (104), and podium finishes (202), among others.</p>

                <p className="mt-2">Born and raised in Stevenage, Hamilton began his career in karting aged six, winning several national titles and attracting the attention of Ron Dennis, who signed him to the McLaren-Mercedes Young Driver Programme in 1998. After winning the direct-drive Karting World Cup and European Championship in 2000, Hamilton progressed to junior formulae, where his successes included winning the Formula 3 Euro Series and the GP2 Series. He subsequently signed for McLaren in 2007, becoming the first black driver to compete in Formula One at the Australian Grand Prix. In his rookie season, Hamilton won four Grands Prix and set several records as he finished runner-up to Kimi Räikkönen by one point. Hamilton won his maiden title in 2008, making a title-deciding overtake on the last lap of the last race of the season to become the then-youngest World Drivers' Champion. The Red Bull-Renault combination prevailed throughout his remaining four seasons at McLaren, with Hamilton achieving multiple race wins in each, including his involvement in a four-way title battle in 2010.</p>

                <p className="mt-2">Hamilton has been credited with furthering Formula One's global following by appealing to a broader audience outside the sport, in part due to his high-profile lifestyle, amongst his environmental and social activism. He has also become a prominent advocate in support of racial justice and increased diversity in motorsport. Hamilton was listed in the 2020 issue of Time as one of the 100 most influential people globally, and was knighted in the 2021 New Year Honours.</p>
            </div>
        </div>
    );
};

export default DriverBio;