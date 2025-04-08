import { Schema } from '../schema';
import { BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute } from './bulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute';
/** Represents a bulk delete request for one or more order custom attributes. */
export interface BulkDeleteOrderCustomAttributesRequest {
    /** A map of requests that correspond to individual delete operations for custom attributes. */
    values: Record<string, BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>;
}
export declare const bulkDeleteOrderCustomAttributesRequestSchema: Schema<BulkDeleteOrderCustomAttributesRequest>;
