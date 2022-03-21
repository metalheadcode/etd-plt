declare module "etd-plt" {
    type FindByCountryCode =
        | {
              countryCode: string;
              inBound: boolean;
              outBound: boolean;
          }
        | string;

    type Service = "etd" | "plt";

    export function findByCountryCode(
        countryCode: string,
        service: Service
    ): FindByCountryCode;
}
