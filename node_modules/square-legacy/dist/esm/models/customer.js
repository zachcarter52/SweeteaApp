import { array, bigint, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { cardSchema } from './card';
import { customerPreferencesSchema, } from './customerPreferences';
import { customerTaxIdsSchema } from './customerTaxIds';
export const customerSchema = object({
    id: ['id', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    cards: ['cards', optional(nullable(array(lazy(() => cardSchema))))],
    givenName: ['given_name', optional(nullable(string()))],
    familyName: ['family_name', optional(nullable(string()))],
    nickname: ['nickname', optional(nullable(string()))],
    companyName: ['company_name', optional(nullable(string()))],
    emailAddress: ['email_address', optional(nullable(string()))],
    address: ['address', optional(lazy(() => addressSchema))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    birthday: ['birthday', optional(nullable(string()))],
    referenceId: ['reference_id', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    preferences: ['preferences', optional(lazy(() => customerPreferencesSchema))],
    creationSource: ['creation_source', optional(string())],
    groupIds: ['group_ids', optional(nullable(array(string())))],
    segmentIds: ['segment_ids', optional(nullable(array(string())))],
    version: ['version', optional(bigint())],
    taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
});
//# sourceMappingURL=customer.js.map