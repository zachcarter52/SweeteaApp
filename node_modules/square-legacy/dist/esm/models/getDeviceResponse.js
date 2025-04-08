import { array, lazy, object, optional } from '../schema';
import { deviceSchema } from './device';
import { errorSchema } from './error';
export const getDeviceResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    device: ['device', optional(lazy(() => deviceSchema))],
});
//# sourceMappingURL=getDeviceResponse.js.map