import countryList from "./countryList.js";

const findByCountryCode = (countryCode, service) => {
  if (service === "plt") {
    return countryList.plt.find((item) => item.countryCode === countryCode);
  } else {
    return countryList.etd.find((item) => item.countryCode === countryCode);
  }
};

export default { findByCountryCode };
