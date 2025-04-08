"use strict";
exports.__esModule = true;
exports.addressSchema = void 0;
var schema_1 = require("../schema");
exports.addressSchema = (0, schema_1.object)({
    addressLine1: ['address_line_1', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    addressLine2: ['address_line_2', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    addressLine3: ['address_line_3', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locality: ['locality', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sublocality: ['sublocality', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sublocality2: ['sublocality_2', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sublocality3: ['sublocality_3', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    administrativeDistrictLevel1: [
        'administrative_district_level_1',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    administrativeDistrictLevel2: [
        'administrative_district_level_2',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    administrativeDistrictLevel3: [
        'administrative_district_level_3',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    postalCode: ['postal_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    country: ['country', (0, schema_1.optional)((0, schema_1.string)())],
    firstName: ['first_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    lastName: ['last_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=address.js.map