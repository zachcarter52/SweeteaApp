import { Schema } from '../schema';
export interface CheckoutLocationSettingsBranding {
    headerType?: string;
    /** The HTML-supported hex color for the button on the checkout page (for example, "#FFFFFF"). */
    buttonColor?: string | null;
    buttonShape?: string;
}
export declare const checkoutLocationSettingsBrandingSchema: Schema<CheckoutLocationSettingsBranding>;
