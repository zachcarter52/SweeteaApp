import { nullable, object, optional, string } from '../schema';
export const deviceComponentDetailsApplicationDetailsSchema = object({
    applicationType: ['application_type', optional(string())],
    version: ['version', optional(string())],
    sessionLocation: ['session_location', optional(nullable(string()))],
    deviceCodeId: ['device_code_id', optional(nullable(string()))],
});
//# sourceMappingURL=deviceComponentDetailsApplicationDetails.js.map