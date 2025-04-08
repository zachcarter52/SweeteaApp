import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { loyaltyAccountExpiringPointDeadlineSchema, } from './loyaltyAccountExpiringPointDeadline';
import { loyaltyAccountMappingSchema, } from './loyaltyAccountMapping';
export const loyaltyAccountSchema = object({
    id: ['id', optional(string())],
    programId: ['program_id', string()],
    balance: ['balance', optional(number())],
    lifetimePoints: ['lifetime_points', optional(number())],
    customerId: ['customer_id', optional(nullable(string()))],
    enrolledAt: ['enrolled_at', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    mapping: ['mapping', optional(lazy(() => loyaltyAccountMappingSchema))],
    expiringPointDeadlines: [
        'expiring_point_deadlines',
        optional(nullable(array(lazy(() => loyaltyAccountExpiringPointDeadlineSchema)))),
    ],
});
//# sourceMappingURL=loyaltyAccount.js.map