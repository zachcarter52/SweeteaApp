"use strict";
exports.__esModule = true;
exports.SitesApi = void 0;
var tslib_1 = require("tslib");
var listSitesResponse_1 = require("../models/listSitesResponse");
var baseApi_1 = require("./baseApi");
var SitesApi = /** @class */ (function (_super) {
    tslib_1.__extends(SitesApi, _super);
    function SitesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists the Square Online sites that belong to a seller. Sites are listed in descending order by the
     * `created_at` date.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @return Response from the API call
     */
    SitesApi.prototype.listSites = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/sites');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listSitesResponse_1.listSitesResponseSchema, requestOptions)];
            });
        });
    };
    return SitesApi;
}(baseApi_1.BaseApi));
exports.SitesApi = SitesApi;
//# sourceMappingURL=sitesApi.js.map