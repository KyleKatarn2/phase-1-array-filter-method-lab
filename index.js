// Code your solution here
function findMatching(drivers, string) {
    const matchingDrivers = drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase();
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
    const matchingDrivers = drivers.filter(function (driver) {
        return driver.substring(0, string.length) === string; 
    });
    return matchingDrivers;
}

function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(function (driver) {
        return driver.name === name;
    });
    return matchingDrivers;
}