import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents a [DeleteBookingCustomAttributeDefinition]($e/BookingCustomAttributes/DeleteBookingCustomAttributeDefinition) response
 * containing error messages when errors occurred during the request. The successful response does not contain any payload.
 */
export interface DeleteBookingCustomAttributeDefinitionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteBookingCustomAttributeDefinitionResponseSchema: Schema<DeleteBookingCustomAttributeDefinitionResponse>;
