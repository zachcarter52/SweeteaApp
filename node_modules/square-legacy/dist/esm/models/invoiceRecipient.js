import { lazy, nullable, object, optional, string } from '../schema';
import { addressSchema } from './address';
import { invoiceRecipientTaxIdsSchema, } from './invoiceRecipientTaxIds';
export const invoiceRecipientSchema = object({
    customerId: ['customer_id', optional(nullable(string()))],
    givenName: ['given_name', optional(string())],
    familyName: ['family_name', optional(string())],
    emailAddress: ['email_address', optional(string())],
    address: ['address', optional(lazy(() => addressSchema))],
    phoneNumber: ['phone_number', optional(string())],
    companyName: ['company_name', optional(string())],
    taxIds: ['tax_ids', optional(lazy(() => invoiceRecipientTaxIdsSchema))],
});
//# sourceMappingURL=invoiceRecipient.js.map