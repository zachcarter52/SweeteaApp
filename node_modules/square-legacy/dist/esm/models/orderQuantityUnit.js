import { bigint, lazy, nullable, number, object, optional, string, } from '../schema';
import { measurementUnitSchema } from './measurementUnit';
export const orderQuantityUnitSchema = object({
    measurementUnit: [
        'measurement_unit',
        optional(lazy(() => measurementUnitSchema)),
    ],
    precision: ['precision', optional(nullable(number()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
});
//# sourceMappingURL=orderQuantityUnit.js.map