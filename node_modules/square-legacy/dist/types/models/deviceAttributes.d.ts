import { Schema } from '../schema';
export interface DeviceAttributes {
    /** An enum identifier of the device type. */
    type: string;
    /** The maker of the device. */
    manufacturer: string;
    /** The specific model of the device. */
    model?: string | null;
    /** A seller-specified name for the device. */
    name?: string | null;
    /**
     * The manufacturer-supplied identifier for the device (where available). In many cases,
     * this identifier will be a serial number.
     */
    manufacturersId?: string | null;
    /**
     * The RFC 3339-formatted value of the most recent update to the device information.
     * (Could represent any field update on the device.)
     */
    updatedAt?: string;
    /** The current version of software installed on the device. */
    version?: string;
    /** The merchant_token identifying the merchant controlling the device. */
    merchantToken?: string | null;
}
export declare const deviceAttributesSchema: Schema<DeviceAttributes>;
