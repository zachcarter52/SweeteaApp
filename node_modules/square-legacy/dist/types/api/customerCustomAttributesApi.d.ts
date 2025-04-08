import { ApiResponse, RequestOptions } from '../core';
import { BulkUpsertCustomerCustomAttributesRequest } from '../models/bulkUpsertCustomerCustomAttributesRequest';
import { BulkUpsertCustomerCustomAttributesResponse } from '../models/bulkUpsertCustomerCustomAttributesResponse';
import { CreateCustomerCustomAttributeDefinitionRequest } from '../models/createCustomerCustomAttributeDefinitionRequest';
import { CreateCustomerCustomAttributeDefinitionResponse } from '../models/createCustomerCustomAttributeDefinitionResponse';
import { DeleteCustomerCustomAttributeDefinitionResponse } from '../models/deleteCustomerCustomAttributeDefinitionResponse';
import { DeleteCustomerCustomAttributeResponse } from '../models/deleteCustomerCustomAttributeResponse';
import { ListCustomerCustomAttributeDefinitionsResponse } from '../models/listCustomerCustomAttributeDefinitionsResponse';
import { ListCustomerCustomAttributesResponse } from '../models/listCustomerCustomAttributesResponse';
import { RetrieveCustomerCustomAttributeDefinitionResponse } from '../models/retrieveCustomerCustomAttributeDefinitionResponse';
import { RetrieveCustomerCustomAttributeResponse } from '../models/retrieveCustomerCustomAttributeResponse';
import { UpdateCustomerCustomAttributeDefinitionRequest } from '../models/updateCustomerCustomAttributeDefinitionRequest';
import { UpdateCustomerCustomAttributeDefinitionResponse } from '../models/updateCustomerCustomAttributeDefinitionResponse';
import { UpsertCustomerCustomAttributeRequest } from '../models/upsertCustomerCustomAttributeRequest';
import { UpsertCustomerCustomAttributeResponse } from '../models/upsertCustomerCustomAttributeResponse';
import { BaseApi } from './baseApi';
export declare class CustomerCustomAttributesApi extends BaseApi {
    /**
     * Lists the customer-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong
     * to a Square seller account.
     *
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
     * seller-defined custom attributes (also known as custom fields) are always set to
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param limit  The maximum number of results to return in a single paged response. This limit is
     *                         advisory. The response might contain more or fewer results. The minimum value is 1 and the
     *                         maximum value is 100. The default value is 20. For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param cursor The cursor returned in the paged response from the previous call to this endpoint.
     *                         Provide this cursor to retrieve the next page of results for your original request. For
     *                         more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                         api-patterns/pagination).
     * @return Response from the API call
     */
    listCustomerCustomAttributeDefinitions(limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomerCustomAttributeDefinitionsResponse>>;
    /**
     * Creates a customer-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     * Use this endpoint to define a custom attribute that can be associated with customer profiles.
     *
     * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
     * for a custom attribute. After the definition is created, you can call
     * [UpsertCustomerCustomAttribute]($e/CustomerCustomAttributes/UpsertCustomerCustomAttribute) or
     * [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes)
     * to set the custom attribute for customer profiles in the seller's Customer Directory.
     *
     * Sellers can view all custom attributes in exported customer data, including those set to
     * `VISIBILITY_HIDDEN`.
     *
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    createCustomerCustomAttributeDefinition(body: CreateCustomerCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerCustomAttributeDefinitionResponse>>;
    /**
     * Deletes a customer-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     *
     * Deleting a custom attribute definition also deletes the corresponding custom attribute from
     * all customer profiles in the seller's Customer Directory.
     *
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    deleteCustomerCustomAttributeDefinition(key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerCustomAttributeDefinitionResponse>>;
    /**
     * Retrieves a customer-related [custom attribute definition]($m/CustomAttributeDefinition) from a
     * Square seller account.
     *
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined
     * custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param key     The key of the custom attribute definition to retrieve. If the requesting application is
     *                          not the definition owner, you must use the qualified key.
     * @param version The current version of the custom attribute definition, which is used for strongly
     *                          consistent reads to guarantee that you receive the most up-to-date data. When included in
     *                          the request, Square returns the specified version or a higher version if one exists. If
     *                          the specified version is higher than the current version, Square returns a `BAD_REQUEST`
     *                          error.
     * @return Response from the API call
     */
    retrieveCustomerCustomAttributeDefinition(key: string, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerCustomAttributeDefinitionResponse>>;
    /**
     * Updates a customer-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     *
     * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
     * `schema` for a `Selection` data type.
     *
     * Only the definition owner can update a custom attribute definition. Note that sellers can view
     * all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
     *
     * @param key          The key of the custom attribute
     *                                                                              definition to update.
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    updateCustomerCustomAttributeDefinition(key: string, body: UpdateCustomerCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateCustomerCustomAttributeDefinitionResponse>>;
    /**
     * Creates or updates [custom attributes]($m/CustomAttribute) for customer profiles as a bulk operation.
     *
     * Use this endpoint to set the value of one or more custom attributes for one or more customer
     * profiles.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which is
     * created using the
     * [CreateCustomerCustomAttributeDefinition]($e/CustomerCustomAttributes/CreateCustomerCustomAttributeD
     * efinition) endpoint.
     *
     * This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides a customer ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    bulkUpsertCustomerCustomAttributes(body: BulkUpsertCustomerCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpsertCustomerCustomAttributesResponse>>;
    /**
     * Lists the [custom attributes]($m/CustomAttribute) associated with a customer profile.
     *
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     *
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId       The ID of the target [customer profile](entity:Customer).
     * @param limit            The maximum number of results to return in a single paged response. This limit
     *                                    is advisory. The response might contain more or fewer results. The minimum
     *                                    value is 1 and the maximum value is 100. The default value is 20. For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                    basics/common-api-patterns/pagination).
     * @param cursor           The cursor returned in the paged response from the previous call to this
     *                                    endpoint. Provide this cursor to retrieve the next page of results for your
     *                                    original request. For more information, see [Pagination](https://developer.
     *                                    squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param withDefinitions  Indicates whether to return the [custom attribute definition](entity:
     *                                    CustomAttributeDefinition) in the `definition` field of each custom attribute.
     *                                    Set this parameter to `true` to get the name and description of each custom
     *                                    attribute, information about the data type, or other definition details. The
     *                                    default value is `false`.
     * @return Response from the API call
     */
    listCustomerCustomAttributes(customerId: string, limit?: number, cursor?: string, withDefinitions?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomerCustomAttributesResponse>>;
    /**
     * Deletes a [custom attribute]($m/CustomAttribute) associated with a customer profile.
     *
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId  The ID of the target [customer profile](entity:Customer).
     * @param key         The key of the custom attribute to delete. This key must match the `key` of a custom
     *                              attribute definition in the Square seller account. If the requesting application is
     *                              not the definition owner, you must use the qualified key.
     * @return Response from the API call
     */
    deleteCustomerCustomAttribute(customerId: string, key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerCustomAttributeResponse>>;
    /**
     * Retrieves a [custom attribute]($m/CustomAttribute) associated with a customer profile.
     *
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     *
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
     * attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId      The ID of the target [customer profile](entity:Customer).
     * @param key             The key of the custom attribute to retrieve. This key must match the `key` of a
     *                                   custom attribute definition in the Square seller account. If the requesting
     *                                   application is not the definition owner, you must use the qualified key.
     * @param withDefinition  Indicates whether to return the [custom attribute definition](entity:
     *                                   CustomAttributeDefinition) in the `definition` field of the custom attribute.
     *                                   Set this parameter to `true` to get the name and description of the custom
     *                                   attribute, information about the data type, or other definition details. The
     *                                   default value is `false`.
     * @param version         The current version of the custom attribute, which is used for strongly
     *                                   consistent reads to guarantee that you receive the most up-to-date data. When
     *                                   included in the request, Square returns the specified version or a higher
     *                                   version if one exists. If the specified version is higher than the current
     *                                   version, Square returns a `BAD_REQUEST` error.
     * @return Response from the API call
     */
    retrieveCustomerCustomAttribute(customerId: string, key: string, withDefinition?: boolean, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerCustomAttributeResponse>>;
    /**
     * Creates or updates a [custom attribute]($m/CustomAttribute) for a customer profile.
     *
     * Use this endpoint to set the value of a custom attribute for a specified customer profile.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which
     * is created using the
     * [CreateCustomerCustomAttributeDefinition]($e/CustomerCustomAttributes/CreateCustomerCustomAttributeD
     * efinition) endpoint.
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId   The ID of the target [customer profile](entity:
     *                                                                    Customer).
     * @param key          The key of the custom attribute to create or
     *                                                                    update. This key must match the `key` of a
     *                                                                    custom attribute definition in the Square
     *                                                                    seller account. If the requesting application
     *                                                                    is not the definition owner, you must use the
     *                                                                    qualified key.
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     */
    upsertCustomerCustomAttribute(customerId: string, key: string, body: UpsertCustomerCustomAttributeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpsertCustomerCustomAttributeResponse>>;
}
