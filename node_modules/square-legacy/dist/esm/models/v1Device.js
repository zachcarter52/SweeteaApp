import { nullable, object, optional, string } from '../schema';
export const v1DeviceSchema = object({
    id: ['id', optional(string())],
    name: ['name', optional(nullable(string()))],
});
//# sourceMappingURL=v1Device.js.map