import { nullable, number, object, optional } from '../schema';
export const listMerchantsRequestSchema = object({
    cursor: ['cursor', optional(nullable(number()))],
});
//# sourceMappingURL=listMerchantsRequest.js.map