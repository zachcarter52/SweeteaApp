import { Schema } from '../schema';
import { CheckoutMerchantSettings } from './checkoutMerchantSettings';
import { Error } from './error';
export interface RetrieveMerchantSettingsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    merchantSettings?: CheckoutMerchantSettings;
}
export declare const retrieveMerchantSettingsResponseSchema: Schema<RetrieveMerchantSettingsResponse>;
