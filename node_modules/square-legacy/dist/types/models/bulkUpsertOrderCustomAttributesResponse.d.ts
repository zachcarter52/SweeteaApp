import { Schema } from '../schema';
import { Error } from './error';
import { UpsertOrderCustomAttributeResponse } from './upsertOrderCustomAttributeResponse';
/** Represents a response from a bulk upsert of order custom attributes. */
export interface BulkUpsertOrderCustomAttributesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** A map of responses that correspond to individual upsert operations for custom attributes. */
    values: Record<string, UpsertOrderCustomAttributeResponse>;
}
export declare const bulkUpsertOrderCustomAttributesResponseSchema: Schema<BulkUpsertOrderCustomAttributesResponse>;
