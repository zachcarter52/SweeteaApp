import { boolean, nullable, number, object, optional, string, } from '../schema';
export const vendorContactSchema = object({
    id: ['id', optional(string())],
    name: ['name', optional(nullable(string()))],
    emailAddress: ['email_address', optional(nullable(string()))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    removed: ['removed', optional(nullable(boolean()))],
    ordinal: ['ordinal', number()],
});
//# sourceMappingURL=vendorContact.js.map