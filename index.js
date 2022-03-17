import countryList from "./countryList.js";

const findByCountryCode = (countryCode, plt = true) => {
  if (plt) {
    return countryList.plt.find((item) => item.countryCode === countryCode);
  } else {
    return countryList.edt.find((item) => item.countryCode === countryCode);
  }
};

export default { findByCountryCode };
