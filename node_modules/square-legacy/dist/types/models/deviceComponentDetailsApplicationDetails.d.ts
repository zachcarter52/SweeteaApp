import { Schema } from '../schema';
export interface DeviceComponentDetailsApplicationDetails {
    applicationType?: string;
    /** The version of the application. */
    version?: string;
    /** The location_id of the session for the application. */
    sessionLocation?: string | null;
    /** The id of the device code that was used to log in to the device. */
    deviceCodeId?: string | null;
}
export declare const deviceComponentDetailsApplicationDetailsSchema: Schema<DeviceComponentDetailsApplicationDetails>;
