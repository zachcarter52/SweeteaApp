"use strict";
exports.__esModule = true;
exports.v1DeviceSchema = void 0;
var schema_1 = require("../schema");
exports.v1DeviceSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=v1Device.js.map