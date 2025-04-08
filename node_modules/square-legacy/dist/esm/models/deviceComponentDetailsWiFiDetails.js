import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { deviceComponentDetailsMeasurementSchema, } from './deviceComponentDetailsMeasurement';
export const deviceComponentDetailsWiFiDetailsSchema = object({
    active: ['active', optional(nullable(boolean()))],
    ssid: ['ssid', optional(nullable(string()))],
    ipAddressV4: ['ip_address_v4', optional(nullable(string()))],
    secureConnection: ['secure_connection', optional(nullable(string()))],
    signalStrength: [
        'signal_strength',
        optional(lazy(() => deviceComponentDetailsMeasurementSchema)),
    ],
});
//# sourceMappingURL=deviceComponentDetailsWiFiDetails.js.map