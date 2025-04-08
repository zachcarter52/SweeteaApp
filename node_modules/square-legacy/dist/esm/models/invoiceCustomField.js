import { nullable, object, optional, string } from '../schema';
export const invoiceCustomFieldSchema = object({
    label: ['label', optional(nullable(string()))],
    value: ['value', optional(nullable(string()))],
    placement: ['placement', optional(string())],
});
//# sourceMappingURL=invoiceCustomField.js.map