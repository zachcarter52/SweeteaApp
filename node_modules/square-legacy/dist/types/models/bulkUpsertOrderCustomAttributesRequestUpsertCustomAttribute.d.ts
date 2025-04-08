import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
/** Represents one upsert within the bulk operation. */
export interface BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute {
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute: CustomAttribute;
    /**
     * A unique identifier for this request, used to ensure idempotency.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
    /** The ID of the target [order](entity:Order). */
    orderId: string;
}
export declare const bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema: Schema<BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>;
