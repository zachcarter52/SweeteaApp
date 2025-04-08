"use strict";
exports.__esModule = true;
exports.createDeviceCodeRequestSchema = void 0;
var schema_1 = require("../schema");
var deviceCode_1 = require("./deviceCode");
exports.createDeviceCodeRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    deviceCode: ['device_code', (0, schema_1.lazy)(function () { return deviceCode_1.deviceCodeSchema; })]
});
//# sourceMappingURL=createDeviceCodeRequest.js.map