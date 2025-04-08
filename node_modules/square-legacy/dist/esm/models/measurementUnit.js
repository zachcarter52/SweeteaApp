import { lazy, object, optional, string } from '../schema';
import { measurementUnitCustomSchema, } from './measurementUnitCustom';
export const measurementUnitSchema = object({
    customUnit: [
        'custom_unit',
        optional(lazy(() => measurementUnitCustomSchema)),
    ],
    areaUnit: ['area_unit', optional(string())],
    lengthUnit: ['length_unit', optional(string())],
    volumeUnit: ['volume_unit', optional(string())],
    weightUnit: ['weight_unit', optional(string())],
    genericUnit: ['generic_unit', optional(string())],
    timeUnit: ['time_unit', optional(string())],
    type: ['type', optional(string())],
});
//# sourceMappingURL=measurementUnit.js.map