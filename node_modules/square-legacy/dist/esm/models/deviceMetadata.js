import { nullable, object, optional, string } from '../schema';
export const deviceMetadataSchema = object({
    batteryPercentage: ['battery_percentage', optional(nullable(string()))],
    chargingState: ['charging_state', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    merchantId: ['merchant_id', optional(nullable(string()))],
    networkConnectionType: [
        'network_connection_type',
        optional(nullable(string())),
    ],
    paymentRegion: ['payment_region', optional(nullable(string()))],
    serialNumber: ['serial_number', optional(nullable(string()))],
    osVersion: ['os_version', optional(nullable(string()))],
    appVersion: ['app_version', optional(nullable(string()))],
    wifiNetworkName: ['wifi_network_name', optional(nullable(string()))],
    wifiNetworkStrength: ['wifi_network_strength', optional(nullable(string()))],
    ipAddress: ['ip_address', optional(nullable(string()))],
});
//# sourceMappingURL=deviceMetadata.js.map