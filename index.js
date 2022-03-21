import countryList from "./countryList.js";

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const findByCountryCode = (countryCode, service) => {
    if (service === "plt") {
        const result = countryList.plt.find(
            (item) => item.countryCode === countryCode
        );
        return isObjectEmpty(result)
            ? result
            : `The ${countryCode}' is not available for FEDEX`;
    } else {
        const result = countryList.etd.find(
            (item) => item.countryCode === countryCode
        );
        return isObjectEmpty(result)
            ? result
            : `The ${countryCode}' is not available for DHL`;
    }
};

export default { findByCountryCode };
