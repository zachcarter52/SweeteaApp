import { nullable, object, optional, string } from '../schema';
export const catalogEcomSeoDataSchema = object({
    pageTitle: ['page_title', optional(nullable(string()))],
    pageDescription: ['page_description', optional(nullable(string()))],
    permalink: ['permalink', optional(nullable(string()))],
});
//# sourceMappingURL=catalogEcomSeoData.js.map