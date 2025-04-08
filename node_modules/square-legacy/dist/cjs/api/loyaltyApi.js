"use strict";
exports.__esModule = true;
exports.LoyaltyApi = void 0;
var tslib_1 = require("tslib");
var accumulateLoyaltyPointsRequest_1 = require("../models/accumulateLoyaltyPointsRequest");
var accumulateLoyaltyPointsResponse_1 = require("../models/accumulateLoyaltyPointsResponse");
var adjustLoyaltyPointsRequest_1 = require("../models/adjustLoyaltyPointsRequest");
var adjustLoyaltyPointsResponse_1 = require("../models/adjustLoyaltyPointsResponse");
var calculateLoyaltyPointsRequest_1 = require("../models/calculateLoyaltyPointsRequest");
var calculateLoyaltyPointsResponse_1 = require("../models/calculateLoyaltyPointsResponse");
var cancelLoyaltyPromotionResponse_1 = require("../models/cancelLoyaltyPromotionResponse");
var createLoyaltyAccountRequest_1 = require("../models/createLoyaltyAccountRequest");
var createLoyaltyAccountResponse_1 = require("../models/createLoyaltyAccountResponse");
var createLoyaltyPromotionRequest_1 = require("../models/createLoyaltyPromotionRequest");
var createLoyaltyPromotionResponse_1 = require("../models/createLoyaltyPromotionResponse");
var createLoyaltyRewardRequest_1 = require("../models/createLoyaltyRewardRequest");
var createLoyaltyRewardResponse_1 = require("../models/createLoyaltyRewardResponse");
var deleteLoyaltyRewardResponse_1 = require("../models/deleteLoyaltyRewardResponse");
var listLoyaltyProgramsResponse_1 = require("../models/listLoyaltyProgramsResponse");
var listLoyaltyPromotionsResponse_1 = require("../models/listLoyaltyPromotionsResponse");
var redeemLoyaltyRewardRequest_1 = require("../models/redeemLoyaltyRewardRequest");
var redeemLoyaltyRewardResponse_1 = require("../models/redeemLoyaltyRewardResponse");
var retrieveLoyaltyAccountResponse_1 = require("../models/retrieveLoyaltyAccountResponse");
var retrieveLoyaltyProgramResponse_1 = require("../models/retrieveLoyaltyProgramResponse");
var retrieveLoyaltyPromotionResponse_1 = require("../models/retrieveLoyaltyPromotionResponse");
var retrieveLoyaltyRewardResponse_1 = require("../models/retrieveLoyaltyRewardResponse");
var searchLoyaltyAccountsRequest_1 = require("../models/searchLoyaltyAccountsRequest");
var searchLoyaltyAccountsResponse_1 = require("../models/searchLoyaltyAccountsResponse");
var searchLoyaltyEventsRequest_1 = require("../models/searchLoyaltyEventsRequest");
var searchLoyaltyEventsResponse_1 = require("../models/searchLoyaltyEventsResponse");
var searchLoyaltyRewardsRequest_1 = require("../models/searchLoyaltyRewardsRequest");
var searchLoyaltyRewardsResponse_1 = require("../models/searchLoyaltyRewardsResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var LoyaltyApi = /** @class */ (function (_super) {
    tslib_1.__extends(LoyaltyApi, _super);
    function LoyaltyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a
     * `mapping` with the `phone_number` of the buyer.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.createLoyaltyAccount = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/loyalty/accounts');
                mapped = req.prepareArgs({
                    body: [body, createLoyaltyAccountRequest_1.createLoyaltyAccountRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createLoyaltyAccountResponse_1.createLoyaltyAccountResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for loyalty accounts in a loyalty program.
     *
     * You can search for a loyalty account using the phone number or customer ID associated with the
     * account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.
     *
     * Search results are sorted by `created_at` in ascending order.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.searchLoyaltyAccounts = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/loyalty/accounts/search');
                mapped = req.prepareArgs({
                    body: [body, searchLoyaltyAccountsRequest_1.searchLoyaltyAccountsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchLoyaltyAccountsResponse_1.searchLoyaltyAccountsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a loyalty account.
     *
     * @param accountId  The ID of the [loyalty account](entity:LoyaltyAccount) to retrieve.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.retrieveLoyaltyAccount = function (accountId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ accountId: [accountId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/loyalty/accounts/", ""], ["/v2/loyalty/accounts/", ""])), mapped.accountId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLoyaltyAccountResponse_1.retrieveLoyaltyAccountResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Adds points earned from a purchase to a [loyalty account]($m/LoyaltyAccount).
     *
     * - If you are using the Orders API to manage orders, provide the `order_id`. Square reads the order
     * to compute the points earned from both the base loyalty program and an associated
     * [loyalty promotion]($m/LoyaltyPromotion). For purchases that qualify for multiple accrual
     * rules, Square computes points based on the accrual rule that grants the most points.
     * For purchases that qualify for multiple promotions, Square computes points based on the most
     * recently created promotion. A purchase must first qualify for program points to be eligible for
     * promotion points.
     *
     * - If you are not using the Orders API to manage orders, provide `points` with the number of points
     * to add.
     * You must first perform a client-side computation of the points earned from the loyalty program and
     * loyalty promotion. For spend-based and visit-based programs, you can call
     * [CalculateLoyaltyPoints]($e/Loyalty/CalculateLoyaltyPoints)
     * to compute the points earned from the base loyalty program. For information about computing points
     * earned from a loyalty promotion, see
     * [Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-
     * promotions#calculate-promotion-points).
     *
     * @param accountId    The ID of the target [loyalty account](entity:
     *                                                              LoyaltyAccount).
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.accumulateLoyaltyPoints = function (accountId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    accountId: [accountId, (0, schema_1.string)()],
                    body: [body, accumulateLoyaltyPointsRequest_1.accumulateLoyaltyPointsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/loyalty/accounts/", "/accumulate"], ["/v2/loyalty/accounts/", "/accumulate"])), mapped.accountId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(accumulateLoyaltyPointsResponse_1.accumulateLoyaltyPointsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Adds points to or subtracts points from a buyer's account.
     *
     * Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow,
     * you call
     * [AccumulateLoyaltyPoints]($e/Loyalty/AccumulateLoyaltyPoints)
     * to add points when a buyer pays for the purchase.
     *
     * @param accountId    The ID of the target [loyalty account](entity:
     *                                                          LoyaltyAccount).
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.adjustLoyaltyPoints = function (accountId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    accountId: [accountId, (0, schema_1.string)()],
                    body: [body, adjustLoyaltyPointsRequest_1.adjustLoyaltyPointsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/loyalty/accounts/", "/adjust"], ["/v2/loyalty/accounts/", "/adjust"])), mapped.accountId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(adjustLoyaltyPointsResponse_1.adjustLoyaltyPointsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for loyalty events.
     *
     * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
     * buyer's loyalty account. Each change in the point balance
     * (for example, points earned, points redeemed, and points expired) is
     * recorded in the ledger. Using this endpoint, you can search the ledger for events.
     *
     * Search results are sorted by `created_at` in descending order.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.searchLoyaltyEvents = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/loyalty/events/search');
                mapped = req.prepareArgs({
                    body: [body, searchLoyaltyEventsRequest_1.searchLoyaltyEventsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchLoyaltyEventsResponse_1.searchLoyaltyEventsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a list of loyalty programs in the seller's account.
     * Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can
     * have only one loyalty program, which is created and managed from the Seller Dashboard. For more
     * information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
     *
     *
     * Replaced with [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) when used with
     * the keyword `main`.
     *
     * @return Response from the API call
     * @deprecated
     */
    LoyaltyApi.prototype.listLoyaltyPrograms = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/loyalty/programs');
                req.deprecated('LoyaltyApi.listLoyaltyPrograms');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listLoyaltyProgramsResponse_1.listLoyaltyProgramsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword
     * `main`.
     *
     * Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can
     * have only one loyalty program, which is created and managed from the Seller Dashboard. For more
     * information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
     *
     * @param programId  The ID of the loyalty program or the keyword `main`. Either value can be used to
     *                             retrieve the single loyalty program that belongs to the seller.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.retrieveLoyaltyProgram = function (programId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ programId: [programId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/loyalty/programs/", ""], ["/v2/loyalty/programs/", ""])), mapped.programId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLoyaltyProgramResponse_1.retrieveLoyaltyProgramResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Calculates the number of points a buyer can earn from a purchase. Applications might call this
     * endpoint
     * to display the points to the buyer.
     *
     * - If you are using the Orders API to manage orders, provide the `order_id` and (optional)
     * `loyalty_account_id`.
     * Square reads the order to compute the points earned from the base loyalty program and an associated
     * [loyalty promotion]($m/LoyaltyPromotion).
     *
     * - If you are not using the Orders API to manage orders, provide `transaction_amount_money` with the
     * purchase amount. Square uses this amount to calculate the points earned from the base loyalty
     * program,
     * but not points earned from a loyalty promotion. For spend-based and visit-based programs, the
     * `tax_mode`
     * setting of the accrual rule indicates how taxes should be treated for loyalty points accrual.
     * If the purchase qualifies for program points, call
     * [ListLoyaltyPromotions]($e/Loyalty/ListLoyaltyPromotions) and perform a client-side computation
     * to calculate whether the purchase also qualifies for promotion points. For more information, see
     * [Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-
     * promotions#calculate-promotion-points).
     *
     * @param programId    The ID of the [loyalty program](entity:
     *                                                             LoyaltyProgram), which defines the rules for accruing
     *                                                             points.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.calculateLoyaltyPoints = function (programId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    programId: [programId, (0, schema_1.string)()],
                    body: [body, calculateLoyaltyPointsRequest_1.calculateLoyaltyPointsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/loyalty/programs/", "/calculate"], ["/v2/loyalty/programs/", "/calculate"])), mapped.programId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(calculateLoyaltyPointsResponse_1.calculateLoyaltyPointsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists the loyalty promotions associated with a [loyalty program]($m/LoyaltyProgram).
     * Results are sorted by the `created_at` date in descending order (newest to oldest).
     *
     * @param programId  The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,
     *                             call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the
     *                             `main` keyword.
     * @param status     The status to filter the results by. If a status is provided, only loyalty promotions
     *                             with the specified status are returned. Otherwise, all loyalty promotions associated
     *                             with the loyalty program are returned.
     * @param cursor     The cursor returned in the paged response from the previous call to this endpoint.
     *                             Provide this cursor to retrieve the next page of results for your original request.
     *                             For more information, see [Pagination](https://developer.squareup.com/docs/build-
     *                             basics/common-api-patterns/pagination).
     * @param limit      The maximum number of results to return in a single paged response. The minimum value
     *                             is 1 and the maximum value is 30. The default value is 30. For more information, see
     *                             [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                             patterns/pagination).
     * @return Response from the API call
     */
    LoyaltyApi.prototype.listLoyaltyPromotions = function (programId, status, cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    programId: [programId, (0, schema_1.string)()],
                    status: [status, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('status', mapped.status);
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/loyalty/programs/", "/promotions"], ["/v2/loyalty/programs/", "/promotions"])), mapped.programId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listLoyaltyPromotionsResponse_1.listLoyaltyPromotionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a loyalty promotion for a [loyalty program]($m/LoyaltyProgram). A loyalty promotion
     * enables buyers to earn points in addition to those earned from the base loyalty program.
     *
     * This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the
     * `available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an
     * `ACTIVE` or `SCHEDULED` status.
     *
     * @param programId    The ID of the [loyalty program](entity:
     *                                                             LoyaltyProgram) to associate with the promotion. To
     *                                                             get the program ID, call [RetrieveLoyaltyProgram](api-
     *                                                             endpoint:Loyalty-RetrieveLoyaltyProgram) using the
     *                                                             `main` keyword.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.createLoyaltyPromotion = function (programId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    programId: [programId, (0, schema_1.string)()],
                    body: [body, createLoyaltyPromotionRequest_1.createLoyaltyPromotionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/loyalty/programs/", "/promotions"], ["/v2/loyalty/programs/", "/promotions"])), mapped.programId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createLoyaltyPromotionResponse_1.createLoyaltyPromotionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a loyalty promotion.
     *
     * @param promotionId  The ID of the [loyalty promotion](entity:LoyaltyPromotion) to retrieve.
     * @param programId    The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,
     *                               call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the
     *                               `main` keyword.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.retrieveLoyaltyPromotion = function (promotionId, programId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    promotionId: [promotionId, (0, schema_1.string)()],
                    programId: [programId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["/v2/loyalty/programs/", "/promotions/", ""], ["/v2/loyalty/programs/", "/promotions/", ""])), mapped.programId, mapped.promotionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLoyaltyPromotionResponse_1.retrieveLoyaltyPromotionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
     * end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED`
     * promotion.
     * Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion
     * before
     * you create a new one.
     *
     * This endpoint sets the loyalty promotion to the `CANCELED` state
     *
     * @param promotionId  The ID of the [loyalty promotion](entity:LoyaltyPromotion) to cancel. You can
     *                               cancel a promotion that has an `ACTIVE` or `SCHEDULED` status.
     * @param programId    The ID of the base [loyalty program](entity:LoyaltyProgram).
     * @return Response from the API call
     */
    LoyaltyApi.prototype.cancelLoyaltyPromotion = function (promotionId, programId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    promotionId: [promotionId, (0, schema_1.string)()],
                    programId: [programId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["/v2/loyalty/programs/", "/promotions/", "/cancel"], ["/v2/loyalty/programs/", "/promotions/", "/cancel"])), mapped.programId, mapped.promotionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelLoyaltyPromotionResponse_1.cancelLoyaltyPromotionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a loyalty reward. In the process, the endpoint does following:
     *
     * - Uses the `reward_tier_id` in the request to determine the number of points
     * to lock for this reward.
     * - If the request includes `order_id`, it adds the reward and related discount to the order.
     *
     * After a reward is created, the points are locked and
     * not available for the buyer to redeem another reward.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.createLoyaltyReward = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/loyalty/rewards');
                mapped = req.prepareArgs({
                    body: [body, createLoyaltyRewardRequest_1.createLoyaltyRewardRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createLoyaltyRewardResponse_1.createLoyaltyRewardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns
     * results for all loyalty accounts.
     * If you include a `query` object, `loyalty_account_id` is required and `status` is  optional.
     *
     * If you know a reward ID, use the
     * [RetrieveLoyaltyReward]($e/Loyalty/RetrieveLoyaltyReward) endpoint.
     *
     * Search results are sorted by `updated_at` in descending order.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.searchLoyaltyRewards = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/loyalty/rewards/search');
                mapped = req.prepareArgs({
                    body: [body, searchLoyaltyRewardsRequest_1.searchLoyaltyRewardsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchLoyaltyRewardsResponse_1.searchLoyaltyRewardsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a loyalty reward by doing the following:
     *
     * - Returns the loyalty points back to the loyalty account.
     * - If an order ID was specified when the reward was created
     * (see [CreateLoyaltyReward]($e/Loyalty/CreateLoyaltyReward)),
     * it updates the order by removing the reward and related
     * discounts.
     *
     * You cannot delete a reward that has reached the terminal state (REDEEMED).
     *
     * @param rewardId  The ID of the [loyalty reward](entity:LoyaltyReward) to delete.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.deleteLoyaltyReward = function (rewardId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ rewardId: [rewardId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["/v2/loyalty/rewards/", ""], ["/v2/loyalty/rewards/", ""])), mapped.rewardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteLoyaltyRewardResponse_1.deleteLoyaltyRewardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a loyalty reward.
     *
     * @param rewardId  The ID of the [loyalty reward](entity:LoyaltyReward) to retrieve.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.retrieveLoyaltyReward = function (rewardId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ rewardId: [rewardId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["/v2/loyalty/rewards/", ""], ["/v2/loyalty/rewards/", ""])), mapped.rewardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLoyaltyRewardResponse_1.retrieveLoyaltyRewardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Redeems a loyalty reward.
     *
     * The endpoint sets the reward to the `REDEEMED` terminal state.
     *
     * If you are using your own order processing system (not using the
     * Orders API), you call this endpoint after the buyer paid for the
     * purchase.
     *
     * After the reward reaches the terminal state, it cannot be deleted.
     * In other words, points used for the reward cannot be returned
     * to the account.
     *
     * @param rewardId     The ID of the [loyalty reward](entity:LoyaltyReward) to
     *                                                          redeem.
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    LoyaltyApi.prototype.redeemLoyaltyReward = function (rewardId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    rewardId: [rewardId, (0, schema_1.string)()],
                    body: [body, redeemLoyaltyRewardRequest_1.redeemLoyaltyRewardRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["/v2/loyalty/rewards/", "/redeem"], ["/v2/loyalty/rewards/", "/redeem"])), mapped.rewardId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(redeemLoyaltyRewardResponse_1.redeemLoyaltyRewardResponseSchema, requestOptions)];
            });
        });
    };
    return LoyaltyApi;
}(baseApi_1.BaseApi));
exports.LoyaltyApi = LoyaltyApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=loyaltyApi.js.map