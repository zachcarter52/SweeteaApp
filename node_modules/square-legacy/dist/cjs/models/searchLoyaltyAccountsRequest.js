"use strict";
exports.__esModule = true;
exports.searchLoyaltyAccountsRequestSchema = void 0;
var schema_1 = require("../schema");
var searchLoyaltyAccountsRequestLoyaltyAccountQuery_1 = require("./searchLoyaltyAccountsRequestLoyaltyAccountQuery");
exports.searchLoyaltyAccountsRequestSchema = (0, schema_1.object)({
    query: [
        'query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchLoyaltyAccountsRequestLoyaltyAccountQuery_1.searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema; })),
    ],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchLoyaltyAccountsRequest.js.map