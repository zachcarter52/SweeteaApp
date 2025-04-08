import { array, lazy, nullable, object, optional, string, } from '../schema';
import { standardUnitDescriptionSchema, } from './standardUnitDescription';
export const standardUnitDescriptionGroupSchema = object({
    standardUnitDescriptions: [
        'standard_unit_descriptions',
        optional(nullable(array(lazy(() => standardUnitDescriptionSchema)))),
    ],
    languageCode: ['language_code', optional(nullable(string()))],
});
//# sourceMappingURL=standardUnitDescriptionGroup.js.map