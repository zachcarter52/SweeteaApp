"use strict";
exports.__esModule = true;
exports.searchAvailabilityQuerySchema = void 0;
var schema_1 = require("../schema");
var searchAvailabilityFilter_1 = require("./searchAvailabilityFilter");
exports.searchAvailabilityQuerySchema = (0, schema_1.object)({ filter: ['filter', (0, schema_1.lazy)(function () { return searchAvailabilityFilter_1.searchAvailabilityFilterSchema; })] });
//# sourceMappingURL=searchAvailabilityQuery.js.map