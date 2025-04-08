import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { checkoutLocationSettingsBrandingSchema, } from './checkoutLocationSettingsBranding';
import { checkoutLocationSettingsCouponsSchema, } from './checkoutLocationSettingsCoupons';
import { checkoutLocationSettingsPolicySchema, } from './checkoutLocationSettingsPolicy';
import { checkoutLocationSettingsTippingSchema, } from './checkoutLocationSettingsTipping';
export const checkoutLocationSettingsSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    customerNotesEnabled: [
        'customer_notes_enabled',
        optional(nullable(boolean())),
    ],
    policies: [
        'policies',
        optional(nullable(array(lazy(() => checkoutLocationSettingsPolicySchema)))),
    ],
    branding: [
        'branding',
        optional(lazy(() => checkoutLocationSettingsBrandingSchema)),
    ],
    tipping: [
        'tipping',
        optional(lazy(() => checkoutLocationSettingsTippingSchema)),
    ],
    coupons: [
        'coupons',
        optional(lazy(() => checkoutLocationSettingsCouponsSchema)),
    ],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=checkoutLocationSettings.js.map