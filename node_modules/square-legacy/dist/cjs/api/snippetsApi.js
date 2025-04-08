"use strict";
exports.__esModule = true;
exports.SnippetsApi = void 0;
var tslib_1 = require("tslib");
var deleteSnippetResponse_1 = require("../models/deleteSnippetResponse");
var retrieveSnippetResponse_1 = require("../models/retrieveSnippetResponse");
var upsertSnippetRequest_1 = require("../models/upsertSnippetRequest");
var upsertSnippetResponse_1 = require("../models/upsertSnippetResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var SnippetsApi = /** @class */ (function (_super) {
    tslib_1.__extends(SnippetsApi, _super);
    function SnippetsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes your snippet from a Square Online site.
     *
     * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @param siteId  The ID of the site that contains the snippet.
     * @return Response from the API call
     */
    SnippetsApi.prototype.deleteSnippet = function (siteId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ siteId: [siteId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/sites/", "/snippet"], ["/v2/sites/", "/snippet"])), mapped.siteId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteSnippetResponse_1.deleteSnippetResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet
     * applications, but you can retrieve only the snippet that was added by your application.
     *
     * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @param siteId  The ID of the site that contains the snippet.
     * @return Response from the API call
     */
    SnippetsApi.prototype.retrieveSnippet = function (siteId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ siteId: [siteId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/sites/", "/snippet"], ["/v2/sites/", "/snippet"])), mapped.siteId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveSnippetResponse_1.retrieveSnippetResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Adds a snippet to a Square Online site or updates the existing snippet on the site.
     * The snippet code is appended to the end of the `head` element on every page of the site, except
     * checkout pages. A snippet application can add one snippet to a given site.
     *
     * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @param siteId       The ID of the site where you want to add or update the snippet.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    SnippetsApi.prototype.upsertSnippet = function (siteId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    siteId: [siteId, (0, schema_1.string)()],
                    body: [body, upsertSnippetRequest_1.upsertSnippetRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/sites/", "/snippet"], ["/v2/sites/", "/snippet"])), mapped.siteId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(upsertSnippetResponse_1.upsertSnippetResponseSchema, requestOptions)];
            });
        });
    };
    return SnippetsApi;
}(baseApi_1.BaseApi));
exports.SnippetsApi = SnippetsApi;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=snippetsApi.js.map