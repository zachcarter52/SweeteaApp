import { array, lazy, object, optional } from '../schema';
import { catalogInfoResponseLimitsSchema, } from './catalogInfoResponseLimits';
import { errorSchema } from './error';
import { standardUnitDescriptionGroupSchema, } from './standardUnitDescriptionGroup';
export const catalogInfoResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    limits: ['limits', optional(lazy(() => catalogInfoResponseLimitsSchema))],
    standardUnitDescriptionGroup: [
        'standard_unit_description_group',
        optional(lazy(() => standardUnitDescriptionGroupSchema)),
    ],
});
//# sourceMappingURL=catalogInfoResponse.js.map