import { nullable, object, optional, string } from '../schema';
export const rangeSchema = object({
    min: ['min', optional(nullable(string()))],
    max: ['max', optional(nullable(string()))],
});
//# sourceMappingURL=range.js.map