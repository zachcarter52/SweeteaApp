"use strict";
exports.__esModule = true;
exports.MobileAuthorizationApi = void 0;
var tslib_1 = require("tslib");
var createMobileAuthorizationCodeRequest_1 = require("../models/createMobileAuthorizationCodeRequest");
var createMobileAuthorizationCodeResponse_1 = require("../models/createMobileAuthorizationCodeResponse");
var baseApi_1 = require("./baseApi");
var MobileAuthorizationApi = /** @class */ (function (_super) {
    tslib_1.__extends(MobileAuthorizationApi, _super);
    function MobileAuthorizationApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Generates code to authorize a mobile application to connect to a Square card reader.
     *
     * Authorization codes are one-time-use codes and expire 60 minutes after being issued.
     *
     * __Important:__ The `Authorization` header you provide to this endpoint must have the following
     * format:
     *
     * ```
     * Authorization: Bearer ACCESS_TOKEN
     * ```
     *
     * Replace `ACCESS_TOKEN` with a
     * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-
     * tokens).
     *
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     */
    MobileAuthorizationApi.prototype.createMobileAuthorizationCode = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/mobile/authorization-code');
                mapped = req.prepareArgs({
                    body: [body, createMobileAuthorizationCodeRequest_1.createMobileAuthorizationCodeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createMobileAuthorizationCodeResponse_1.createMobileAuthorizationCodeResponseSchema, requestOptions)];
            });
        });
    };
    return MobileAuthorizationApi;
}(baseApi_1.BaseApi));
exports.MobileAuthorizationApi = MobileAuthorizationApi;
//# sourceMappingURL=mobileAuthorizationApi.js.map