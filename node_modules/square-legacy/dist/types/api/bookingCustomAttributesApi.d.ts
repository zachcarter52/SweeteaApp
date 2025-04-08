import { ApiResponse, RequestOptions } from '../core';
import { BulkDeleteBookingCustomAttributesRequest } from '../models/bulkDeleteBookingCustomAttributesRequest';
import { BulkDeleteBookingCustomAttributesResponse } from '../models/bulkDeleteBookingCustomAttributesResponse';
import { BulkUpsertBookingCustomAttributesRequest } from '../models/bulkUpsertBookingCustomAttributesRequest';
import { BulkUpsertBookingCustomAttributesResponse } from '../models/bulkUpsertBookingCustomAttributesResponse';
import { CreateBookingCustomAttributeDefinitionRequest } from '../models/createBookingCustomAttributeDefinitionRequest';
import { CreateBookingCustomAttributeDefinitionResponse } from '../models/createBookingCustomAttributeDefinitionResponse';
import { DeleteBookingCustomAttributeDefinitionResponse } from '../models/deleteBookingCustomAttributeDefinitionResponse';
import { DeleteBookingCustomAttributeResponse } from '../models/deleteBookingCustomAttributeResponse';
import { ListBookingCustomAttributeDefinitionsResponse } from '../models/listBookingCustomAttributeDefinitionsResponse';
import { ListBookingCustomAttributesResponse } from '../models/listBookingCustomAttributesResponse';
import { RetrieveBookingCustomAttributeDefinitionResponse } from '../models/retrieveBookingCustomAttributeDefinitionResponse';
import { RetrieveBookingCustomAttributeResponse } from '../models/retrieveBookingCustomAttributeResponse';
import { UpdateBookingCustomAttributeDefinitionRequest } from '../models/updateBookingCustomAttributeDefinitionRequest';
import { UpdateBookingCustomAttributeDefinitionResponse } from '../models/updateBookingCustomAttributeDefinitionResponse';
import { UpsertBookingCustomAttributeRequest } from '../models/upsertBookingCustomAttributeRequest';
import { UpsertBookingCustomAttributeResponse } from '../models/upsertBookingCustomAttributeResponse';
import { BaseApi } from './baseApi';
export declare class BookingCustomAttributesApi extends BaseApi {
    /**
     * Get all bookings custom attribute definitions.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
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
    listBookingCustomAttributeDefinitions(limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListBookingCustomAttributeDefinitionsResponse>>;
    /**
     * Creates a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to
     *                                                                             POST for the request.  See the
     *                                                                             corresponding object definition for
     *                                                                             field details.
     * @return Response from the API call
     */
    createBookingCustomAttributeDefinition(body: CreateBookingCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateBookingCustomAttributeDefinitionResponse>>;
    /**
     * Deletes a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    deleteBookingCustomAttributeDefinition(key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteBookingCustomAttributeDefinitionResponse>>;
    /**
     * Retrieves a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
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
    retrieveBookingCustomAttributeDefinition(key: string, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveBookingCustomAttributeDefinitionResponse>>;
    /**
     * Updates a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param key          The key of the custom attribute
     *                                                                             definition to update.
     * @param body         An object containing the fields to
     *                                                                             POST for the request.  See the
     *                                                                             corresponding object definition for
     *                                                                             field details.
     * @return Response from the API call
     */
    updateBookingCustomAttributeDefinition(key: string, body: UpdateBookingCustomAttributeDefinitionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateBookingCustomAttributeDefinitionResponse>>;
    /**
     * Bulk deletes bookings custom attributes.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to POST
     *                                                                        for the request.  See the corresponding
     *                                                                        object definition for field details.
     * @return Response from the API call
     */
    bulkDeleteBookingCustomAttributes(body: BulkDeleteBookingCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkDeleteBookingCustomAttributesResponse>>;
    /**
     * Bulk upserts bookings custom attributes.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to POST
     *                                                                        for the request.  See the corresponding
     *                                                                        object definition for field details.
     * @return Response from the API call
     */
    bulkUpsertBookingCustomAttributes(body: BulkUpsertBookingCustomAttributesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpsertBookingCustomAttributesResponse>>;
    /**
     * Lists a booking's custom attributes.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param bookingId        The ID of the target [booking](entity:Booking).
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
    listBookingCustomAttributes(bookingId: string, limit?: number, cursor?: string, withDefinitions?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<ListBookingCustomAttributesResponse>>;
    /**
     * Deletes a bookings custom attribute.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId  The ID of the target [booking](entity:Booking).
     * @param key        The key of the custom attribute to delete. This key must match the `key` of a custom
     *                             attribute definition in the Square seller account. If the requesting application is
     *                             not the definition owner, you must use the qualified key.
     * @return Response from the API call
     */
    deleteBookingCustomAttribute(bookingId: string, key: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteBookingCustomAttributeResponse>>;
    /**
     * Retrieves a bookings custom attribute.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param bookingId       The ID of the target [booking](entity:Booking).
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
    retrieveBookingCustomAttribute(bookingId: string, key: string, withDefinition?: boolean, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveBookingCustomAttributeResponse>>;
    /**
     * Upserts a bookings custom attribute.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId    The ID of the target [booking](entity:Booking).
     * @param key          The key of the custom attribute to create or
     *                                                                   update. This key must match the `key` of a
     *                                                                   custom attribute definition in the Square seller
     *                                                                   account. If the requesting application is not
     *                                                                   the definition owner, you must use the qualified
     *                                                                   key.
     * @param body         An object containing the fields to POST for the
     *                                                                   request.  See the corresponding object
     *                                                                   definition for field details.
     * @return Response from the API call
     */
    upsertBookingCustomAttribute(bookingId: string, key: string, body: UpsertBookingCustomAttributeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpsertBookingCustomAttributeResponse>>;
}
