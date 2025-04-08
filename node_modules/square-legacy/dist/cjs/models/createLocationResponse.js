"use strict";
exports.__esModule = true;
exports.createLocationResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var location_1 = require("./location");
exports.createLocationResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    location: ['location', (0, schema_1.optional)((0, schema_1.lazy)(function () { return location_1.locationSchema; }))]
});
//# sourceMappingURL=createLocationResponse.js.map