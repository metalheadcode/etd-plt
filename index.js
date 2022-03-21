import countryList from "./countryList.js";

const findByCountryCode = (countryCode, service) => {
    if (service === "plt") {
        const result = countryList.plt.find(
            (item) => item.countryCode === countryCode
        );
        return result !== undefined
            ? result
            : { info: `The ${countryCode} is not available for DHL` };
    } else if (service === "etd") {
        const result = countryList.etd.find(
            (item) => item.countryCode === countryCode
        );
        return result !== undefined
            ? result
            : { info: `The ${countryCode} is not available for FEDEX` };
    }
};

export default { findByCountryCode };
