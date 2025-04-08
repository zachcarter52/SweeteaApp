import { nullable, object, optional, string } from '../schema';
export const customerTaxIdsSchema = object({
    euVat: ['eu_vat', optional(nullable(string()))],
});
//# sourceMappingURL=customerTaxIds.js.map