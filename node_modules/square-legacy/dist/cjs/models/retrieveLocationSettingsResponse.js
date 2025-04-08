"use strict";
exports.__esModule = true;
exports.retrieveLocationSettingsResponseSchema = void 0;
var schema_1 = require("../schema");
var checkoutLocationSettings_1 = require("./checkoutLocationSettings");
var error_1 = require("./error");
exports.retrieveLocationSettingsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    locationSettings: [
        'location_settings',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutLocationSettings_1.checkoutLocationSettingsSchema; })),
    ]
});
//# sourceMappingURL=retrieveLocationSettingsResponse.js.map