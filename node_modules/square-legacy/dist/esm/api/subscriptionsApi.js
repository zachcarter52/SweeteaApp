import { bulkSwapPlanRequestSchema, } from '../models/bulkSwapPlanRequest';
import { bulkSwapPlanResponseSchema, } from '../models/bulkSwapPlanResponse';
import { cancelSubscriptionResponseSchema, } from '../models/cancelSubscriptionResponse';
import { changeBillingAnchorDateRequestSchema, } from '../models/changeBillingAnchorDateRequest';
import { changeBillingAnchorDateResponseSchema, } from '../models/changeBillingAnchorDateResponse';
import { createSubscriptionRequestSchema, } from '../models/createSubscriptionRequest';
import { createSubscriptionResponseSchema, } from '../models/createSubscriptionResponse';
import { deleteSubscriptionActionResponseSchema, } from '../models/deleteSubscriptionActionResponse';
import { listSubscriptionEventsResponseSchema, } from '../models/listSubscriptionEventsResponse';
import { pauseSubscriptionRequestSchema, } from '../models/pauseSubscriptionRequest';
import { pauseSubscriptionResponseSchema, } from '../models/pauseSubscriptionResponse';
import { resumeSubscriptionRequestSchema, } from '../models/resumeSubscriptionRequest';
import { resumeSubscriptionResponseSchema, } from '../models/resumeSubscriptionResponse';
import { retrieveSubscriptionResponseSchema, } from '../models/retrieveSubscriptionResponse';
import { searchSubscriptionsRequestSchema, } from '../models/searchSubscriptionsRequest';
import { searchSubscriptionsResponseSchema, } from '../models/searchSubscriptionsResponse';
import { swapPlanRequestSchema, } from '../models/swapPlanRequest';
import { swapPlanResponseSchema, } from '../models/swapPlanResponse';
import { updateSubscriptionRequestSchema, } from '../models/updateSubscriptionRequest';
import { updateSubscriptionResponseSchema, } from '../models/updateSubscriptionResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class SubscriptionsApi extends BaseApi {
    /**
     * Enrolls a customer in a subscription.
     *
     * If you provide a card on file in the request, Square charges the card for
     * the subscription. Otherwise, Square sends an invoice to the customer's email
     * address. The subscription starts immediately, unless the request includes
     * the optional `start_date`. Each individual subscription is associated with a particular location.
     *
     * For more information, see [Create a subscription](https://developer.squareup.com/docs/subscriptions-
     * api/manage-subscriptions#create-a-subscription).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    async createSubscription(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/subscriptions');
        const mapped = req.prepareArgs({
            body: [body, createSubscriptionRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createSubscriptionResponseSchema, requestOptions);
    }
    /**
     * Schedules a plan variation change for all active subscriptions under a given plan
     * variation. For more information, see [Swap Subscription Plan Variations](https://developer.squareup.
     * com/docs/subscriptions-api/swap-plan-variations).
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    async bulkSwapPlan(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/subscriptions/bulk-swap-plan');
        const mapped = req.prepareArgs({ body: [body, bulkSwapPlanRequestSchema] });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(bulkSwapPlanResponseSchema, requestOptions);
    }
    /**
     * Searches for subscriptions.
     *
     * Results are ordered chronologically by subscription creation date. If
     * the request specifies more than one location ID,
     * the endpoint orders the result
     * by location ID, and then by creation date within each location. If no locations are given
     * in the query, all locations are searched.
     *
     * You can also optionally specify `customer_ids` to search by customer.
     * If left unset, all customers
     * associated with the specified locations are returned.
     * If the request specifies customer IDs, the endpoint orders results
     * first by location, within location by customer ID, and within
     * customer by subscription creation date.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    async searchSubscriptions(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/subscriptions/search');
        const mapped = req.prepareArgs({
            body: [body, searchSubscriptionsRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(searchSubscriptionsResponseSchema, requestOptions);
    }
    /**
     * Retrieves a specific subscription.
     *
     * @param subscriptionId  The ID of the subscription to retrieve.
     * @param include         A query parameter to specify related information to be included in the response.
     *                                  The supported query parameter values are:   - `actions`: to include scheduled
     *                                  actions on the targeted subscription.
     * @return Response from the API call
     */
    async retrieveSubscription(subscriptionId, include, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            include: [include, optional(string())],
        });
        req.query('include', mapped.include);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveSubscriptionResponseSchema, requestOptions);
    }
    /**
     * Updates a subscription by modifying or clearing `subscription` field values.
     * To clear a field, set its value to `null`.
     *
     * @param subscriptionId  The ID of the subscription to update.
     * @param body            An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    async updateSubscription(subscriptionId, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            body: [body, updateSubscriptionRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateSubscriptionResponseSchema, requestOptions);
    }
    /**
     * Deletes a scheduled action for a subscription.
     *
     * @param subscriptionId  The ID of the subscription the targeted action is to act upon.
     * @param actionId        The ID of the targeted action to be deleted.
     * @return Response from the API call
     */
    async deleteSubscriptionAction(subscriptionId, actionId, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            actionId: [actionId, string()],
        });
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/actions/${mapped.actionId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deleteSubscriptionActionResponseSchema, requestOptions);
    }
    /**
     * Changes the [billing anchor date](https://developer.squareup.com/docs/subscriptions-api/subscription-
     * billing#billing-dates)
     * for a subscription.
     *
     * @param subscriptionId  The ID of the subscription to update the billing
     *                                                                 anchor date.
     * @param body            An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    async changeBillingAnchorDate(subscriptionId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            body: [body, changeBillingAnchorDateRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/billing-anchor`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(changeBillingAnchorDateResponseSchema, requestOptions);
    }
    /**
     * Schedules a `CANCEL` action to cancel an active subscription. This
     * sets the `canceled_date` field to the end of the active billing period. After this date,
     * the subscription status changes from ACTIVE to CANCELED.
     *
     * @param subscriptionId  The ID of the subscription to cancel.
     * @return Response from the API call
     */
    async cancelSubscription(subscriptionId, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
        });
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/cancel`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(cancelSubscriptionResponseSchema, requestOptions);
    }
    /**
     * Lists all [events](https://developer.squareup.com/docs/subscriptions-api/actions-events) for a
     * specific subscription.
     *
     * @param subscriptionId  The ID of the subscription to retrieve the events for.
     * @param cursor          When the total number of resulting subscription events exceeds the limit of a
     *                                  paged response,  specify the cursor returned from a preceding response here to
     *                                  fetch the next set of results. If the cursor is unset, the response contains the
     *                                  last page of the results.  For more information, see [Pagination](https:
     *                                  //developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param limit           The upper limit on the number of subscription events to return in a paged
     *                                  response.
     * @return Response from the API call
     */
    async listSubscriptionEvents(subscriptionId, cursor, limit, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            cursor: [cursor, optional(string())],
            limit: [limit, optional(number())],
        });
        req.query('cursor', mapped.cursor);
        req.query('limit', mapped.limit);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/events`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(listSubscriptionEventsResponseSchema, requestOptions);
    }
    /**
     * Schedules a `PAUSE` action to pause an active subscription.
     *
     * @param subscriptionId  The ID of the subscription to pause.
     * @param body            An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    async pauseSubscription(subscriptionId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            body: [body, pauseSubscriptionRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/pause`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(pauseSubscriptionResponseSchema, requestOptions);
    }
    /**
     * Schedules a `RESUME` action to resume a paused or a deactivated subscription.
     *
     * @param subscriptionId  The ID of the subscription to resume.
     * @param body            An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    async resumeSubscription(subscriptionId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            body: [body, resumeSubscriptionRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/resume`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(resumeSubscriptionResponseSchema, requestOptions);
    }
    /**
     * Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing subscription.
     * For more information, see [Swap Subscription Plan Variations](https://developer.squareup.
     * com/docs/subscriptions-api/swap-plan-variations).
     *
     * @param subscriptionId  The ID of the subscription to swap the subscription plan for.
     * @param body            An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    async swapPlan(subscriptionId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            subscriptionId: [subscriptionId, string()],
            body: [body, swapPlanRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/subscriptions/${mapped.subscriptionId}/swap-plan`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(swapPlanResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=subscriptionsApi.js.map