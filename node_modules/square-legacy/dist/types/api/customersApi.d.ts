import { ApiResponse, RequestOptions } from '../core';
import { AddGroupToCustomerResponse } from '../models/addGroupToCustomerResponse';
import { BulkCreateCustomersRequest } from '../models/bulkCreateCustomersRequest';
import { BulkCreateCustomersResponse } from '../models/bulkCreateCustomersResponse';
import { BulkDeleteCustomersRequest } from '../models/bulkDeleteCustomersRequest';
import { BulkDeleteCustomersResponse } from '../models/bulkDeleteCustomersResponse';
import { BulkRetrieveCustomersRequest } from '../models/bulkRetrieveCustomersRequest';
import { BulkRetrieveCustomersResponse } from '../models/bulkRetrieveCustomersResponse';
import { BulkUpdateCustomersRequest } from '../models/bulkUpdateCustomersRequest';
import { BulkUpdateCustomersResponse } from '../models/bulkUpdateCustomersResponse';
import { CreateCustomerCardRequest } from '../models/createCustomerCardRequest';
import { CreateCustomerCardResponse } from '../models/createCustomerCardResponse';
import { CreateCustomerRequest } from '../models/createCustomerRequest';
import { CreateCustomerResponse } from '../models/createCustomerResponse';
import { DeleteCustomerCardResponse } from '../models/deleteCustomerCardResponse';
import { DeleteCustomerResponse } from '../models/deleteCustomerResponse';
import { ListCustomersResponse } from '../models/listCustomersResponse';
import { RemoveGroupFromCustomerResponse } from '../models/removeGroupFromCustomerResponse';
import { RetrieveCustomerResponse } from '../models/retrieveCustomerResponse';
import { SearchCustomersRequest } from '../models/searchCustomersRequest';
import { SearchCustomersResponse } from '../models/searchCustomersResponse';
import { UpdateCustomerRequest } from '../models/updateCustomerRequest';
import { UpdateCustomerResponse } from '../models/updateCustomerResponse';
import { BaseApi } from './baseApi';
export declare class CustomersApi extends BaseApi {
    /**
     * Lists customer profiles associated with a Square account.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     *
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for your original query.  For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination).
     * @param limit      The maximum number of results to return in a single page. This limit is advisory.
     *                              The response might contain more or fewer results. If the specified limit is less than
     *                              1 or greater than 100, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH`
     *                              error. The default value is 100.  For more information, see [Pagination](https:
     *                              //developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param sortField  Indicates how customers should be sorted.  The default value is `DEFAULT`.
     * @param sortOrder  Indicates whether customers should be sorted in ascending (`ASC`) or descending
     *                              (`DESC`) order.  The default value is `ASC`.
     * @param count      Indicates whether to return the total count of customers in the `count` field of the
     *                              response.  The default value is `false`.
     * @return Response from the API call
     */
    listCustomers(cursor?: string, limit?: number, sortField?: string, sortOrder?: string, count?: boolean, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomersResponse>>;
    /**
     * Creates a new customer for a business.
     *
     * You must provide at least one of the following values in your request to this
     * endpoint:
     *
     * - `given_name`
     * - `family_name`
     * - `company_name`
     * - `email_address`
     * - `phone_number`
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    createCustomer(body: CreateCustomerRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerResponse>>;
    /**
     * Creates multiple [customer profiles]($m/Customer) for a business.
     *
     * This endpoint takes a map of individual create requests and returns a map of responses.
     *
     * You must provide at least one of the following values in each create request:
     *
     * - `given_name`
     * - `family_name`
     * - `company_name`
     * - `email_address`
     * - `phone_number`
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    bulkCreateCustomers(body: BulkCreateCustomersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkCreateCustomersResponse>>;
    /**
     * Deletes multiple customer profiles.
     *
     * The endpoint takes a list of customer IDs and returns a map of responses.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    bulkDeleteCustomers(body: BulkDeleteCustomersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkDeleteCustomersResponse>>;
    /**
     * Retrieves multiple customer profiles.
     *
     * This endpoint takes a list of customer IDs and returns a map of responses.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    bulkRetrieveCustomers(body: BulkRetrieveCustomersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkRetrieveCustomersResponse>>;
    /**
     * Updates multiple customer profiles.
     *
     * This endpoint takes a map of individual update requests and returns a map of responses.
     *
     * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API]($e/Cards)
     * or [Gift Cards API]($e/GiftCards).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    bulkUpdateCustomers(body: BulkUpdateCustomersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpdateCustomersResponse>>;
    /**
     * Searches the customer profiles associated with a Square account using one or more supported query
     * filters.
     *
     * Calling `SearchCustomers` without any explicit query filter returns all
     * customer profiles ordered alphabetically based on `given_name` and
     * `family_name`.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchCustomers(body: SearchCustomersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchCustomersResponse>>;
    /**
     * Deletes a customer profile from a business. This operation also unlinks any associated cards on file.
     *
     * To delete a customer profile that was created by merging existing profiles, you must use the ID of
     * the newly created profile.
     *
     * @param customerId  The ID of the customer to delete.
     * @param version     The current version of the customer profile.  As a best practice, you should include
     *                              this parameter to enable [optimistic concurrency](https://developer.squareup.
     *                              com/docs/build-basics/common-api-patterns/optimistic-concurrency) control.  For more
     *                              information, see [Delete a customer profile](https://developer.squareup.
     *                              com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
     * @return Response from the API call
     */
    deleteCustomer(customerId: string, version?: bigint, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerResponse>>;
    /**
     * Returns details for a single customer.
     *
     * @param customerId  The ID of the customer to retrieve.
     * @return Response from the API call
     */
    retrieveCustomer(customerId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerResponse>>;
    /**
     * Updates a customer profile. This endpoint supports sparse updates, so only new or changed fields are
     * required in the request.
     * To add or update a field, specify the new value. To remove a field, specify `null`.
     *
     * To update a customer profile that was created by merging existing profiles, you must use the ID of
     * the newly created profile.
     *
     * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API]($e/Cards)
     * or [Gift Cards API]($e/GiftCards).
     *
     * @param customerId   The ID of the customer to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateCustomer(customerId: string, body: UpdateCustomerRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateCustomerResponse>>;
    /**
     * Adds a card on file to an existing customer.
     *
     * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
     * calls with the same card nonce return the same card record that was created
     * with the provided nonce during the _first_ call.
     *
     * @param customerId   The Square ID of the customer profile the card is linked
     *                                                         to.
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerCardResponse>>;
    /**
     * Removes a card on file from a customer.
     *
     * @param customerId  The ID of the customer that the card on file belongs to.
     * @param cardId      The ID of the card on file to delete.
     * @return Response from the API call
     * @deprecated
     */
    deleteCustomerCard(customerId: string, cardId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerCardResponse>>;
    /**
     * Removes a group membership from a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     *
     * @param customerId  The ID of the customer to remove from the group.
     * @param groupId     The ID of the customer group to remove the customer from.
     * @return Response from the API call
     */
    removeGroupFromCustomer(customerId: string, groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RemoveGroupFromCustomerResponse>>;
    /**
     * Adds a group membership to a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     *
     * @param customerId  The ID of the customer to add to a group.
     * @param groupId     The ID of the customer group to add the customer to.
     * @return Response from the API call
     */
    addGroupToCustomer(customerId: string, groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<AddGroupToCustomerResponse>>;
}
