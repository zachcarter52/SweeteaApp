"use strict";
exports.__esModule = true;
exports.qrCodeOptionsSchema = void 0;
var schema_1 = require("../schema");
exports.qrCodeOptionsSchema = (0, schema_1.object)({
    title: ['title', (0, schema_1.string)()],
    body: ['body', (0, schema_1.string)()],
    barcodeContents: ['barcode_contents', (0, schema_1.string)()]
});
//# sourceMappingURL=qrCodeOptions.js.map