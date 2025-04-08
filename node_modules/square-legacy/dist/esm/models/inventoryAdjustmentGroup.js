import { object, optional, string } from '../schema';
export const inventoryAdjustmentGroupSchema = object({
    id: ['id', optional(string())],
    rootAdjustmentId: ['root_adjustment_id', optional(string())],
    fromState: ['from_state', optional(string())],
    toState: ['to_state', optional(string())],
});
//# sourceMappingURL=inventoryAdjustmentGroup.js.map