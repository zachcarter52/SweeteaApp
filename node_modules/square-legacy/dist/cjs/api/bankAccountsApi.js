"use strict";
exports.__esModule = true;
exports.BankAccountsApi = void 0;
var tslib_1 = require("tslib");
var getBankAccountByV1IdResponse_1 = require("../models/getBankAccountByV1IdResponse");
var getBankAccountResponse_1 = require("../models/getBankAccountResponse");
var listBankAccountsResponse_1 = require("../models/listBankAccountsResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var BankAccountsApi = /** @class */ (function (_super) {
    tslib_1.__extends(BankAccountsApi, _super);
    function BankAccountsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a list of [BankAccount]($m/BankAccount) objects linked to a Square account.
     *
     * @param cursor      The pagination cursor returned by a previous call to this endpoint. Use it in the
     *                              next `ListBankAccounts` request to retrieve the next set  of results.  See the
     *                              [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
     *                              for more information.
     * @param limit       Upper limit on the number of bank accounts to return in the response.  Currently,
     *                              1000 is the largest supported limit. You can specify a limit  of up to 1000 bank
     *                              accounts. This is also the default limit.
     * @param locationId  Location ID. You can specify this optional filter  to retrieve only the linked bank
     *                              accounts belonging to a specific location.
     * @return Response from the API call
     */
    BankAccountsApi.prototype.listBankAccounts = function (cursor, limit, locationId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/bank-accounts');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.query('location_id', mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listBankAccountsResponse_1.listBankAccountsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns details of a [BankAccount]($m/BankAccount) identified by V1 bank account ID.
     *
     * @param v1BankAccountId    Connect V1 ID of the desired `BankAccount`. For more information, see
     *                                     [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https:
     *                                     //developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-
     *                                     using-an-id-issued-by-v1-bank-accounts-api).
     * @return Response from the API call
     */
    BankAccountsApi.prototype.getBankAccountByV1Id = function (v1BankAccountId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    v1BankAccountId: [v1BankAccountId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/bank-accounts/by-v1-id/", ""], ["/v2/bank-accounts/by-v1-id/", ""])), mapped.v1BankAccountId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getBankAccountByV1IdResponse_1.getBankAccountByV1IdResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns details of a [BankAccount]($m/BankAccount)
     * linked to a Square account.
     *
     * @param bankAccountId   Square-issued ID of the desired `BankAccount`.
     * @return Response from the API call
     */
    BankAccountsApi.prototype.getBankAccount = function (bankAccountId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    bankAccountId: [bankAccountId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/bank-accounts/", ""], ["/v2/bank-accounts/", ""])), mapped.bankAccountId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getBankAccountResponse_1.getBankAccountResponseSchema, requestOptions)];
            });
        });
    };
    return BankAccountsApi;
}(baseApi_1.BaseApi));
exports.BankAccountsApi = BankAccountsApi;
var templateObject_1, templateObject_2;
//# sourceMappingURL=bankAccountsApi.js.map