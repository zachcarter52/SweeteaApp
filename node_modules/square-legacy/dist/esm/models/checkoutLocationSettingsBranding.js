import { nullable, object, optional, string } from '../schema';
export const checkoutLocationSettingsBrandingSchema = object({
    headerType: ['header_type', optional(string())],
    buttonColor: ['button_color', optional(nullable(string()))],
    buttonShape: ['button_shape', optional(string())],
});
//# sourceMappingURL=checkoutLocationSettingsBranding.js.map