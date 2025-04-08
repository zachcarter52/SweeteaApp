"use strict";
exports.__esModule = true;
exports.subscriptionEventInfoSchema = void 0;
var schema_1 = require("../schema");
exports.subscriptionEventInfoSchema = (0, schema_1.object)({
    detail: ['detail', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    code: ['code', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=subscriptionEventInfo.js.map