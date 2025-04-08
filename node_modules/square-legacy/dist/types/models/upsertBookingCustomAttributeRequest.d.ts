import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
/** Represents an [UpsertBookingCustomAttribute]($e/BookingCustomAttributes/UpsertBookingCustomAttribute) request. */
export interface UpsertBookingCustomAttributeRequest {
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute: CustomAttribute;
    /**
     * A unique identifier for this request, used to ensure idempotency. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
export declare const upsertBookingCustomAttributeRequestSchema: Schema<UpsertBookingCustomAttributeRequest>;
