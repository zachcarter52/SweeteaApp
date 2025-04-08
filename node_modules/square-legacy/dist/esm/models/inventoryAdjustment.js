import { lazy, nullable, object, optional, string } from '../schema';
import { inventoryAdjustmentGroupSchema, } from './inventoryAdjustmentGroup';
import { moneySchema } from './money';
import { sourceApplicationSchema, } from './sourceApplication';
export const inventoryAdjustmentSchema = object({
    id: ['id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
    fromState: ['from_state', optional(string())],
    toState: ['to_state', optional(string())],
    locationId: ['location_id', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogObjectType: ['catalog_object_type', optional(nullable(string()))],
    quantity: ['quantity', optional(nullable(string()))],
    totalPriceMoney: ['total_price_money', optional(lazy(() => moneySchema))],
    occurredAt: ['occurred_at', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    source: ['source', optional(lazy(() => sourceApplicationSchema))],
    employeeId: ['employee_id', optional(nullable(string()))],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    transactionId: ['transaction_id', optional(string())],
    refundId: ['refund_id', optional(string())],
    purchaseOrderId: ['purchase_order_id', optional(string())],
    goodsReceiptId: ['goods_receipt_id', optional(string())],
    adjustmentGroup: [
        'adjustment_group',
        optional(lazy(() => inventoryAdjustmentGroupSchema)),
    ],
});
//# sourceMappingURL=inventoryAdjustment.js.map