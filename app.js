let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollars) => {
    return dollars * (oneEuroIs.JPY * 1.2);
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };