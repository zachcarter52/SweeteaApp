"use strict";
exports.__esModule = true;
exports.inventoryAdjustmentSchema = void 0;
var schema_1 = require("../schema");
var inventoryAdjustmentGroup_1 = require("./inventoryAdjustmentGroup");
var money_1 = require("./money");
var sourceApplication_1 = require("./sourceApplication");
exports.inventoryAdjustmentSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    fromState: ['from_state', (0, schema_1.optional)((0, schema_1.string)())],
    toState: ['to_state', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectType: ['catalog_object_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    quantity: ['quantity', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    totalPriceMoney: ['total_price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    occurredAt: ['occurred_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    source: ['source', (0, schema_1.optional)((0, schema_1.lazy)(function () { return sourceApplication_1.sourceApplicationSchema; }))],
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    transactionId: ['transaction_id', (0, schema_1.optional)((0, schema_1.string)())],
    refundId: ['refund_id', (0, schema_1.optional)((0, schema_1.string)())],
    purchaseOrderId: ['purchase_order_id', (0, schema_1.optional)((0, schema_1.string)())],
    goodsReceiptId: ['goods_receipt_id', (0, schema_1.optional)((0, schema_1.string)())],
    adjustmentGroup: [
        'adjustment_group',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return inventoryAdjustmentGroup_1.inventoryAdjustmentGroupSchema; })),
    ]
});
//# sourceMappingURL=inventoryAdjustment.js.map