import { nullable, number, object, optional, string } from '../schema';
export const deviceComponentDetailsBatteryDetailsSchema = object({
    visiblePercent: ['visible_percent', optional(nullable(number()))],
    externalPower: ['external_power', optional(string())],
});
//# sourceMappingURL=deviceComponentDetailsBatteryDetails.js.map