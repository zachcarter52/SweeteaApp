import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
/** Represents an upsert request for an order custom attribute. */
export interface UpsertOrderCustomAttributeRequest {
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
}
export declare const upsertOrderCustomAttributeRequestSchema: Schema<UpsertOrderCustomAttributeRequest>;
