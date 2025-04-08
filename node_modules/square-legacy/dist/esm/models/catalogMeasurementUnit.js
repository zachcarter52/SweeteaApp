import { lazy, nullable, number, object, optional } from '../schema';
import { measurementUnitSchema } from './measurementUnit';
export const catalogMeasurementUnitSchema = object({
    measurementUnit: [
        'measurement_unit',
        optional(lazy(() => measurementUnitSchema)),
    ],
    precision: ['precision', optional(nullable(number()))],
});
//# sourceMappingURL=catalogMeasurementUnit.js.map