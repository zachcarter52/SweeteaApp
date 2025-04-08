import { ApiResponse, RequestOptions } from '../core';
import { BulkDeleteOrderCustomAttributesRequest } from '../models/bulkDeleteOrderCustomAttributesRequest';
import { BulkDeleteOrderCustomAttributesResponse } from '../models/bulkDeleteOrderCustomAttributesResponse';
import { BulkUpsertOrderCustomAttributesRequest } from '../models/bulkUpsertOrderCustomAttributesRequest';
import { BulkUpsertOrderCustomAttributesResponse } from '../models/bulkUpsertOrderCustomAttributesResponse';
import { CreateOrderCustomAttributeDefinitionRequest } from '../models/createOrderCustomAttributeDefinitionRequest';
import { CreateOrderCustomAttributeDefinitionResponse } from '../models/createOrderCustomAttributeDefinitionResponse';
import { DeleteOrderCustomAttributeDefinitionResponse } from '../models/deleteOrderCustomAttributeDefinitionResponse';
import { DeleteOrderCustomAttributeResponse } from '../models/deleteOrderCustomAttributeResponse';
import { ListOrderCustomAttributeDefinitionsResponse } from '../models/listOrderCustomAttributeDefinitionsResponse';
import { ListOrderCustomAttributesResponse } from '../models/listOrderCustomAttributesResponse';
import { RetrieveOrderCustomAttributeDefinitionResponse } from '../models/retrieveOrderCustomAttributeDefinitionResponse';
import { RetrieveOrderCustomAttributeResponse } from '../models/retrieveOrderCustomAttributeResponse';
import { UpdateOrderCustomAttributeDefinitionRequest } from '../models/updateOrderCustomAttributeDefinitionRequest';
import { UpdateOrderCustomAttributeDefinitionResponse } from '../models/updateOrderCustomAttributeDefinitionResponse';
import { UpsertOrderCustomAttributeRequest } from '../models/upsertOrderCustomAttributeRequest';
import { UpsertOrderCustomAttributeResponse } from '../models/upsertOrderCustomAttributeResponse';
import { BaseApi } from './baseApi';
export declare class OrderCustomAttributesApi extends BaseApi {
    /**
     * Lists the order-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong to
     * a Square seller account.
     *
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
     * seller-defined custom attributes (also known as custom fields) are always set to
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param visibilityFilter  Requests that all of the custom attributes be returned, or only those that are
     *                                    read-only or read-write.
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                    endpoint.  Provide this cursor to retrieve the next page of results for your
     *                                    original request.  For more information, see [Pagination](https://developer.
     *                                    squareup.com/docs/working-with-apis/pagination).
     * @param limit             The maximum number of results to return in a single paged response. This limit
     *                                    is advisory.  The response might contain more or fewer results. The minimum
     *                                    value is 1 and the maximum value is 100.  The default value is 20. For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/working-with-
     *                                    apis/pagination).
     * @return Response from the API call
     */
    listOrderCustomAttributeDefinitions(visibilityFilter?: string, cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListOrderCustomAttributeDefinitionsResponse>>;
    /**
     * Creates an order-related custom attribute definition.  Use this endpoint to
     * define a custom attribute that can be associated with orders.
     *
     * After creating a custom attribute definition, you can set the custom attribute for orders
     * in the Square seller account.
     *
     * @param body         An object containing the fields to POST
     *                                                                           for the request.  See the corresponding
     *                                                                           object definition for field details.
     * @return Response from the API call
     */
    createOrderCustomAttributeDefinition(body: CreateOrderCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateOrderCustomAttributeDefinitionResponse>>;
    /**
     * Deletes an order-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     *
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    deleteOrderCustomAttributeDefinition(key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteOrderCustomAttributeDefinitionResponse>>;
    /**
     * Retrieves an order-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     *
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined
     * custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param key     The key of the custom attribute definition to retrieve.
     * @param version To enable [optimistic concurrency](https://developer.squareup.com/docs/build-
     *                          basics/common-api-patterns/optimistic-concurrency) control, include this optional field
     *                          and specify the current version of the custom attribute.
     * @return Response from the API call
     */
    retrieveOrderCustomAttributeDefinition(key: string, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveOrderCustomAttributeDefinitionResponse>>;
    /**
     * Updates an order-related custom attribute definition for a Square seller account.
     *
     * Only the definition owner can update a custom attribute definition. Note that sellers can view all
     * custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
     *
     * @param key          The key of the custom attribute
     *                                                                           definition to update.
     * @param body         An object containing the fields to POST
     *                                                                           for the request.  See the corresponding
     *                                                                           object definition for field details.
     * @return Response from the API call
     */
    updateOrderCustomAttributeDefinition(key: string, body: UpdateOrderCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateOrderCustomAttributeDefinitionResponse>>;
    /**
     * Deletes order [custom attributes]($m/CustomAttribute) as a bulk operation.
     *
     * Use this endpoint to delete one or more custom attributes from one or more orders.
     * A custom attribute is based on a custom attribute definition in a Square seller account.  (To create
     * a
     * custom attribute definition, use the
     * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
     * ) endpoint.)
     *
     * This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete
     * requests and returns a map of individual delete responses. Each delete request has a unique ID
     * and provides an order ID and custom attribute. Each delete response is returned with the ID
     * of the corresponding request.
     *
     * To delete a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST for
     *                                                                      the request.  See the corresponding object
     *                                                                      definition for field details.
     * @return Response from the API call
     */
    bulkDeleteOrderCustomAttributes(body: BulkDeleteOrderCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkDeleteOrderCustomAttributesResponse>>;
    /**
     * Creates or updates order [custom attributes]($m/CustomAttribute) as a bulk operation.
     *
     * Use this endpoint to delete one or more custom attributes from one or more orders.
     * A custom attribute is based on a custom attribute definition in a Square seller account.  (To create
     * a
     * custom attribute definition, use the
     * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
     * ) endpoint.)
     *
     * This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides an order ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST for
     *                                                                      the request.  See the corresponding object
     *                                                                      definition for field details.
     * @return Response from the API call
     */
    bulkUpsertOrderCustomAttributes(body: BulkUpsertOrderCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpsertOrderCustomAttributesResponse>>;
    /**
     * Lists the [custom attributes]($m/CustomAttribute) associated with an order.
     *
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     *
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId           The ID of the target [order](entity:Order).
     * @param visibilityFilter  Requests that all of the custom attributes be returned, or only those that
     *                                     are read-only or read-write.
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                     endpoint.  Provide this cursor to retrieve the next page of results for your
     *                                     original request.  For more information, see [Pagination](https://developer.
     *                                     squareup.com/docs/working-with-apis/pagination).
     * @param limit             The maximum number of results to return in a single paged response. This
     *                                     limit is advisory.  The response might contain more or fewer results. The
     *                                     minimum value is 1 and the maximum value is 100.  The default value is 20. For
     *                                     more information, see [Pagination](https://developer.squareup.com/docs/working-
     *                                     with-apis/pagination).
     * @param withDefinitions   Indicates whether to return the [custom attribute definition](entity:
     *                                     CustomAttributeDefinition) in the `definition` field of each custom attribute.
     *                                     Set this parameter to `true` to get the name and description of each custom
     *                                     attribute,  information about the data type, or other definition details. The
     *                                     default value is `false`.
     * @return Response from the API call
     */
    listOrderCustomAttributes(orderId: string, visibilityFilter?: string, cursor?: string, limit?: number, withDefinitions?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<ListOrderCustomAttributesResponse>>;
    /**
     * Deletes a [custom attribute]($m/CustomAttribute) associated with a customer profile.
     *
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId              The ID of the target [order](entity:Order).
     * @param customAttributeKey   The key of the custom attribute to delete.  This key must match the key of
     *                                       an existing custom attribute definition.
     * @return Response from the API call
     */
    deleteOrderCustomAttribute(orderId: string, customAttributeKey: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteOrderCustomAttributeResponse>>;
    /**
     * Retrieves a [custom attribute]($m/CustomAttribute) associated with an order.
     *
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     *
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
     * attributes
     * also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId              The ID of the target [order](entity:Order).
     * @param customAttributeKey   The key of the custom attribute to retrieve.  This key must match the key
     *                                        of an existing custom attribute definition.
     * @param version              To enable [optimistic concurrency](https://developer.squareup.
     *                                        com/docs/build-basics/common-api-patterns/optimistic-concurrency) control,
     *                                        include this optional field and specify the current version of the custom
     *                                        attribute.
     * @param withDefinition       Indicates whether to return the [custom attribute definition](entity:
     *                                        CustomAttributeDefinition) in the `definition` field of each  custom
     *                                        attribute. Set this parameter to `true` to get the name and description of
     *                                        each custom attribute,  information about the data type, or other
     *                                        definition details. The default value is `false`.
     * @return Response from the API call
     */
    retrieveOrderCustomAttribute(orderId: string, customAttributeKey: string, version?: number, withDefinition?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveOrderCustomAttributeResponse>>;
    /**
     * Creates or updates a [custom attribute]($m/CustomAttribute) for an order.
     *
     * Use this endpoint to set the value of a custom attribute for a specific order.
     * A custom attribute is based on a custom attribute definition in a Square seller account. (To create
     * a
     * custom attribute definition, use the
     * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
     * ) endpoint.)
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId              The ID of the target [order](entity:
     *                                                                         Order).
     * @param customAttributeKey   The key of the custom attribute to create
     *                                                                         or update.  This key must match the key
     *                                                                         of an existing custom attribute definition.
     * @param body                 An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    upsertOrderCustomAttribute(orderId: string, customAttributeKey: string, body: UpsertOrderCustomAttributeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpsertOrderCustomAttributeResponse>>;
}
