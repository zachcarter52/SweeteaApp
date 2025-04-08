import { Schema } from '../schema';
import { CheckoutMerchantSettings } from './checkoutMerchantSettings';
export interface UpdateMerchantSettingsRequest {
    merchantSettings: CheckoutMerchantSettings;
}
export declare const updateMerchantSettingsRequestSchema: Schema<UpdateMerchantSettingsRequest>;
