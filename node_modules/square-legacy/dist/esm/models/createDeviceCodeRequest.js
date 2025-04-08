import { lazy, object, string } from '../schema';
import { deviceCodeSchema } from './deviceCode';
export const createDeviceCodeRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    deviceCode: ['device_code', lazy(() => deviceCodeSchema)],
});
//# sourceMappingURL=createDeviceCodeRequest.js.map