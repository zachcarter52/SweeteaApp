import { lazy, object } from '../schema';
import { checkoutLocationSettingsSchema, } from './checkoutLocationSettings';
export const updateLocationSettingsRequestSchema = object({
    locationSettings: [
        'location_settings',
        lazy(() => checkoutLocationSettingsSchema),
    ],
});
//# sourceMappingURL=updateLocationSettingsRequest.js.map