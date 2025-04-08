import { lazy, object, optional, string } from '../schema';
import { deviceComponentDetailsApplicationDetailsSchema, } from './deviceComponentDetailsApplicationDetails';
import { deviceComponentDetailsBatteryDetailsSchema, } from './deviceComponentDetailsBatteryDetails';
import { deviceComponentDetailsCardReaderDetailsSchema, } from './deviceComponentDetailsCardReaderDetails';
import { deviceComponentDetailsEthernetDetailsSchema, } from './deviceComponentDetailsEthernetDetails';
import { deviceComponentDetailsWiFiDetailsSchema, } from './deviceComponentDetailsWiFiDetails';
export const componentSchema = object({
    type: ['type', string()],
    applicationDetails: [
        'application_details',
        optional(lazy(() => deviceComponentDetailsApplicationDetailsSchema)),
    ],
    cardReaderDetails: [
        'card_reader_details',
        optional(lazy(() => deviceComponentDetailsCardReaderDetailsSchema)),
    ],
    batteryDetails: [
        'battery_details',
        optional(lazy(() => deviceComponentDetailsBatteryDetailsSchema)),
    ],
    wifiDetails: [
        'wifi_details',
        optional(lazy(() => deviceComponentDetailsWiFiDetailsSchema)),
    ],
    ethernetDetails: [
        'ethernet_details',
        optional(lazy(() => deviceComponentDetailsEthernetDetailsSchema)),
    ],
});
//# sourceMappingURL=component.js.map