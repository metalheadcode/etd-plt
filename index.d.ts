declare module "etd-plt" {
  type FindByCountryCode = {
    countryCode: string;
    inBound: boolean;
    outBound: boolean;
  };

  export function findByCountryCode(
    countryCode: string,
    plt: boolean
  ): FindByCountryCode;
}
