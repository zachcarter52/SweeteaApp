import { lazy, object, optional, string } from '../schema';
import { addressSchema } from './address';
import { customerTaxIdsSchema } from './customerTaxIds';
export const createCustomerRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    givenName: ['given_name', optional(string())],
    familyName: ['family_name', optional(string())],
    companyName: ['company_name', optional(string())],
    nickname: ['nickname', optional(string())],
    emailAddress: ['email_address', optional(string())],
    address: ['address', optional(lazy(() => addressSchema))],
    phoneNumber: ['phone_number', optional(string())],
    referenceId: ['reference_id', optional(string())],
    note: ['note', optional(string())],
    birthday: ['birthday', optional(string())],
    taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
});
//# sourceMappingURL=createCustomerRequest.js.map