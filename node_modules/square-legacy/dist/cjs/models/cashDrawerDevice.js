"use strict";
exports.__esModule = true;
exports.cashDrawerDeviceSchema = void 0;
var schema_1 = require("../schema");
exports.cashDrawerDeviceSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=cashDrawerDevice.js.map