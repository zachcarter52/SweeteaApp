"use strict";
exports.__esModule = true;
exports.ApplePayApi = void 0;
var tslib_1 = require("tslib");
var registerDomainRequest_1 = require("../models/registerDomainRequest");
var registerDomainResponse_1 = require("../models/registerDomainResponse");
var baseApi_1 = require("./baseApi");
var ApplePayApi = /** @class */ (function (_super) {
    tslib_1.__extends(ApplePayApi, _super);
    function ApplePayApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Activates a domain for use with Apple Pay on the Web and Square. A validation
     * is performed on this domain by Apple to ensure that it is properly set up as
     * an Apple Pay enabled domain.
     *
     * This endpoint provides an easy way for platform developers to bulk activate
     * Apple Pay on the Web with Square for merchants using their platform.
     *
     * Note: You will need to host a valid domain verification file on your domain to support Apple Pay.
     * The
     * current version of this file is always available at https://app.squareup.com/digital-wallets/apple-
     * pay/apple-developer-merchantid-domain-association,
     * and should be hosted at `.well_known/apple-developer-merchantid-domain-association` on your
     * domain.  This file is subject to change; we strongly recommend checking for updates regularly and
     * avoiding
     * long-lived caches that might not keep in sync with the correct file version.
     *
     * To learn more about the Web Payments SDK and how to add Apple Pay, see [Take an Apple Pay
     * Payment](https://developer.squareup.com/docs/web-payments/apple-pay).
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    ApplePayApi.prototype.registerDomain = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/apple-pay/domains');
                mapped = req.prepareArgs({
                    body: [body, registerDomainRequest_1.registerDomainRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(registerDomainResponse_1.registerDomainResponseSchema, requestOptions)];
            });
        });
    };
    return ApplePayApi;
}(baseApi_1.BaseApi));
exports.ApplePayApi = ApplePayApi;
//# sourceMappingURL=applePayApi.js.map