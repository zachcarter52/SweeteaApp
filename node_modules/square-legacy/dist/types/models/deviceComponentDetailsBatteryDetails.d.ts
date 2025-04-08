import { Schema } from '../schema';
export interface DeviceComponentDetailsBatteryDetails {
    /** The battery charge percentage as displayed on the device. */
    visiblePercent?: number | null;
    /** An enum for ExternalPower. */
    externalPower?: string;
}
export declare const deviceComponentDetailsBatteryDetailsSchema: Schema<DeviceComponentDetailsBatteryDetails>;
