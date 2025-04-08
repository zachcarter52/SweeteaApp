import { ApiResponse, RequestOptions } from '../core';
import { BulkDeleteMerchantCustomAttributesRequest } from '../models/bulkDeleteMerchantCustomAttributesRequest';
import { BulkDeleteMerchantCustomAttributesResponse } from '../models/bulkDeleteMerchantCustomAttributesResponse';
import { BulkUpsertMerchantCustomAttributesRequest } from '../models/bulkUpsertMerchantCustomAttributesRequest';
import { BulkUpsertMerchantCustomAttributesResponse } from '../models/bulkUpsertMerchantCustomAttributesResponse';
import { CreateMerchantCustomAttributeDefinitionRequest } from '../models/createMerchantCustomAttributeDefinitionRequest';
import { CreateMerchantCustomAttributeDefinitionResponse } from '../models/createMerchantCustomAttributeDefinitionResponse';
import { DeleteMerchantCustomAttributeDefinitionResponse } from '../models/deleteMerchantCustomAttributeDefinitionResponse';
import { DeleteMerchantCustomAttributeResponse } from '../models/deleteMerchantCustomAttributeResponse';
import { ListMerchantCustomAttributeDefinitionsResponse } from '../models/listMerchantCustomAttributeDefinitionsResponse';
import { ListMerchantCustomAttributesResponse } from '../models/listMerchantCustomAttributesResponse';
import { RetrieveMerchantCustomAttributeDefinitionResponse } from '../models/retrieveMerchantCustomAttributeDefinitionResponse';
import { RetrieveMerchantCustomAttributeResponse } from '../models/retrieveMerchantCustomAttributeResponse';
import { UpdateMerchantCustomAttributeDefinitionRequest } from '../models/updateMerchantCustomAttributeDefinitionRequest';
import { UpdateMerchantCustomAttributeDefinitionResponse } from '../models/updateMerchantCustomAttributeDefinitionResponse';
import { UpsertMerchantCustomAttributeRequest } from '../models/upsertMerchantCustomAttributeRequest';
import { UpsertMerchantCustomAttributeResponse } from '../models/upsertMerchantCustomAttributeResponse';
import { BaseApi } from './baseApi';
export declare class MerchantCustomAttributesApi extends BaseApi {
    /**
     * Lists the merchant-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong
     * to a Square seller account.
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param visibilityFilter  Filters the `CustomAttributeDefinition` results by their `visibility` values.
     * @param limit             The maximum number of results to return in a single paged response. This limit
     *                                    is advisory. The response might contain more or fewer results. The minimum
     *                                    value is 1 and the maximum value is 100. The default value is 20. For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                    basics/common-api-patterns/pagination).
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                    endpoint. Provide this cursor to retrieve the next page of results for your
     *                                    original request. For more information, see [Pagination](https://developer.
     *                                    squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    listMerchantCustomAttributeDefinitions(visibilityFilter?: string, limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListMerchantCustomAttributeDefinitionsResponse>>;
    /**
     * Creates a merchant-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     * Use this endpoint to define a custom attribute that can be associated with a merchant connecting to
     * your application.
     * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
     * for a custom attribute. After the definition is created, you can call
     * [UpsertMerchantCustomAttribute]($e/MerchantCustomAttributes/UpsertMerchantCustomAttribute) or
     * [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes)
     * to set the custom attribute for a merchant.
     *
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    createMerchantCustomAttributeDefinition(body: CreateMerchantCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateMerchantCustomAttributeDefinitionResponse>>;
    /**
     * Deletes a merchant-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     * Deleting a custom attribute definition also deletes the corresponding custom attribute from
     * the merchant.
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    deleteMerchantCustomAttributeDefinition(key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteMerchantCustomAttributeDefinitionResponse>>;
    /**
     * Retrieves a merchant-related [custom attribute definition]($m/CustomAttributeDefinition) from a
     * Square seller account.
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
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
    retrieveMerchantCustomAttributeDefinition(key: string, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveMerchantCustomAttributeDefinitionResponse>>;
    /**
     * Updates a merchant-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
     * `schema` for a `Selection` data type.
     * Only the definition owner can update a custom attribute definition.
     *
     * @param key          The key of the custom attribute
     *                                                                              definition to update.
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    updateMerchantCustomAttributeDefinition(key: string, body: UpdateMerchantCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateMerchantCustomAttributeDefinitionResponse>>;
    /**
     * Deletes [custom attributes]($m/CustomAttribute) for a merchant as a bulk operation.
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    bulkDeleteMerchantCustomAttributes(body: BulkDeleteMerchantCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkDeleteMerchantCustomAttributesResponse>>;
    /**
     * Creates or updates [custom attributes]($m/CustomAttribute) for a merchant as a bulk operation.
     * Use this endpoint to set the value of one or more custom attributes for a merchant.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which is
     * created using the
     * [CreateMerchantCustomAttributeDefinition]($e/MerchantCustomAttributes/CreateMerchantCustomAttributeD
     * efinition) endpoint.
     * This `BulkUpsertMerchantCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides a merchant ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    bulkUpsertMerchantCustomAttributes(body: BulkUpsertMerchantCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpsertMerchantCustomAttributesResponse>>;
    /**
     * Lists the [custom attributes]($m/CustomAttribute) associated with a merchant.
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param merchantId        The ID of the target [merchant](entity:Merchant).
     * @param visibilityFilter  Filters the `CustomAttributeDefinition` results by their `visibility` values.
     * @param limit             The maximum number of results to return in a single paged response. This
     *                                     limit is advisory. The response might contain more or fewer results. The
     *                                     minimum value is 1 and the maximum value is 100. The default value is 20. For
     *                                     more information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                     basics/common-api-patterns/pagination).
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                     endpoint. Provide this cursor to retrieve the next page of results for your
     *                                     original request. For more information, see [Pagination](https://developer.
     *                                     squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param withDefinitions   Indicates whether to return the [custom attribute definition](entity:
     *                                     CustomAttributeDefinition) in the `definition` field of each custom attribute.
     *                                     Set this parameter to `true` to get the name and description of each custom
     *                                     attribute, information about the data type, or other definition details. The
     *                                     default value is `false`.
     * @return Response from the API call
     */
    listMerchantCustomAttributes(merchantId: string, visibilityFilter?: string, limit?: number, cursor?: string, withDefinitions?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<ListMerchantCustomAttributesResponse>>;
    /**
     * Deletes a [custom attribute]($m/CustomAttribute) associated with a merchant.
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param merchantId  The ID of the target [merchant](entity:Merchant).
     * @param key         The key of the custom attribute to delete. This key must match the `key` of a custom
     *                              attribute definition in the Square seller account. If the requesting application is
     *                              not the definition owner, you must use the qualified key.
     * @return Response from the API call
     */
    deleteMerchantCustomAttribute(merchantId: string, key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteMerchantCustomAttributeResponse>>;
    /**
     * Retrieves a [custom attribute]($m/CustomAttribute) associated with a merchant.
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param merchantId      The ID of the target [merchant](entity:Merchant).
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
    retrieveMerchantCustomAttribute(merchantId: string, key: string, withDefinition?: boolean, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveMerchantCustomAttributeResponse>>;
    /**
     * Creates or updates a [custom attribute]($m/CustomAttribute) for a merchant.
     * Use this endpoint to set the value of a custom attribute for a specified merchant.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which
     * is created using the
     * [CreateMerchantCustomAttributeDefinition]($e/MerchantCustomAttributes/CreateMerchantCustomAttributeD
     * efinition) endpoint.
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param merchantId   The ID of the target [merchant](entity:
     *                                                                    Merchant).
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
    upsertMerchantCustomAttribute(merchantId: string, key: string, body: UpsertMerchantCustomAttributeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpsertMerchantCustomAttributeResponse>>;
}
