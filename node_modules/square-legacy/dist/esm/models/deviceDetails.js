import { nullable, object, optional, string } from '../schema';
export const deviceDetailsSchema = object({
    deviceId: ['device_id', optional(nullable(string()))],
    deviceInstallationId: [
        'device_installation_id',
        optional(nullable(string())),
    ],
    deviceName: ['device_name', optional(nullable(string()))],
});
//# sourceMappingURL=deviceDetails.js.map