"use strict";
exports.__esModule = true;
exports.listDevicesResponseSchema = void 0;
var schema_1 = require("../schema");
var device_1 = require("./device");
var error_1 = require("./error");
exports.listDevicesResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    devices: ['devices', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return device_1.deviceSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listDevicesResponse.js.map