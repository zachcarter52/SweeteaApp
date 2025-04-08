import { nullable, number, object, optional } from '../schema';
export const coordinatesSchema = object({
    latitude: ['latitude', optional(nullable(number()))],
    longitude: ['longitude', optional(nullable(number()))],
});
//# sourceMappingURL=coordinates.js.map