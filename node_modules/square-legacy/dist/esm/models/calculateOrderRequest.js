import { array, lazy, nullable, object, optional } from '../schema';
import { orderSchema } from './order';
import { orderRewardSchema } from './orderReward';
export const calculateOrderRequestSchema = object({
    order: ['order', lazy(() => orderSchema)],
    proposedRewards: [
        'proposed_rewards',
        optional(nullable(array(lazy(() => orderRewardSchema)))),
    ],
});
//# sourceMappingURL=calculateOrderRequest.js.map