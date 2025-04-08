import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/** Represents a response from upserting order custom attribute definitions. */
export interface UpsertOrderCustomAttributeResponse {
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const upsertOrderCustomAttributeResponseSchema: Schema<UpsertOrderCustomAttributeResponse>;
