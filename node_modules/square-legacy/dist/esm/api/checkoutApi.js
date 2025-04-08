import { createCheckoutRequestSchema, } from '../models/createCheckoutRequest';
import { createCheckoutResponseSchema, } from '../models/createCheckoutResponse';
import { createPaymentLinkRequestSchema, } from '../models/createPaymentLinkRequest';
import { createPaymentLinkResponseSchema, } from '../models/createPaymentLinkResponse';
import { deletePaymentLinkResponseSchema, } from '../models/deletePaymentLinkResponse';
import { listPaymentLinksResponseSchema, } from '../models/listPaymentLinksResponse';
import { retrieveLocationSettingsResponseSchema, } from '../models/retrieveLocationSettingsResponse';
import { retrieveMerchantSettingsResponseSchema, } from '../models/retrieveMerchantSettingsResponse';
import { retrievePaymentLinkResponseSchema, } from '../models/retrievePaymentLinkResponse';
import { updateLocationSettingsRequestSchema, } from '../models/updateLocationSettingsRequest';
import { updateLocationSettingsResponseSchema, } from '../models/updateLocationSettingsResponse';
import { updateMerchantSettingsRequestSchema, } from '../models/updateMerchantSettingsRequest';
import { updateMerchantSettingsResponseSchema, } from '../models/updateMerchantSettingsResponse';
import { updatePaymentLinkRequestSchema, } from '../models/updatePaymentLinkRequest';
import { updatePaymentLinkResponseSchema, } from '../models/updatePaymentLinkResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class CheckoutApi extends BaseApi {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers are
     * directed to in order to provide their payment information using a
     * payment processing workflow hosted on connect.squareup.com.
     *
     *
     * NOTE: The Checkout API has been updated with new features.
     * For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-
     * api#checkout-api-highlights).
     *
     * @param locationId   The ID of the business location to associate the checkout
     *                                                     with.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    async createCheckout(locationId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            locationId: [locationId, string()],
            body: [body, createCheckoutRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/locations/${mapped.locationId}/checkouts`;
        req.deprecated('CheckoutApi.createCheckout');
        req.authenticate([{ global: true }]);
        return req.callAsJson(createCheckoutResponseSchema, requestOptions);
    }
    /**
     * Retrieves the location-level settings for a Square-hosted checkout page.
     *
     * @param locationId  The ID of the location for which to retrieve settings.
     * @return Response from the API call
     */
    async retrieveLocationSettings(locationId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ locationId: [locationId, string()] });
        req.appendTemplatePath `/v2/online-checkout/location-settings/${mapped.locationId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveLocationSettingsResponseSchema, requestOptions);
    }
    /**
     * Updates the location-level settings for a Square-hosted checkout page.
     *
     * @param locationId   The ID of the location for which to retrieve settings.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    async updateLocationSettings(locationId, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            locationId: [locationId, string()],
            body: [body, updateLocationSettingsRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/online-checkout/location-settings/${mapped.locationId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateLocationSettingsResponseSchema, requestOptions);
    }
    /**
     * Retrieves the merchant-level settings for a Square-hosted checkout page.
     *
     * @return Response from the API call
     */
    async retrieveMerchantSettings(requestOptions) {
        const req = this.createRequest('GET', '/v2/online-checkout/merchant-settings');
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveMerchantSettingsResponseSchema, requestOptions);
    }
    /**
     * Updates the merchant-level settings for a Square-hosted checkout page.
     *
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    async updateMerchantSettings(body, requestOptions) {
        const req = this.createRequest('PUT', '/v2/online-checkout/merchant-settings');
        const mapped = req.prepareArgs({
            body: [body, updateMerchantSettingsRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateMerchantSettingsResponseSchema, requestOptions);
    }
    /**
     * Lists all payment links.
     *
     * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     *                         retrieve the next set of results for the original query. If a cursor is not provided, the
     *                         endpoint returns the first page of the results. For more  information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  A limit on the number of results to return per page. The limit is advisory and the
     *                         implementation might return more or less results. If the supplied limit is negative, zero,
     *                         or greater than the maximum limit of 1000, it is ignored.  Default value: `100`
     * @return Response from the API call
     */
    async listPaymentLinks(cursor, limit, requestOptions) {
        const req = this.createRequest('GET', '/v2/online-checkout/payment-links');
        const mapped = req.prepareArgs({
            cursor: [cursor, optional(string())],
            limit: [limit, optional(number())],
        });
        req.query('cursor', mapped.cursor);
        req.query('limit', mapped.limit);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listPaymentLinksResponseSchema, requestOptions);
    }
    /**
     * Creates a Square-hosted checkout page. Applications can share the resulting payment link with their
     * buyer to pay for goods and services.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    async createPaymentLink(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/online-checkout/payment-links');
        const mapped = req.prepareArgs({
            body: [body, createPaymentLinkRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createPaymentLinkResponseSchema, requestOptions);
    }
    /**
     * Deletes a payment link.
     *
     * @param id The ID of the payment link to delete.
     * @return Response from the API call
     */
    async deletePaymentLink(id, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/online-checkout/payment-links/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deletePaymentLinkResponseSchema, requestOptions);
    }
    /**
     * Retrieves a payment link.
     *
     * @param id The ID of link to retrieve.
     * @return Response from the API call
     */
    async retrievePaymentLink(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/online-checkout/payment-links/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrievePaymentLinkResponseSchema, requestOptions);
    }
    /**
     * Updates a payment link. You can update the `payment_link` fields such as
     * `description`, `checkout_options`, and  `pre_populated_data`.
     * You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.
     *
     * @param id           The ID of the payment link to update.
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    async updatePaymentLink(id, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            id: [id, string()],
            body: [body, updatePaymentLinkRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/online-checkout/payment-links/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updatePaymentLinkResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=checkoutApi.js.map