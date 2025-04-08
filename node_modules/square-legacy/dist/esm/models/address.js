import { nullable, object, optional, string } from '../schema';
export const addressSchema = object({
    addressLine1: ['address_line_1', optional(nullable(string()))],
    addressLine2: ['address_line_2', optional(nullable(string()))],
    addressLine3: ['address_line_3', optional(nullable(string()))],
    locality: ['locality', optional(nullable(string()))],
    sublocality: ['sublocality', optional(nullable(string()))],
    sublocality2: ['sublocality_2', optional(nullable(string()))],
    sublocality3: ['sublocality_3', optional(nullable(string()))],
    administrativeDistrictLevel1: [
        'administrative_district_level_1',
        optional(nullable(string())),
    ],
    administrativeDistrictLevel2: [
        'administrative_district_level_2',
        optional(nullable(string())),
    ],
    administrativeDistrictLevel3: [
        'administrative_district_level_3',
        optional(nullable(string())),
    ],
    postalCode: ['postal_code', optional(nullable(string()))],
    country: ['country', optional(string())],
    firstName: ['first_name', optional(nullable(string()))],
    lastName: ['last_name', optional(nullable(string()))],
});
//# sourceMappingURL=address.js.map