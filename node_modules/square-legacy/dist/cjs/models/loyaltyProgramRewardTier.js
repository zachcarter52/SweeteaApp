"use strict";
exports.__esModule = true;
exports.loyaltyProgramRewardTierSchema = void 0;
var schema_1 = require("../schema");
var catalogObjectReference_1 = require("./catalogObjectReference");
var loyaltyProgramRewardDefinition_1 = require("./loyaltyProgramRewardDefinition");
exports.loyaltyProgramRewardTierSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    points: ['points', (0, schema_1.number)()],
    name: ['name', (0, schema_1.optional)((0, schema_1.string)())],
    definition: [
        'definition',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyProgramRewardDefinition_1.loyaltyProgramRewardDefinitionSchema; })),
    ],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    pricingRuleReference: [
        'pricing_rule_reference',
        (0, schema_1.lazy)(function () { return catalogObjectReference_1.catalogObjectReferenceSchema; }),
    ]
});
//# sourceMappingURL=loyaltyProgramRewardTier.js.map