import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/** Represents a response from getting an order custom attribute. */
export interface RetrieveOrderCustomAttributeResponse {
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveOrderCustomAttributeResponseSchema: Schema<RetrieveOrderCustomAttributeResponse>;
