"use strict";
exports.__esModule = true;
exports.catalogEcomSeoDataSchema = void 0;
var schema_1 = require("../schema");
exports.catalogEcomSeoDataSchema = (0, schema_1.object)({
    pageTitle: ['page_title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    pageDescription: ['page_description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    permalink: ['permalink', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=catalogEcomSeoData.js.map