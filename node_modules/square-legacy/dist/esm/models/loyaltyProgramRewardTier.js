import { lazy, number, object, optional, string } from '../schema';
import { catalogObjectReferenceSchema, } from './catalogObjectReference';
import { loyaltyProgramRewardDefinitionSchema, } from './loyaltyProgramRewardDefinition';
export const loyaltyProgramRewardTierSchema = object({
    id: ['id', optional(string())],
    points: ['points', number()],
    name: ['name', optional(string())],
    definition: [
        'definition',
        optional(lazy(() => loyaltyProgramRewardDefinitionSchema)),
    ],
    createdAt: ['created_at', optional(string())],
    pricingRuleReference: [
        'pricing_rule_reference',
        lazy(() => catalogObjectReferenceSchema),
    ],
});
//# sourceMappingURL=loyaltyProgramRewardTier.js.map