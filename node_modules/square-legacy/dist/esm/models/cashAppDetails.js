import { nullable, object, optional, string } from '../schema';
export const cashAppDetailsSchema = object({
    buyerFullName: ['buyer_full_name', optional(nullable(string()))],
    buyerCountryCode: ['buyer_country_code', optional(nullable(string()))],
    buyerCashtag: ['buyer_cashtag', optional(string())],
});
//# sourceMappingURL=cashAppDetails.js.map