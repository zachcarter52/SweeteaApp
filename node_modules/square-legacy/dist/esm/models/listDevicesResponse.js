import { array, lazy, object, optional, string } from '../schema';
import { deviceSchema } from './device';
import { errorSchema } from './error';
export const listDevicesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    devices: ['devices', optional(array(lazy(() => deviceSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listDevicesResponse.js.map