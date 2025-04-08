import { lazy, object, optional, string } from '../schema';
import { customerTextFilterSchema, } from './customerTextFilter';
export const customerAddressFilterSchema = object({
    postalCode: ['postal_code', optional(lazy(() => customerTextFilterSchema))],
    country: ['country', optional(string())],
});
//# sourceMappingURL=customerAddressFilter.js.map