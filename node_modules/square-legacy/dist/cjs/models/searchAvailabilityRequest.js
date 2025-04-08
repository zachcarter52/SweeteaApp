"use strict";
exports.__esModule = true;
exports.searchAvailabilityRequestSchema = void 0;
var schema_1 = require("../schema");
var searchAvailabilityQuery_1 = require("./searchAvailabilityQuery");
exports.searchAvailabilityRequestSchema = (0, schema_1.object)({ query: ['query', (0, schema_1.lazy)(function () { return searchAvailabilityQuery_1.searchAvailabilityQuerySchema; })] });
//# sourceMappingURL=searchAvailabilityRequest.js.map