import { Schema } from '../schema';
import { CustomAttributeDefinition } from './customAttributeDefinition';
/** Represents an [UpdateCustomerCustomAttributeDefinition]($e/CustomerCustomAttributes/UpdateCustomerCustomAttributeDefinition) request. */
export interface UpdateCustomerCustomAttributeDefinitionRequest {
    /**
     * Represents a definition for custom attribute values. A custom attribute definition
     * specifies the key, visibility, schema, and other properties for a custom attribute.
     */
    customAttributeDefinition: CustomAttributeDefinition;
    /**
     * A unique identifier for this request, used to ensure idempotency. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
export declare const updateCustomerCustomAttributeDefinitionRequestSchema: Schema<UpdateCustomerCustomAttributeDefinitionRequest>;
