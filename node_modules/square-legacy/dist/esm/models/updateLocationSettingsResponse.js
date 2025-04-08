import { array, lazy, object, optional } from '../schema';
import { checkoutLocationSettingsSchema, } from './checkoutLocationSettings';
import { errorSchema } from './error';
export const updateLocationSettingsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    locationSettings: [
        'location_settings',
        optional(lazy(() => checkoutLocationSettingsSchema)),
    ],
});
//# sourceMappingURL=updateLocationSettingsResponse.js.map