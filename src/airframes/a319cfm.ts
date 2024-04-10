import { Airframe } from './airframes.h';

export const a319cfm: Airframe = {
    name: 'A319CFM',
    Engines: 'CFM56',
    MTOW: 76500,
    OEW: 42262,
    MLW: 62500,
    ISAIncrease: 15,
    Trim: {
        MinCG: 18,
        MaxCG: 41,
        MinTrim: -2.5,
        MaxTrim: 3.8,
    },
    Takeoff: {
        RotateISA: 130,
        WeightReferenceISA: [46000, 70000, 80000],
        TakeoffDistanceTable: [1150, 1640, 2870],
        TakeoffDistanceTableISA: [1160, 1650, 3500],
        AltitudeAdjustment: 100,
        TMAXFlex: 60,
        TREFAICE: 30,
        ThrustMultiplier: 10033,
        FlapsMultiplier: [10, 1e-7, -5],
        TakeoffRef2Alt2000: 1950,
        TakeoffRef2Alt4000: 2200,
        TakeoffRef2Alt6000: 2450,
        TakeoffRef2Alt8000: 3000,
    },
    Landing: {
        WeightReferenceISA: [45359, 54431, 63503],
        DistanceReferenceISA: [1051, 1220, 1445],
        FlapsMultiplier: [1, 1.2, 1.15, 1.1],
        RunwayConditionMultiplier: [0, 0.15],
        AltitudeCorrectionTable: [2000, 4000, 6000, 8000, 10000],
        StopDistanceDiffs: [55, 55, 60, 134, 121],
    },
    VSpeeds: {
        // VSpeeds[Flaps][Weight] ; HZSIM A319
        '1': {
            // Conf 1+F
            '35': 126,
            '40': 126,
            '45': 126,
            '50': 126,
            '55': 127,
            '60': 132,
            '65': 137,
            '70': 142,
            '75': 147,
            '80': 151,
        },
        '2': {
            // Conf 2
            '35': 126,
            '40': 126,
            '45': 126,
            '50': 126,
            '55': 126,
            '60': 127,
            '65': 132,
            '70': 137,
            '75': 141,
            '80': 146,
        },
        '3': {
            // Conf 3
            '35': 125,
            '40': 125,
            '45': 125,
            '50': 125,
            '55': 125,
            '60': 125,
            '65': 128,
            '70': 132,
            '75': 137,
            '80': 141,
        },
    },
};
