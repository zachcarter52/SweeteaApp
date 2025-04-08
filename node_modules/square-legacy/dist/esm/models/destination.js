import { object, optional, string } from '../schema';
export const destinationSchema = object({
    type: ['type', optional(string())],
    id: ['id', optional(string())],
});
//# sourceMappingURL=destination.js.map