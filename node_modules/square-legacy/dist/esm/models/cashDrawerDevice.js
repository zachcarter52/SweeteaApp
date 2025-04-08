import { nullable, object, optional, string } from '../schema';
export const cashDrawerDeviceSchema = object({
    id: ['id', optional(string())],
    name: ['name', optional(nullable(string()))],
});
//# sourceMappingURL=cashDrawerDevice.js.map