"use strict";
exports.__esModule = true;
exports.OAuthApi = void 0;
var tslib_1 = require("tslib");
var obtainTokenRequest_1 = require("../models/obtainTokenRequest");
var obtainTokenResponse_1 = require("../models/obtainTokenResponse");
var retrieveTokenStatusResponse_1 = require("../models/retrieveTokenStatusResponse");
var revokeTokenRequest_1 = require("../models/revokeTokenRequest");
var revokeTokenResponse_1 = require("../models/revokeTokenResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var OAuthApi = /** @class */ (function (_super) {
    tslib_1.__extends(OAuthApi, _super);
    function OAuthApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Revokes an access token generated with the OAuth flow.
     *
     * If an account has more than one OAuth access token for your application, this
     * endpoint revokes all of them, regardless of which token you specify.
     *
     * __Important:__ The `Authorization` header for this endpoint must have the
     * following format:
     *
     * ```
     * Authorization: Client APPLICATION_SECRET
     * ```
     *
     * Replace `APPLICATION_SECRET` with the application secret on the **OAuth**
     * page for your application in the Developer Dashboard.
     *
     * @param body          An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @param authorization Client APPLICATION_SECRET
     * @return Response from the API call
     */
    OAuthApi.prototype.revokeToken = function (body, authorization, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/oauth2/revoke');
                mapped = req.prepareArgs({
                    body: [body, revokeTokenRequest_1.revokeTokenRequestSchema],
                    authorization: [authorization, (0, schema_1.string)()]
                });
                req.header('Content-Type', 'application/json');
                req.header('Authorization', mapped.authorization);
                req.json(mapped.body);
                req.authenticate(false);
                return [2 /*return*/, req.callAsJson(revokeTokenResponse_1.revokeTokenResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns an OAuth access token and a refresh token unless the
     * `short_lived` parameter is set to `true`, in which case the endpoint
     * returns only an access token.
     *
     * The `grant_type` parameter specifies the type of OAuth request. If
     * `grant_type` is `authorization_code`, you must include the authorization
     * code you received when a seller granted you authorization. If `grant_type`
     * is `refresh_token`, you must provide a valid refresh token. If you're using
     * an old version of the Square APIs (prior to March 13, 2019), `grant_type`
     * can be `migration_token` and you must provide a valid migration token.
     *
     * You can use the `scopes` parameter to limit the set of permissions granted
     * to the access token and refresh token. You can use the `short_lived` parameter
     * to create an access token that expires in 24 hours.
     *
     * __Note:__ OAuth tokens should be encrypted and stored on a secure server.
     * Application clients should never interact directly with OAuth tokens.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    OAuthApi.prototype.obtainToken = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/oauth2/token');
                mapped = req.prepareArgs({ body: [body, obtainTokenRequest_1.obtainTokenRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate(false);
                return [2 /*return*/, req.callAsJson(obtainTokenResponse_1.obtainTokenResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns information about an [OAuth access token](https://developer.squareup.com/docs/build-
     * basics/access-tokens#get-an-oauth-access-token) or an application’s [personal access token](https:
     * //developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token).
     *
     * Add the access token to the Authorization header of the request.
     *
     * __Important:__ The `Authorization` header you provide to this endpoint must have the following
     * format:
     *
     * ```
     * Authorization: Bearer ACCESS_TOKEN
     * ```
     *
     * where `ACCESS_TOKEN` is a
     * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-
     * tokens).
     *
     * If the access token is expired or not a valid access token, the endpoint returns an `UNAUTHORIZED`
     * error.
     *
     * @return Response from the API call
     */
    OAuthApi.prototype.retrieveTokenStatus = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/oauth2/token/status');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveTokenStatusResponse_1.retrieveTokenStatusResponseSchema, requestOptions)];
            });
        });
    };
    return OAuthApi;
}(baseApi_1.BaseApi));
exports.OAuthApi = OAuthApi;
//# sourceMappingURL=oAuthApi.js.map