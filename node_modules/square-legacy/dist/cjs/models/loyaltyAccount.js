"use strict";
exports.__esModule = true;
exports.loyaltyAccountSchema = void 0;
var schema_1 = require("../schema");
var loyaltyAccountExpiringPointDeadline_1 = require("./loyaltyAccountExpiringPointDeadline");
var loyaltyAccountMapping_1 = require("./loyaltyAccountMapping");
exports.loyaltyAccountSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    programId: ['program_id', (0, schema_1.string)()],
    balance: ['balance', (0, schema_1.optional)((0, schema_1.number)())],
    lifetimePoints: ['lifetime_points', (0, schema_1.optional)((0, schema_1.number)())],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    enrolledAt: ['enrolled_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    mapping: ['mapping', (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyAccountMapping_1.loyaltyAccountMappingSchema; }))],
    expiringPointDeadlines: [
        'expiring_point_deadlines',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return loyaltyAccountExpiringPointDeadline_1.loyaltyAccountExpiringPointDeadlineSchema; })))),
    ]
});
//# sourceMappingURL=loyaltyAccount.js.map