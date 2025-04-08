import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { vendorContactSchema } from './vendorContact';
export const vendorSchema = object({
    id: ['id', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    name: ['name', optional(nullable(string()))],
    address: ['address', optional(lazy(() => addressSchema))],
    contacts: [
        'contacts',
        optional(nullable(array(lazy(() => vendorContactSchema)))),
    ],
    accountNumber: ['account_number', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    version: ['version', optional(number())],
    status: ['status', optional(string())],
});
//# sourceMappingURL=vendor.js.map