import { Schema } from '../schema';
import { FilterValue } from './filterValue';
/** A query filter to search for buyer-accessible appointment segments by. */
export interface SegmentFilter {
    /** The ID of the [CatalogItemVariation](entity:CatalogItemVariation) object representing the service booked in this segment. */
    serviceVariationId: string;
    /**
     * A filter to select resources based on an exact field value. For any given
     * value, the value can only be in one property. Depending on the field, either
     * all properties can be set or only a subset will be available.
     * Refer to the documentation of the field.
     */
    teamMemberIdFilter?: FilterValue;
}
export declare const segmentFilterSchema: Schema<SegmentFilter>;
