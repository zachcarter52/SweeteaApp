"use strict";
exports.__esModule = true;
exports.listLoyaltyPromotionsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listLoyaltyPromotionsRequestSchema = (0, schema_1.object)({
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listLoyaltyPromotionsRequest.js.map