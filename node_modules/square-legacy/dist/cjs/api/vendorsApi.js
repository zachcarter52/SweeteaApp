"use strict";
exports.__esModule = true;
exports.VendorsApi = void 0;
var tslib_1 = require("tslib");
var bulkCreateVendorsRequest_1 = require("../models/bulkCreateVendorsRequest");
var bulkCreateVendorsResponse_1 = require("../models/bulkCreateVendorsResponse");
var bulkRetrieveVendorsRequest_1 = require("../models/bulkRetrieveVendorsRequest");
var bulkRetrieveVendorsResponse_1 = require("../models/bulkRetrieveVendorsResponse");
var bulkUpdateVendorsRequest_1 = require("../models/bulkUpdateVendorsRequest");
var bulkUpdateVendorsResponse_1 = require("../models/bulkUpdateVendorsResponse");
var createVendorRequest_1 = require("../models/createVendorRequest");
var createVendorResponse_1 = require("../models/createVendorResponse");
var retrieveVendorResponse_1 = require("../models/retrieveVendorResponse");
var searchVendorsRequest_1 = require("../models/searchVendorsRequest");
var searchVendorsResponse_1 = require("../models/searchVendorsResponse");
var updateVendorRequest_1 = require("../models/updateVendorRequest");
var updateVendorResponse_1 = require("../models/updateVendorResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var VendorsApi = /** @class */ (function (_super) {
    tslib_1.__extends(VendorsApi, _super);
    function VendorsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates one or more [Vendor]($m/Vendor) objects to represent suppliers to a seller.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    VendorsApi.prototype.bulkCreateVendors = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/vendors/bulk-create');
                mapped = req.prepareArgs({
                    body: [body, bulkCreateVendorsRequest_1.bulkCreateVendorsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkCreateVendorsResponse_1.bulkCreateVendorsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves one or more vendors of specified [Vendor]($m/Vendor) IDs.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    VendorsApi.prototype.bulkRetrieveVendors = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/vendors/bulk-retrieve');
                mapped = req.prepareArgs({
                    body: [body, bulkRetrieveVendorsRequest_1.bulkRetrieveVendorsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkRetrieveVendorsResponse_1.bulkRetrieveVendorsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates one or more of existing [Vendor]($m/Vendor) objects as suppliers to a seller.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    VendorsApi.prototype.bulkUpdateVendors = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT', '/v2/vendors/bulk-update');
                mapped = req.prepareArgs({
                    body: [body, bulkUpdateVendorsRequest_1.bulkUpdateVendorsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkUpdateVendorsResponse_1.bulkUpdateVendorsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a single [Vendor]($m/Vendor) object to represent a supplier to a seller.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    VendorsApi.prototype.createVendor = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/vendors/create');
                mapped = req.prepareArgs({ body: [body, createVendorRequest_1.createVendorRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createVendorResponse_1.createVendorResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for vendors using a filter against supported [Vendor]($m/Vendor) properties and a supported
     * sorter.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    VendorsApi.prototype.searchVendors = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/vendors/search');
                mapped = req.prepareArgs({
                    body: [body, searchVendorsRequest_1.searchVendorsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchVendorsResponse_1.searchVendorsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves the vendor of a specified [Vendor]($m/Vendor) ID.
     *
     * @param vendorId  ID of the [Vendor](entity:Vendor) to retrieve.
     * @return Response from the API call
     */
    VendorsApi.prototype.retrieveVendor = function (vendorId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ vendorId: [vendorId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/vendors/", ""], ["/v2/vendors/", ""])), mapped.vendorId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveVendorResponse_1.retrieveVendorResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates an existing [Vendor]($m/Vendor) object as a supplier to a seller.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @param vendorId
     * @return Response from the API call
     */
    VendorsApi.prototype.updateVendor = function (body, vendorId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    body: [body, updateVendorRequest_1.updateVendorRequestSchema],
                    vendorId: [vendorId, (0, schema_1.string)()]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/vendors/", ""], ["/v2/vendors/", ""])), mapped.vendorId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateVendorResponse_1.updateVendorResponseSchema, requestOptions)];
            });
        });
    };
    return VendorsApi;
}(baseApi_1.BaseApi));
exports.VendorsApi = VendorsApi;
var templateObject_1, templateObject_2;
//# sourceMappingURL=vendorsApi.js.map