import { Schema } from '../schema';
import { CheckoutMerchantSettings } from './checkoutMerchantSettings';
import { Error } from './error';
export interface UpdateMerchantSettingsResponse {
    /** Any errors that occurred when updating the merchant settings. */
    errors?: Error[];
    merchantSettings?: CheckoutMerchantSettings;
}
export declare const updateMerchantSettingsResponseSchema: Schema<UpdateMerchantSettingsResponse>;
