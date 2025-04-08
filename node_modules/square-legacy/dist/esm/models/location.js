import { array, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { businessHoursSchema } from './businessHours';
import { coordinatesSchema } from './coordinates';
import { taxIdsSchema } from './taxIds';
export const locationSchema = object({
    id: ['id', optional(string())],
    name: ['name', optional(nullable(string()))],
    address: ['address', optional(lazy(() => addressSchema))],
    timezone: ['timezone', optional(nullable(string()))],
    capabilities: ['capabilities', optional(array(string()))],
    status: ['status', optional(string())],
    createdAt: ['created_at', optional(string())],
    merchantId: ['merchant_id', optional(string())],
    country: ['country', optional(string())],
    languageCode: ['language_code', optional(nullable(string()))],
    currency: ['currency', optional(string())],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    businessName: ['business_name', optional(nullable(string()))],
    type: ['type', optional(string())],
    websiteUrl: ['website_url', optional(nullable(string()))],
    businessHours: ['business_hours', optional(lazy(() => businessHoursSchema))],
    businessEmail: ['business_email', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    twitterUsername: ['twitter_username', optional(nullable(string()))],
    instagramUsername: ['instagram_username', optional(nullable(string()))],
    facebookUrl: ['facebook_url', optional(nullable(string()))],
    coordinates: ['coordinates', optional(lazy(() => coordinatesSchema))],
    logoUrl: ['logo_url', optional(string())],
    posBackgroundUrl: ['pos_background_url', optional(string())],
    mcc: ['mcc', optional(nullable(string()))],
    fullFormatLogoUrl: ['full_format_logo_url', optional(string())],
    taxIds: ['tax_ids', optional(lazy(() => taxIdsSchema))],
});
//# sourceMappingURL=location.js.map