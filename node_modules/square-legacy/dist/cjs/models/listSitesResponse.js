"use strict";
exports.__esModule = true;
exports.listSitesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var site_1 = require("./site");
exports.listSitesResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    sites: ['sites', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return site_1.siteSchema; })))]
});
//# sourceMappingURL=listSitesResponse.js.map