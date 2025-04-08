"use strict";
exports.__esModule = true;
exports.deviceDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.deviceDetailsSchema = (0, schema_1.object)({
    deviceId: ['device_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    deviceInstallationId: [
        'device_installation_id',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    deviceName: ['device_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=deviceDetails.js.map