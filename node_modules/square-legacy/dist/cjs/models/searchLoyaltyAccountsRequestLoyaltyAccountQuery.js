"use strict";
exports.__esModule = true;
exports.searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema = void 0;
var schema_1 = require("../schema");
var loyaltyAccountMapping_1 = require("./loyaltyAccountMapping");
exports.searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema = (0, schema_1.object)({
    mappings: [
        'mappings',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return loyaltyAccountMapping_1.loyaltyAccountMappingSchema; })))),
    ],
    customerIds: ['customer_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=searchLoyaltyAccountsRequestLoyaltyAccountQuery.js.map