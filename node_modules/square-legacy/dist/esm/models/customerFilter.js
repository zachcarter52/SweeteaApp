import { lazy, object, optional } from '../schema';
import { customerCreationSourceFilterSchema, } from './customerCreationSourceFilter';
import { customerCustomAttributeFiltersSchema, } from './customerCustomAttributeFilters';
import { customerTextFilterSchema, } from './customerTextFilter';
import { filterValueSchema } from './filterValue';
import { timeRangeSchema } from './timeRange';
export const customerFilterSchema = object({
    creationSource: [
        'creation_source',
        optional(lazy(() => customerCreationSourceFilterSchema)),
    ],
    createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
    updatedAt: ['updated_at', optional(lazy(() => timeRangeSchema))],
    emailAddress: [
        'email_address',
        optional(lazy(() => customerTextFilterSchema)),
    ],
    phoneNumber: ['phone_number', optional(lazy(() => customerTextFilterSchema))],
    referenceId: ['reference_id', optional(lazy(() => customerTextFilterSchema))],
    groupIds: ['group_ids', optional(lazy(() => filterValueSchema))],
    customAttribute: [
        'custom_attribute',
        optional(lazy(() => customerCustomAttributeFiltersSchema)),
    ],
    segmentIds: ['segment_ids', optional(lazy(() => filterValueSchema))],
});
//# sourceMappingURL=customerFilter.js.map