import { Schema } from '../schema';
import { CheckoutLocationSettingsBranding } from './checkoutLocationSettingsBranding';
import { CheckoutLocationSettingsCoupons } from './checkoutLocationSettingsCoupons';
import { CheckoutLocationSettingsPolicy } from './checkoutLocationSettingsPolicy';
import { CheckoutLocationSettingsTipping } from './checkoutLocationSettingsTipping';
export interface CheckoutLocationSettings {
    /** The ID of the location that these settings apply to. */
    locationId?: string | null;
    /** Indicates whether customers are allowed to leave notes at checkout. */
    customerNotesEnabled?: boolean | null;
    /**
     * Policy information is displayed at the bottom of the checkout pages.
     * You can set a maximum of two policies.
     */
    policies?: CheckoutLocationSettingsPolicy[] | null;
    branding?: CheckoutLocationSettingsBranding;
    tipping?: CheckoutLocationSettingsTipping;
    coupons?: CheckoutLocationSettingsCoupons;
    /**
     * The timestamp when the settings were last updated, in RFC 3339 format.
     * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
     * UTC: 2020-01-26T02:25:34Z
     * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
     */
    updatedAt?: string;
}
export declare const checkoutLocationSettingsSchema: Schema<CheckoutLocationSettings>;
