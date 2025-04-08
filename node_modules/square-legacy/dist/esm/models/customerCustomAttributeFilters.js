import { array, lazy, nullable, object, optional } from '../schema';
import { customerCustomAttributeFilterSchema, } from './customerCustomAttributeFilter';
export const customerCustomAttributeFiltersSchema = object({
    filters: [
        'filters',
        optional(nullable(array(lazy(() => customerCustomAttributeFilterSchema)))),
    ],
});
//# sourceMappingURL=customerCustomAttributeFilters.js.map