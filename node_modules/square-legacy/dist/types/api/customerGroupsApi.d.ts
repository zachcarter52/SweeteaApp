import { ApiResponse, RequestOptions } from '../core';
import { CreateCustomerGroupRequest } from '../models/createCustomerGroupRequest';
import { CreateCustomerGroupResponse } from '../models/createCustomerGroupResponse';
import { DeleteCustomerGroupResponse } from '../models/deleteCustomerGroupResponse';
import { ListCustomerGroupsResponse } from '../models/listCustomerGroupsResponse';
import { RetrieveCustomerGroupResponse } from '../models/retrieveCustomerGroupResponse';
import { UpdateCustomerGroupRequest } from '../models/updateCustomerGroupRequest';
import { UpdateCustomerGroupResponse } from '../models/updateCustomerGroupResponse';
import { BaseApi } from './baseApi';
export declare class CustomerGroupsApi extends BaseApi {
    /**
     * Retrieves the list of customer groups of a business.
     *
     * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     *                         retrieve the next set of results for your original query.  For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  The maximum number of results to return in a single page. This limit is advisory. The
     *                         response might contain more or fewer results. If the limit is less than 1 or greater than
     *                         50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value
     *                         is 50.  For more information, see [Pagination](https://developer.squareup.com/docs/build-
     *                         basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    listCustomerGroups(cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomerGroupsResponse>>;
    /**
     * Creates a new customer group for a business.
     *
     * The request must include the `name` value of the group.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    createCustomerGroup(body: CreateCustomerGroupRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCustomerGroupResponse>>;
    /**
     * Deletes a customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to delete.
     * @return Response from the API call
     */
    deleteCustomerGroup(groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteCustomerGroupResponse>>;
    /**
     * Retrieves a specific customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to retrieve.
     * @return Response from the API call
     */
    retrieveCustomerGroup(groupId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerGroupResponse>>;
    /**
     * Updates a customer group as identified by the `group_id` value.
     *
     * @param groupId      The ID of the customer group to update.
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    updateCustomerGroup(groupId: string, body: UpdateCustomerGroupRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateCustomerGroupResponse>>;
}
