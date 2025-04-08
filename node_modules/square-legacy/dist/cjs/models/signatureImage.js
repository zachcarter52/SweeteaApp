"use strict";
exports.__esModule = true;
exports.signatureImageSchema = void 0;
var schema_1 = require("../schema");
exports.signatureImageSchema = (0, schema_1.object)({
    imageType: ['image_type', (0, schema_1.optional)((0, schema_1.string)())],
    data: ['data', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=signatureImage.js.map