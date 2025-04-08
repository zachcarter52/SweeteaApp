"use strict";
exports.__esModule = true;
exports.updateLocationRequestSchema = void 0;
var schema_1 = require("../schema");
var location_1 = require("./location");
exports.updateLocationRequestSchema = (0, schema_1.object)({ location: ['location', (0, schema_1.optional)((0, schema_1.lazy)(function () { return location_1.locationSchema; }))] });
//# sourceMappingURL=updateLocationRequest.js.map