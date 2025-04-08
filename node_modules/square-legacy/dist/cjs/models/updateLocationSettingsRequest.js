"use strict";
exports.__esModule = true;
exports.updateLocationSettingsRequestSchema = void 0;
var schema_1 = require("../schema");
var checkoutLocationSettings_1 = require("./checkoutLocationSettings");
exports.updateLocationSettingsRequestSchema = (0, schema_1.object)({
    locationSettings: [
        'location_settings',
        (0, schema_1.lazy)(function () { return checkoutLocationSettings_1.checkoutLocationSettingsSchema; }),
    ]
});
//# sourceMappingURL=updateLocationSettingsRequest.js.map