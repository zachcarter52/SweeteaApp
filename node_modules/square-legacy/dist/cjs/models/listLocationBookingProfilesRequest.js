"use strict";
exports.__esModule = true;
exports.listLocationBookingProfilesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listLocationBookingProfilesRequestSchema = (0, schema_1.object)({
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listLocationBookingProfilesRequest.js.map