import { Schema } from '../schema';
import { DeviceComponentDetailsApplicationDetails } from './deviceComponentDetailsApplicationDetails';
import { DeviceComponentDetailsBatteryDetails } from './deviceComponentDetailsBatteryDetails';
import { DeviceComponentDetailsCardReaderDetails } from './deviceComponentDetailsCardReaderDetails';
import { DeviceComponentDetailsEthernetDetails } from './deviceComponentDetailsEthernetDetails';
import { DeviceComponentDetailsWiFiDetails } from './deviceComponentDetailsWiFiDetails';
/** The wrapper object for the component entries of a given component type. */
export interface Component {
    /** An enum for ComponentType. */
    type: string;
    applicationDetails?: DeviceComponentDetailsApplicationDetails;
    cardReaderDetails?: DeviceComponentDetailsCardReaderDetails;
    batteryDetails?: DeviceComponentDetailsBatteryDetails;
    wifiDetails?: DeviceComponentDetailsWiFiDetails;
    ethernetDetails?: DeviceComponentDetailsEthernetDetails;
}
export declare const componentSchema: Schema<Component>;
