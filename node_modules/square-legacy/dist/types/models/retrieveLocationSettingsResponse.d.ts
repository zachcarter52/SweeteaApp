import { Schema } from '../schema';
import { CheckoutLocationSettings } from './checkoutLocationSettings';
import { Error } from './error';
export interface RetrieveLocationSettingsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    locationSettings?: CheckoutLocationSettings;
}
export declare const retrieveLocationSettingsResponseSchema: Schema<RetrieveLocationSettingsResponse>;
