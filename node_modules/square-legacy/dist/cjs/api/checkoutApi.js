"use strict";
exports.__esModule = true;
exports.CheckoutApi = void 0;
var tslib_1 = require("tslib");
var createCheckoutRequest_1 = require("../models/createCheckoutRequest");
var createCheckoutResponse_1 = require("../models/createCheckoutResponse");
var createPaymentLinkRequest_1 = require("../models/createPaymentLinkRequest");
var createPaymentLinkResponse_1 = require("../models/createPaymentLinkResponse");
var deletePaymentLinkResponse_1 = require("../models/deletePaymentLinkResponse");
var listPaymentLinksResponse_1 = require("../models/listPaymentLinksResponse");
var retrieveLocationSettingsResponse_1 = require("../models/retrieveLocationSettingsResponse");
var retrieveMerchantSettingsResponse_1 = require("../models/retrieveMerchantSettingsResponse");
var retrievePaymentLinkResponse_1 = require("../models/retrievePaymentLinkResponse");
var updateLocationSettingsRequest_1 = require("../models/updateLocationSettingsRequest");
var updateLocationSettingsResponse_1 = require("../models/updateLocationSettingsResponse");
var updateMerchantSettingsRequest_1 = require("../models/updateMerchantSettingsRequest");
var updateMerchantSettingsResponse_1 = require("../models/updateMerchantSettingsResponse");
var updatePaymentLinkRequest_1 = require("../models/updatePaymentLinkRequest");
var updatePaymentLinkResponse_1 = require("../models/updatePaymentLinkResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CheckoutApi = /** @class */ (function (_super) {
    tslib_1.__extends(CheckoutApi, _super);
    function CheckoutApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    CheckoutApi.prototype.createCheckout = function (locationId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    body: [body, createCheckoutRequest_1.createCheckoutRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/locations/", "/checkouts"], ["/v2/locations/", "/checkouts"])), mapped.locationId);
                req.deprecated('CheckoutApi.createCheckout');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCheckoutResponse_1.createCheckoutResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves the location-level settings for a Square-hosted checkout page.
     *
     * @param locationId  The ID of the location for which to retrieve settings.
     * @return Response from the API call
     */
    CheckoutApi.prototype.retrieveLocationSettings = function (locationId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ locationId: [locationId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/online-checkout/location-settings/", ""], ["/v2/online-checkout/location-settings/", ""])), mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLocationSettingsResponse_1.retrieveLocationSettingsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates the location-level settings for a Square-hosted checkout page.
     *
     * @param locationId   The ID of the location for which to retrieve settings.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    CheckoutApi.prototype.updateLocationSettings = function (locationId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    body: [body, updateLocationSettingsRequest_1.updateLocationSettingsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/online-checkout/location-settings/", ""], ["/v2/online-checkout/location-settings/", ""])), mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateLocationSettingsResponse_1.updateLocationSettingsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves the merchant-level settings for a Square-hosted checkout page.
     *
     * @return Response from the API call
     */
    CheckoutApi.prototype.retrieveMerchantSettings = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/online-checkout/merchant-settings');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveMerchantSettingsResponse_1.retrieveMerchantSettingsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates the merchant-level settings for a Square-hosted checkout page.
     *
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    CheckoutApi.prototype.updateMerchantSettings = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT', '/v2/online-checkout/merchant-settings');
                mapped = req.prepareArgs({
                    body: [body, updateMerchantSettingsRequest_1.updateMerchantSettingsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateMerchantSettingsResponse_1.updateMerchantSettingsResponseSchema, requestOptions)];
            });
        });
    };
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
    CheckoutApi.prototype.listPaymentLinks = function (cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/online-checkout/payment-links');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listPaymentLinksResponse_1.listPaymentLinksResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a Square-hosted checkout page. Applications can share the resulting payment link with their
     * buyer to pay for goods and services.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    CheckoutApi.prototype.createPaymentLink = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/online-checkout/payment-links');
                mapped = req.prepareArgs({
                    body: [body, createPaymentLinkRequest_1.createPaymentLinkRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createPaymentLinkResponse_1.createPaymentLinkResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a payment link.
     *
     * @param id The ID of the payment link to delete.
     * @return Response from the API call
     */
    CheckoutApi.prototype.deletePaymentLink = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/online-checkout/payment-links/", ""], ["/v2/online-checkout/payment-links/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deletePaymentLinkResponse_1.deletePaymentLinkResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a payment link.
     *
     * @param id The ID of link to retrieve.
     * @return Response from the API call
     */
    CheckoutApi.prototype.retrievePaymentLink = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/online-checkout/payment-links/", ""], ["/v2/online-checkout/payment-links/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrievePaymentLinkResponse_1.retrievePaymentLinkResponseSchema, requestOptions)];
            });
        });
    };
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
    CheckoutApi.prototype.updatePaymentLink = function (id, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    id: [id, (0, schema_1.string)()],
                    body: [body, updatePaymentLinkRequest_1.updatePaymentLinkRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/online-checkout/payment-links/", ""], ["/v2/online-checkout/payment-links/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updatePaymentLinkResponse_1.updatePaymentLinkResponseSchema, requestOptions)];
            });
        });
    };
    return CheckoutApi;
}(baseApi_1.BaseApi));
exports.CheckoutApi = CheckoutApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=checkoutApi.js.map