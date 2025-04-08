"use strict";
exports.__esModule = true;
exports.deviceComponentDetailsBatteryDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.deviceComponentDetailsBatteryDetailsSchema = (0, schema_1.object)({
    visiblePercent: ['visible_percent', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    externalPower: ['external_power', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=deviceComponentDetailsBatteryDetails.js.map