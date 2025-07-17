import { TITLES } from "../common/interfaces/awards";
import { IDriver } from "../common/interfaces/driver";

export const DRIVERS: IDriver[] = [
    {
        id: "driver_1",
        firstName: "Lewis",
        lastName: "Hamilton",
        dob: "Jan 7, 1985",
        nationality: "Great Britain",
        isActive: true,
        currentConstructorId: "constructor_1",
        number: "44",
        height: "5′9″",
        driverTitles: "7",
        constructorTitles: "8",
        points: "4965.50",
        grandSlams: "6",
        grandPrixStats: {
            wins: "105",
            poles: "104",
            races: "368",
            podiums: "202",
            fastestLaps: "68",
            retirements: "32",
            circuits: [
                {
                    "gp": "Austin",
                    "races": "12",
                    "wins": "5",
                    "poles": "3",
                    "fastestLaps": "2",
                    "podiums": "9",
                    "points": "217",
                    "lapsLed": "255",
                    "kmsLed": "1405"
                },
                {
                    "gp": "Baku",
                    "races": "8",
                    "wins": "1",
                    "poles": "1",
                    "fastestLaps": "0",
                    "podiums": "2",
                    "points": "87",
                    "lapsLed": "43",
                    "kmsLed": "258"
                },
                {
                    "gp": "Barcelona",
                    "races": "19",
                    "wins": "6",
                    "poles": "6",
                    "fastestLaps": "5",
                    "podiums": "12",
                    "points": "256",
                    "lapsLed": "317",
                    "kmsLed": "1475"
                },
                {
                    "gp": "Fuji",
                    "races": "2",
                    "wins": "1",
                    "poles": "2",
                    "fastestLaps": "1",
                    "podiums": "1",
                    "points": "10",
                    "lapsLed": "55",
                    "kmsLed": "251"
                },
                {
                    "gp": "Hockenheim",
                    "races": "7",
                    "wins": "3",
                    "poles": "2",
                    "fastestLaps": "2",
                    "podiums": "4",
                    "points": "89",
                    "lapsLed": "166",
                    "kmsLed": "759"
                },
                {
                    "gp": "Hungaroring",
                    "races": "18",
                    "wins": "8",
                    "poles": "9",
                    "fastestLaps": "2",
                    "podiums": "12",
                    "points": "286",
                    "lapsLed": "487",
                    "kmsLed": "2133"
                },
                {
                    "gp": "Imola",
                    "races": "5",
                    "wins": "1",
                    "poles": "1",
                    "fastestLaps": "2",
                    "podiums": "2",
                    "points": "65",
                    "lapsLed": "47",
                    "kmsLed": "231"
                },
                {
                    "gp": "Indianapolis",
                    "races": "1",
                    "wins": "1",
                    "poles": "1",
                    "fastestLaps": "0",
                    "podiums": "1",
                    "points": "10",
                    "lapsLed": "66",
                    "kmsLed": "277"
                },
                {
                    "gp": "Interlagos",
                    "races": "17",
                    "wins": "3",
                    "poles": "3",
                    "fastestLaps": "4",
                    "podiums": "7",
                    "points": "186",
                    "lapsLed": "184",
                    "kmsLed": "793"
                },
                {
                    "gp": "Istanbul",
                    "races": "7",
                    "wins": "2",
                    "poles": "0",
                    "fastestLaps": "0",
                    "podiums": "3",
                    "points": "84",
                    "lapsLed": "52",
                    "kmsLed": "278"
                },
                {
                    "gp": "Jeddah",
                    "races": "5",
                    "wins": "1",
                    "poles": "1",
                    "fastestLaps": "1",
                    "podiums": "1",
                    "points": "45",
                    "lapsLed": "18",
                    "kmsLed": "111"
                },
                {
                    "gp": "Kuala Lumpur",
                    "races": "11",
                    "wins": "1",
                    "poles": "5",
                    "fastestLaps": "2",
                    "podiums": "6",
                    "points": "116",
                    "lapsLed": "117",
                    "kmsLed": "649"
                },
                {
                    "gp": "Las Vegas",
                    "races": "2",
                    "wins": "0",
                    "poles": "0",
                    "fastestLaps": "0",
                    "podiums": "1",
                    "points": "24",
                    "lapsLed": "1",
                    "kmsLed": "6"
                },
                {
                    "gp": "Le Castellet",
                    "races": "4",
                    "wins": "2",
                    "poles": "2",
                    "fastestLaps": "0",
                    "podiums": "4",
                    "points": "86",
                    "lapsLed": "144",
                    "kmsLed": "841"
                },
                {
                    "gp": "Lusail",
                    "races": "3",
                    "wins": "1",
                    "poles": "1",
                    "fastestLaps": "0",
                    "podiums": "1",
                    "points": "32",
                    "lapsLed": "57",
                    "kmsLed": "307"
                },
                {
                    "gp": "Magny-Cours",
                    "races": "2",
                    "wins": "0",
                    "poles": "0",
                    "fastestLaps": "0",
                    "podiums": "1",
                    "points": "6",
                    "lapsLed": "0",
                    "kmsLed": "0"
                },
                {
                    "gp": "Melbourne",
                    "races": "17",
                    "wins": "2",
                    "poles": "8",
                    "fastestLaps": "1",
                    "podiums": "10",
                    "points": "195",
                    "lapsLed": "158",
                    "kmsLed": "838"
                },
                {
                    "gp": "Mexico City",
                    "races": "9",
                    "wins": "2",
                    "poles": "1",
                    "fastestLaps": "1",
                    "podiums": "6",
                    "points": "149",
                    "lapsLed": "95",
                    "kmsLed": "409"
                },
                {
                    "gp": "Miami",
                    "races": "4",
                    "wins": "0",
                    "poles": "0",
                    "fastestLaps": "0",
                    "podiums": "0",
                    "points": "34",
                    "lapsLed": "0",
                    "kmsLed": "0"
                },
                {
                    "gp": "Monaco",
                    "races": "18",
                    "wins": "3",
                    "poles": "2",
                    "fastestLaps": "4",
                    "podiums": "7",
                    "points": "203",
                    "lapsLed": "245",
                    "kmsLed": "818"
                },
                {
                    "gp": "Montreal",
                    "races": "16",
                    "wins": "7",
                    "poles": "6",
                    "fastestLaps": "2",
                    "podiums": "10",
                    "points": "236",
                    "lapsLed": "354",
                    "kmsLed": "1544"
                },
                {
                    "gp": "Monza",
                    "races": "18",
                    "wins": "5",
                    "poles": "7",
                    "fastestLaps": "7",
                    "podiums": "8",
                    "points": "218",
                    "lapsLed": "248",
                    "kmsLed": "1435"
                },
                {
                    "gp": "Mugello",
                    "races": "1",
                    "wins": "1",
                    "poles": "1",
                    "fastestLaps": "1",
                    "podiums": "1",
                    "points": "26",
                    "lapsLed": "50",
                    "kmsLed": "262"
                },
                {
                    "gp": "New Delhi",
                    "races": "3",
                    "wins": "0",
                    "poles": "0",
                    "fastestLaps": "0",
                    "podiums": "0",
                    "points": "26",
                    "lapsLed": "0",
                    "kmsLed": "0"
                },
                {
                    "gp": "Nürburgring",
                    "races": "5",
                    "wins": "2",
                    "poles": "1",
                    "fastestLaps": "1",
                    "podiums": "2",
                    "points": "60",
                    "lapsLed": "86",
                    "kmsLed": "442"
                },
                {
                    "gp": "Portimão",
                    "races": "2",
                    "wins": "2",
                    "poles": "1",
                    "fastestLaps": "1",
                    "podiums": "2",
                    "points": "51",
                    "lapsLed": "80",
                    "kmsLed": "372"
                },
                {
                    "gp": "Sakhir",
                    "races": "18",
                    "wins": "5",
                    "poles": "3",
                    "fastestLaps": "1",
                    "podiums": "11",
                    "points": "256",
                    "lapsLed": "214",
                    "kmsLed": "1157"
                },
                {
                    "gp": "Shanghai",
                    "races": "15",
                    "wins": "6",
                    "poles": "6",
                    "fastestLaps": "4",
                    "podiums": "9",
                    "points": "221",
                    "lapsLed": "306",
                    "kmsLed": "1667"
                },
                {
                    "gp": "Silverstone",
                    "races": "20",
                    "wins": "9",
                    "poles": "7",
                    "fastestLaps": "6",
                    "podiums": "15",
                    "points": "345",
                    "lapsLed": "367",
                    "kmsLed": "2109"
                },
                {
                    "gp": "Singapore",
                    "races": "15",
                    "wins": "4",
                    "poles": "4",
                    "fastestLaps": "3",
                    "podiums": "7",
                    "points": "164",
                    "lapsLed": "249",
                    "kmsLed": "1261"
                },
                {
                    "gp": "Sochi",
                    "races": "8",
                    "wins": "5",
                    "poles": "2",
                    "fastestLaps": "1",
                    "podiums": "7",
                    "points": "171",
                    "lapsLed": "160",
                    "kmsLed": "935"
                },
                {
                    "gp": "Spa-Francorchamps",
                    "races": "18",
                    "wins": "5",
                    "poles": "6",
                    "fastestLaps": "3",
                    "podiums": "11",
                    "points": "224.50",
                    "lapsLed": "195",
                    "kmsLed": "1365"
                },
                {
                    "gp": "Spielberg",
                    "races": "14",
                    "wins": "2",
                    "poles": "3",
                    "fastestLaps": "3",
                    "podiums": "6",
                    "points": "198",
                    "lapsLed": "123",
                    "kmsLed": "531"
                },
                {
                    "gp": "Suzuka",
                    "races": "15",
                    "wins": "4",
                    "poles": "2",
                    "fastestLaps": "3",
                    "podiums": "7",
                    "points": "195",
                    "lapsLed": "181",
                    "kmsLed": "1050"
                },
                {
                    "gp": "Valencia",
                    "races": "5",
                    "wins": "0",
                    "poles": "1",
                    "fastestLaps": "0",
                    "podiums": "3",
                    "points": "46",
                    "lapsLed": "35",
                    "kmsLed": "190"
                },
                {
                    "gp": "Yas Marina",
                    "races": "16",
                    "wins": "5",
                    "poles": "5",
                    "fastestLaps": "3",
                    "podiums": "10",
                    "points": "258",
                    "lapsLed": "319",
                    "kmsLed": "1757"
                },
                {
                    "gp": "Yeongam",
                    "races": "4",
                    "wins": "0",
                    "poles": "1",
                    "fastestLaps": "0",
                    "podiums": "2",
                    "points": "247",
                    "lapsLed": "0",
                    "kmsLed": "0"
                },
                {
                    "gp": "Zandvoort",
                    "races": "4",
                    "wins": "0",
                    "poles": "0",
                    "fastestLaps": "1",
                    "podiums": "1",
                    "points": "43",
                    "lapsLed": "14",
                    "kmsLed": "60"
                },
            ]
        },
        teamsIds: ["1", "2", "3"],
        bio: [
            `Sir Lewis Carl Davidson Hamilton(born 7 January 1985) is a British racing driver who competes in Formula One for Ferrari. Hamilton has won a joint-record seven Formula One World Drivers' Championship titles—tied with Michael Schumacher—and holds the records for most wins (105), pole positions (104), and podium finishes (202), among others.`,
            `Hamilton has been credited with furthering Formula One's global following by appealing to a broader audience outside the sport, in part due to his high-profile lifestyle, amongst his environmental and social activism. He has also become a prominent advocate in support of racial justice and increased diversity in motorsport. Hamilton was listed in the 2020 issue of Time as one of the 100 most influential people globally, and was knighted in the 2021 New Year Honours.`
        ],
        titles: [
            {
                type: TITLES.WDC,
                details: [
                    {
                        constructorId: "constructor_3",
                        year: "2008"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2014"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2015"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2017"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2018"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2019"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2020"
                    },
                ]
            },
            {
                type: TITLES.WCC,
                details: [
                    {
                        constructorId: "constructor_2",
                        year: "2014"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2015"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2016"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2017"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2018"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2019"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2020"
                    },
                    {
                        constructorId: "constructor_2",
                        year: "2021"
                    },
                ]
            }
        ],
        carModelsDriven: [
            {
                constructorId: "constructor_1",
                modelName: "Ferrari SF-25",
                year: "2025"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W15",
                year: "2024"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W14",
                year: "2023"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W13",
                year: "2022"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W12",
                year: "2021"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W11",
                year: "2020"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W10",
                year: "2019"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W09",
                year: "2018"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W08",
                year: "2017"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W07",
                year: "2016"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W06",
                year: "2015"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W05",
                year: "2014"
            },
            {
                constructorId: "constructor_2",
                modelName: "Mercedes F1 W04",
                year: "2013"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-27",
                year: "2013"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-27",
                year: "2012"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-26",
                year: "2011"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-25",
                year: "2010"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-24",
                year: "2009"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-23",
                year: "2008"
            },
            {
                constructorId: "constructor_3",
                modelName: "Mclaren MP4-22",
                year: "2007"
            },
        ]
    }
];