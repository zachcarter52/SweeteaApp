import { array, lazy, object, optional, string } from '../schema';
import { deviceCodeSchema } from './deviceCode';
import { errorSchema } from './error';
export const listDeviceCodesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    deviceCodes: [
        'device_codes',
        optional(array(lazy(() => deviceCodeSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listDeviceCodesResponse.js.map