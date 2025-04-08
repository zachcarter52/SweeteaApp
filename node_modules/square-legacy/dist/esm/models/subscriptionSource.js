import { nullable, object, optional, string } from '../schema';
export const subscriptionSourceSchema = object({
    name: ['name', optional(nullable(string()))],
});
//# sourceMappingURL=subscriptionSource.js.map