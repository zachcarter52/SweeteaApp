"use strict";
exports.__esModule = true;
exports.GiftCardsApi = void 0;
var tslib_1 = require("tslib");
var createGiftCardRequest_1 = require("../models/createGiftCardRequest");
var createGiftCardResponse_1 = require("../models/createGiftCardResponse");
var linkCustomerToGiftCardRequest_1 = require("../models/linkCustomerToGiftCardRequest");
var linkCustomerToGiftCardResponse_1 = require("../models/linkCustomerToGiftCardResponse");
var listGiftCardsResponse_1 = require("../models/listGiftCardsResponse");
var retrieveGiftCardFromGANRequest_1 = require("../models/retrieveGiftCardFromGANRequest");
var retrieveGiftCardFromGANResponse_1 = require("../models/retrieveGiftCardFromGANResponse");
var retrieveGiftCardFromNonceRequest_1 = require("../models/retrieveGiftCardFromNonceRequest");
var retrieveGiftCardFromNonceResponse_1 = require("../models/retrieveGiftCardFromNonceResponse");
var retrieveGiftCardResponse_1 = require("../models/retrieveGiftCardResponse");
var unlinkCustomerFromGiftCardRequest_1 = require("../models/unlinkCustomerFromGiftCardRequest");
var unlinkCustomerFromGiftCardResponse_1 = require("../models/unlinkCustomerFromGiftCardResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var GiftCardsApi = /** @class */ (function (_super) {
    tslib_1.__extends(GiftCardsApi, _super);
    function GiftCardsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists all gift cards. You can specify optional filters to retrieve
     * a subset of the gift cards. Results are sorted by `created_at` in ascending order.
     *
     * @param type        If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the
     *                              specified type. Otherwise, the endpoint returns gift cards of all types.
     * @param state       If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards
     *                              in the specified state. Otherwise, the endpoint returns the gift cards of all states.
     * @param limit       If a limit is provided, the endpoint returns only the specified number of results
     *                              per page. The maximum value is 200. The default value is 30. For more information,
     *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. If a cursor is not
     *                              provided, the endpoint returns the first page of the results.  For more information,
     *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * @param customerId  If a customer ID is provided, the endpoint returns only the gift cards linked to the
     *                              specified customer.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.listGiftCards = function (type, state, limit, cursor, customerId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/gift-cards');
                mapped = req.prepareArgs({
                    type: [type, (0, schema_1.optional)((0, schema_1.string)())],
                    state: [state, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    customerId: [customerId, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('type', mapped.type);
                req.query('state', mapped.state);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('customer_id', mapped.customerId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listGiftCardsResponse_1.listGiftCardsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift card
     * has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases, call
     * [CreateGiftCardActivity]($e/GiftCardActivities/CreateGiftCardActivity) and create an `ACTIVATE`
     * activity with the initial balance. Alternatively, you can use
     * [RefundPayment]($e/Refunds/RefundPayment)
     * to refund a payment to the new gift card.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.createGiftCard = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/gift-cards');
                mapped = req.prepareArgs({
                    body: [body, createGiftCardRequest_1.createGiftCardRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createGiftCardResponse_1.createGiftCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a gift card using the gift card account number (GAN).
     *
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.retrieveGiftCardFromGAN = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/gift-cards/from-gan');
                mapped = req.prepareArgs({
                    body: [body, retrieveGiftCardFromGANRequest_1.retrieveGiftCardFromGANRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveGiftCardFromGANResponse_1.retrieveGiftCardFromGANResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a gift card using a secure payment token that represents the gift card.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.retrieveGiftCardFromNonce = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/gift-cards/from-nonce');
                mapped = req.prepareArgs({
                    body: [body, retrieveGiftCardFromNonceRequest_1.retrieveGiftCardFromNonceRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveGiftCardFromNonceResponse_1.retrieveGiftCardFromNonceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Links a customer to a gift card, which is also referred to as adding a card on file.
     *
     * @param giftCardId   The ID of the gift card to be linked.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.linkCustomerToGiftCard = function (giftCardId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    giftCardId: [giftCardId, (0, schema_1.string)()],
                    body: [body, linkCustomerToGiftCardRequest_1.linkCustomerToGiftCardRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/gift-cards/", "/link-customer"], ["/v2/gift-cards/", "/link-customer"])), mapped.giftCardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(linkCustomerToGiftCardResponse_1.linkCustomerToGiftCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Unlinks a customer from a gift card, which is also referred to as removing a card on file.
     *
     * @param giftCardId   The ID of the gift card to be unlinked.
     * @param body         An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.unlinkCustomerFromGiftCard = function (giftCardId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    giftCardId: [giftCardId, (0, schema_1.string)()],
                    body: [body, unlinkCustomerFromGiftCardRequest_1.unlinkCustomerFromGiftCardRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/gift-cards/", "/unlink-customer"], ["/v2/gift-cards/", "/unlink-customer"])), mapped.giftCardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(unlinkCustomerFromGiftCardResponse_1.unlinkCustomerFromGiftCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a gift card using the gift card ID.
     *
     * @param id The ID of the gift card to retrieve.
     * @return Response from the API call
     */
    GiftCardsApi.prototype.retrieveGiftCard = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/gift-cards/", ""], ["/v2/gift-cards/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveGiftCardResponse_1.retrieveGiftCardResponseSchema, requestOptions)];
            });
        });
    };
    return GiftCardsApi;
}(baseApi_1.BaseApi));
exports.GiftCardsApi = GiftCardsApi;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=giftCardsApi.js.map