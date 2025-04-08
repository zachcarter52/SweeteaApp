import { lazy, nullable, object, optional, string } from '../schema';
import { measurementUnitSchema } from './measurementUnit';
export const standardUnitDescriptionSchema = object({
    unit: ['unit', optional(lazy(() => measurementUnitSchema))],
    name: ['name', optional(nullable(string()))],
    abbreviation: ['abbreviation', optional(nullable(string()))],
});
//# sourceMappingURL=standardUnitDescription.js.map