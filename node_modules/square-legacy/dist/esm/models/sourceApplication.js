import { nullable, object, optional, string } from '../schema';
export const sourceApplicationSchema = object({
    product: ['product', optional(string())],
    applicationId: ['application_id', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
});
//# sourceMappingURL=sourceApplication.js.map