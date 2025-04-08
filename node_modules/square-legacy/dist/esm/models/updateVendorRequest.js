import { lazy, nullable, object, optional, string } from '../schema';
import { vendorSchema } from './vendor';
export const updateVendorRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
    vendor: ['vendor', lazy(() => vendorSchema)],
});
//# sourceMappingURL=updateVendorRequest.js.map