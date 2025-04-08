import { ApiResponse, RequestOptions } from '../core';
import { CreateWebhookSubscriptionRequest } from '../models/createWebhookSubscriptionRequest';
import { CreateWebhookSubscriptionResponse } from '../models/createWebhookSubscriptionResponse';
import { DeleteWebhookSubscriptionResponse } from '../models/deleteWebhookSubscriptionResponse';
import { ListWebhookEventTypesResponse } from '../models/listWebhookEventTypesResponse';
import { ListWebhookSubscriptionsResponse } from '../models/listWebhookSubscriptionsResponse';
import { RetrieveWebhookSubscriptionResponse } from '../models/retrieveWebhookSubscriptionResponse';
import { TestWebhookSubscriptionRequest } from '../models/testWebhookSubscriptionRequest';
import { TestWebhookSubscriptionResponse } from '../models/testWebhookSubscriptionResponse';
import { UpdateWebhookSubscriptionRequest } from '../models/updateWebhookSubscriptionRequest';
import { UpdateWebhookSubscriptionResponse } from '../models/updateWebhookSubscriptionResponse';
import { UpdateWebhookSubscriptionSignatureKeyRequest } from '../models/updateWebhookSubscriptionSignatureKeyRequest';
import { UpdateWebhookSubscriptionSignatureKeyResponse } from '../models/updateWebhookSubscriptionSignatureKeyResponse';
import { BaseApi } from './baseApi';
export declare class WebhookSubscriptionsApi extends BaseApi {
    /**
     * Lists all webhook event types that can be subscribed to.
     *
     * @param apiVersion  The API version for which to list event types. Setting this field overrides the
     *                              default version used by the application.
     * @return Response from the API call
     */
    listWebhookEventTypes(apiVersion?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListWebhookEventTypesResponse>>;
    /**
     * Lists all webhook subscriptions owned by your application.
     *
     * @param cursor           A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for your original query.  For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                    basics/common-api-patterns/pagination).
     * @param includeDisabled  Includes disabled [Subscription](entity:WebhookSubscription)s. By default, all
     *                                    enabled [Subscription](entity:WebhookSubscription)s are returned.
     * @param sortOrder        Sorts the returned list by when the [Subscription](entity:WebhookSubscription)
     *                                    was created with the specified order. This field defaults to ASC.
     * @param limit            The maximum number of results to be returned in a single page. It is possible
     *                                    to receive fewer results than the specified limit on a given page. The default
     *                                    value of 100 is also the maximum allowed value.  Default: 100
     * @return Response from the API call
     */
    listWebhookSubscriptions(cursor?: string, includeDisabled?: boolean, sortOrder?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListWebhookSubscriptionsResponse>>;
    /**
     * Creates a webhook subscription.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    createWebhookSubscription(body: CreateWebhookSubscriptionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateWebhookSubscriptionResponse>>;
    /**
     * Deletes a webhook subscription.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to delete.
     * @return Response from the API call
     */
    deleteWebhookSubscription(subscriptionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteWebhookSubscriptionResponse>>;
    /**
     * Retrieves a webhook subscription identified by its ID.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to retrieve.
     * @return Response from the API call
     */
    retrieveWebhookSubscription(subscriptionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveWebhookSubscriptionResponse>>;
    /**
     * Updates a webhook subscription.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:
     *                                                                   WebhookSubscription) to update.
     * @param body            An object containing the fields to POST for the
     *                                                                   request.  See the corresponding object
     *                                                                   definition for field details.
     * @return Response from the API call
     */
    updateWebhookSubscription(subscriptionId: string, body: UpdateWebhookSubscriptionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateWebhookSubscriptionResponse>>;
    /**
     * Updates a webhook subscription by replacing the existing signature key with a new one.
     *
     * @param subscriptionId  [REQUIRED] The ID of the
     *                                                                               [Subscription](entity:
     *                                                                               WebhookSubscription) to update.
     * @param body            An object containing the fields to
     *                                                                               POST for the request.  See the
     *                                                                               corresponding object definition for
     *                                                                               field details.
     * @return Response from the API call
     */
    updateWebhookSubscriptionSignatureKey(subscriptionId: string, body: UpdateWebhookSubscriptionSignatureKeyRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateWebhookSubscriptionSignatureKeyResponse>>;
    /**
     * Tests a webhook subscription by sending a test event to the notification URL.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:
     *                                                                 WebhookSubscription) to test.
     * @param body            An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    testWebhookSubscription(subscriptionId: string, body: TestWebhookSubscriptionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<TestWebhookSubscriptionResponse>>;
}
