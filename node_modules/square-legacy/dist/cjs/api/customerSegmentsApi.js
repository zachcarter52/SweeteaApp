"use strict";
exports.__esModule = true;
exports.CustomerSegmentsApi = void 0;
var tslib_1 = require("tslib");
var listCustomerSegmentsResponse_1 = require("../models/listCustomerSegmentsResponse");
var retrieveCustomerSegmentResponse_1 = require("../models/retrieveCustomerSegmentResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CustomerSegmentsApi = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerSegmentsApi, _super);
    function CustomerSegmentsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the list of customer segments of a business.
     *
     * @param cursor A pagination cursor returned by previous calls to `ListCustomerSegments`. This cursor is
     *                         used to retrieve the next set of query results.  For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  The maximum number of results to return in a single page. This limit is advisory. The
     *                         response might contain more or fewer results. If the specified limit is less than 1 or
     *                         greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The
     *                         default value is 50.  For more information, see [Pagination](https://developer.squareup.
     *                         com/docs/build-basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    CustomerSegmentsApi.prototype.listCustomerSegments = function (cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/customers/segments');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCustomerSegmentsResponse_1.listCustomerSegmentsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a specific customer segment as identified by the `segment_id` value.
     *
     * @param segmentId  The Square-issued ID of the customer segment.
     * @return Response from the API call
     */
    CustomerSegmentsApi.prototype.retrieveCustomerSegment = function (segmentId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ segmentId: [segmentId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/customers/segments/", ""], ["/v2/customers/segments/", ""])), mapped.segmentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCustomerSegmentResponse_1.retrieveCustomerSegmentResponseSchema, requestOptions)];
            });
        });
    };
    return CustomerSegmentsApi;
}(baseApi_1.BaseApi));
exports.CustomerSegmentsApi = CustomerSegmentsApi;
var templateObject_1;
//# sourceMappingURL=customerSegmentsApi.js.map