"use strict";
exports.__esModule = true;
exports.coordinatesSchema = void 0;
var schema_1 = require("../schema");
exports.coordinatesSchema = (0, schema_1.object)({
    latitude: ['latitude', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    longitude: ['longitude', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=coordinates.js.map