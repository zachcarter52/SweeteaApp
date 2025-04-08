import { array, lazy, object, optional } from '../schema';
import { deviceCodeSchema } from './deviceCode';
import { errorSchema } from './error';
export const createDeviceCodeResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    deviceCode: ['device_code', optional(lazy(() => deviceCodeSchema))],
});
//# sourceMappingURL=createDeviceCodeResponse.js.map