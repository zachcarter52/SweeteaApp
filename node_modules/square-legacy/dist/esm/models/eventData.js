import { boolean, dict, nullable, object, optional, string, unknown, } from '../schema';
export const eventDataSchema = object({
    type: ['type', optional(nullable(string()))],
    id: ['id', optional(string())],
    deleted: ['deleted', optional(nullable(boolean()))],
    object: ['object', optional(nullable(dict(unknown())))],
});
//# sourceMappingURL=eventData.js.map