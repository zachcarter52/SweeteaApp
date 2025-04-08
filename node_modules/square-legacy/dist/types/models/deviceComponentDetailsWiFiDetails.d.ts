import { Schema } from '../schema';
import { DeviceComponentDetailsMeasurement } from './deviceComponentDetailsMeasurement';
export interface DeviceComponentDetailsWiFiDetails {
    /** A boolean to represent whether the WiFI interface is currently active. */
    active?: boolean | null;
    /** The name of the connected WIFI network. */
    ssid?: string | null;
    /** The string representation of the device’s IPv4 address. */
    ipAddressV4?: string | null;
    /**
     * The security protocol for a secure connection (e.g. WPA2). None provided if the connection
     * is unsecured.
     */
    secureConnection?: string | null;
    /** A value qualified by unit of measure. */
    signalStrength?: DeviceComponentDetailsMeasurement;
}
export declare const deviceComponentDetailsWiFiDetailsSchema: Schema<DeviceComponentDetailsWiFiDetails>;
