import { array, lazy, nullable, object, optional, string, } from '../schema';
import { loyaltyProgramAccrualRuleSchema, } from './loyaltyProgramAccrualRule';
import { loyaltyProgramExpirationPolicySchema, } from './loyaltyProgramExpirationPolicy';
import { loyaltyProgramRewardTierSchema, } from './loyaltyProgramRewardTier';
import { loyaltyProgramTerminologySchema, } from './loyaltyProgramTerminology';
export const loyaltyProgramSchema = object({
    id: ['id', optional(string())],
    status: ['status', optional(string())],
    rewardTiers: [
        'reward_tiers',
        optional(nullable(array(lazy(() => loyaltyProgramRewardTierSchema)))),
    ],
    expirationPolicy: [
        'expiration_policy',
        optional(lazy(() => loyaltyProgramExpirationPolicySchema)),
    ],
    terminology: [
        'terminology',
        optional(lazy(() => loyaltyProgramTerminologySchema)),
    ],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    accrualRules: [
        'accrual_rules',
        optional(nullable(array(lazy(() => loyaltyProgramAccrualRuleSchema)))),
    ],
});
//# sourceMappingURL=loyaltyProgram.js.map