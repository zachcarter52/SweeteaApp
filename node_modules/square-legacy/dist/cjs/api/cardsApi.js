"use strict";
exports.__esModule = true;
exports.CardsApi = void 0;
var tslib_1 = require("tslib");
var createCardRequest_1 = require("../models/createCardRequest");
var createCardResponse_1 = require("../models/createCardResponse");
var disableCardResponse_1 = require("../models/disableCardResponse");
var listCardsResponse_1 = require("../models/listCardsResponse");
var retrieveCardResponse_1 = require("../models/retrieveCardResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CardsApi = /** @class */ (function (_super) {
    tslib_1.__extends(CardsApi, _super);
    function CardsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of cards owned by the account making the request.
     * A max of 25 cards will be returned.
     *
     * @param cursor           A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for your original query.  See
     *                                    [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                                    patterns/pagination) for more information.
     * @param customerId       Limit results to cards associated with the customer supplied. By default, all
     *                                    cards owned by the merchant are returned.
     * @param includeDisabled  Includes disabled cards. By default, all enabled cards owned by the merchant
     *                                    are returned.
     * @param referenceId      Limit results to cards associated with the reference_id supplied.
     * @param sortOrder        Sorts the returned list by when the card was created with the specified order.
     *                                    This field defaults to ASC.
     * @return Response from the API call
     */
    CardsApi.prototype.listCards = function (cursor, customerId, includeDisabled, referenceId, sortOrder, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/cards');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    customerId: [customerId, (0, schema_1.optional)((0, schema_1.string)())],
                    includeDisabled: [includeDisabled, (0, schema_1.optional)((0, schema_1.boolean)())],
                    referenceId: [referenceId, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('customer_id', mapped.customerId);
                req.query('include_disabled', mapped.includeDisabled);
                req.query('reference_id', mapped.referenceId);
                req.query('sort_order', mapped.sortOrder);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCardsResponse_1.listCardsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Adds a card on file to an existing merchant.
     *
     * @param body         An object containing the fields to POST for the request.  See the
     *                                                 corresponding object definition for field details.
     * @return Response from the API call
     */
    CardsApi.prototype.createCard = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/cards');
                mapped = req.prepareArgs({ body: [body, createCardRequest_1.createCardRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCardResponse_1.createCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves details for a specific Card.
     *
     * @param cardId  Unique ID for the desired Card.
     * @return Response from the API call
     */
    CardsApi.prototype.retrieveCard = function (cardId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ cardId: [cardId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/cards/", ""], ["/v2/cards/", ""])), mapped.cardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCardResponse_1.retrieveCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Disables the card, preventing any further updates or charges.
     * Disabling an already disabled card is allowed but has no effect.
     *
     * @param cardId  Unique ID for the desired Card.
     * @return Response from the API call
     */
    CardsApi.prototype.disableCard = function (cardId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ cardId: [cardId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/cards/", "/disable"], ["/v2/cards/", "/disable"])), mapped.cardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(disableCardResponse_1.disableCardResponseSchema, requestOptions)];
            });
        });
    };
    return CardsApi;
}(baseApi_1.BaseApi));
exports.CardsApi = CardsApi;
var templateObject_1, templateObject_2;
//# sourceMappingURL=cardsApi.js.map