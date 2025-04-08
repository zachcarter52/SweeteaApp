"use strict";
exports.__esModule = true;
exports.applicationDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.applicationDetailsSchema = (0, schema_1.object)({
    squareProduct: ['square_product', (0, schema_1.optional)((0, schema_1.string)())],
    applicationId: ['application_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=applicationDetails.js.map