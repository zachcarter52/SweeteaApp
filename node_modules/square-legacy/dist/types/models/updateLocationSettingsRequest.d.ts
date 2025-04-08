import { Schema } from '../schema';
import { CheckoutLocationSettings } from './checkoutLocationSettings';
export interface UpdateLocationSettingsRequest {
    locationSettings: CheckoutLocationSettings;
}
export declare const updateLocationSettingsRequestSchema: Schema<UpdateLocationSettingsRequest>;
