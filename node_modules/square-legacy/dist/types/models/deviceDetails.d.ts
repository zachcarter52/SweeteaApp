import { Schema } from '../schema';
/** Details about the device that took the payment. */
export interface DeviceDetails {
    /** The Square-issued ID of the device. */
    deviceId?: string | null;
    /** The Square-issued installation ID for the device. */
    deviceInstallationId?: string | null;
    /** The name of the device set by the seller. */
    deviceName?: string | null;
}
export declare const deviceDetailsSchema: Schema<DeviceDetails>;
