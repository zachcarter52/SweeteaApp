import { bigint, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { customerTaxIdsSchema } from './customerTaxIds';
export const updateCustomerRequestSchema = object({
    givenName: ['given_name', optional(nullable(string()))],
    familyName: ['family_name', optional(nullable(string()))],
    companyName: ['company_name', optional(nullable(string()))],
    nickname: ['nickname', optional(nullable(string()))],
    emailAddress: ['email_address', optional(nullable(string()))],
    address: ['address', optional(lazy(() => addressSchema))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    referenceId: ['reference_id', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    birthday: ['birthday', optional(nullable(string()))],
    version: ['version', optional(bigint())],
    taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
});
//# sourceMappingURL=updateCustomerRequest.js.map