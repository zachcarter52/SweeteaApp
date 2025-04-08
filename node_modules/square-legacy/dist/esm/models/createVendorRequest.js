import { lazy, object, optional, string } from '../schema';
import { vendorSchema } from './vendor';
export const createVendorRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    vendor: ['vendor', optional(lazy(() => vendorSchema))],
});
//# sourceMappingURL=createVendorRequest.js.map