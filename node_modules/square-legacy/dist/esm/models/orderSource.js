import { nullable, object, optional, string } from '../schema';
export const orderSourceSchema = object({
    name: ['name', optional(nullable(string()))],
});
//# sourceMappingURL=orderSource.js.map