import { lazy, object, optional, string } from '../schema';
import { filterValueSchema } from './filterValue';
export const segmentFilterSchema = object({
    serviceVariationId: ['service_variation_id', string()],
    teamMemberIdFilter: [
        'team_member_id_filter',
        optional(lazy(() => filterValueSchema)),
    ],
});
//# sourceMappingURL=segmentFilter.js.map