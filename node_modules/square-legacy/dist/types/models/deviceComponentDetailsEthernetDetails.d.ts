import { Schema } from '../schema';
export interface DeviceComponentDetailsEthernetDetails {
    /** A boolean to represent whether the Ethernet interface is currently active. */
    active?: boolean | null;
    /** The string representation of the device’s IPv4 address. */
    ipAddressV4?: string | null;
}
export declare const deviceComponentDetailsEthernetDetailsSchema: Schema<DeviceComponentDetailsEthernetDetails>;
