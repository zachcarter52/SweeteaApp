"use strict";
exports.__esModule = true;
exports.searchSubscriptionsQuerySchema = void 0;
var schema_1 = require("../schema");
var searchSubscriptionsFilter_1 = require("./searchSubscriptionsFilter");
exports.searchSubscriptionsQuerySchema = (0, schema_1.object)({ filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchSubscriptionsFilter_1.searchSubscriptionsFilterSchema; }))] });
//# sourceMappingURL=searchSubscriptionsQuery.js.map