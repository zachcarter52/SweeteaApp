import { array, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { refundSchema } from './refund';
import { tenderSchema } from './tender';
export const transactionSchema = object({
    id: ['id', optional(string())],
    locationId: ['location_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    tenders: ['tenders', optional(nullable(array(lazy(() => tenderSchema))))],
    refunds: ['refunds', optional(nullable(array(lazy(() => refundSchema))))],
    referenceId: ['reference_id', optional(nullable(string()))],
    product: ['product', optional(string())],
    clientId: ['client_id', optional(nullable(string()))],
    shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
    orderId: ['order_id', optional(nullable(string()))],
});
//# sourceMappingURL=transaction.js.map