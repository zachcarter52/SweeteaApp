import { Schema } from '../schema';
import { CheckoutLocationSettings } from './checkoutLocationSettings';
import { Error } from './error';
export interface UpdateLocationSettingsResponse {
    /** Any errors that occurred when updating the location settings. */
    errors?: Error[];
    locationSettings?: CheckoutLocationSettings;
}
export declare const updateLocationSettingsResponseSchema: Schema<UpdateLocationSettingsResponse>;
