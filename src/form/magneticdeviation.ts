export const deviation = (lat: string, lon: string): number => {
    var geomagnetism = require('geomagnetism');
    var info = geomagnetism.model().point([parseFloat(lat), parseFloat(lon)]);
    return -parseFloat(info.decl);
};

export const calculateDeviation = (
    magneticDeclination: number,
    trueHeading: string,
    isWest: boolean
) => {
    if (magneticDeclination !== 0) {
        if (isWest) {
            let magneticHeading = parseFloat(trueHeading) - magneticDeclination;
            magneticHeading =
                magneticHeading < 0 ? magneticHeading + 360 : magneticHeading;
            return magneticHeading;
        }
        let magneticHeading = parseFloat(trueHeading) + magneticDeclination;
        magneticHeading =
            magneticHeading > 360 ? magneticHeading - 360 : magneticHeading;
        return magneticHeading;
    }
    return parseFloat(trueHeading);
};
