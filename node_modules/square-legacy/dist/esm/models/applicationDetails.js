import { nullable, object, optional, string } from '../schema';
export const applicationDetailsSchema = object({
    squareProduct: ['square_product', optional(string())],
    applicationId: ['application_id', optional(nullable(string()))],
});
//# sourceMappingURL=applicationDetails.js.map