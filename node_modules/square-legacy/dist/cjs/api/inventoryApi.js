"use strict";
exports.__esModule = true;
exports.InventoryApi = void 0;
var tslib_1 = require("tslib");
var batchChangeInventoryRequest_1 = require("../models/batchChangeInventoryRequest");
var batchChangeInventoryResponse_1 = require("../models/batchChangeInventoryResponse");
var batchRetrieveInventoryChangesRequest_1 = require("../models/batchRetrieveInventoryChangesRequest");
var batchRetrieveInventoryChangesResponse_1 = require("../models/batchRetrieveInventoryChangesResponse");
var batchRetrieveInventoryCountsRequest_1 = require("../models/batchRetrieveInventoryCountsRequest");
var batchRetrieveInventoryCountsResponse_1 = require("../models/batchRetrieveInventoryCountsResponse");
var retrieveInventoryAdjustmentResponse_1 = require("../models/retrieveInventoryAdjustmentResponse");
var retrieveInventoryChangesResponse_1 = require("../models/retrieveInventoryChangesResponse");
var retrieveInventoryCountResponse_1 = require("../models/retrieveInventoryCountResponse");
var retrieveInventoryPhysicalCountResponse_1 = require("../models/retrieveInventoryPhysicalCountResponse");
var retrieveInventoryTransferResponse_1 = require("../models/retrieveInventoryTransferResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var InventoryApi = /** @class */ (function (_super) {
    tslib_1.__extends(InventoryApi, _super);
    function InventoryApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Deprecated version of [RetrieveInventoryAdjustment](api-endpoint:Inventory-
     * RetrieveInventoryAdjustment) after the endpoint URL
     * is updated to conform to the standard convention.
     *
     * @param adjustmentId  ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve.
     * @return Response from the API call
     * @deprecated
     */
    InventoryApi.prototype.deprecatedRetrieveInventoryAdjustment = function (adjustmentId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ adjustmentId: [adjustmentId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/inventory/adjustment/", ""], ["/v2/inventory/adjustment/", ""])), mapped.adjustmentId);
                req.deprecated('InventoryApi.deprecatedRetrieveInventoryAdjustment');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryAdjustmentResponse_1.retrieveInventoryAdjustmentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns the [InventoryAdjustment]($m/InventoryAdjustment) object
     * with the provided `adjustment_id`.
     *
     * @param adjustmentId  ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve.
     * @return Response from the API call
     */
    InventoryApi.prototype.retrieveInventoryAdjustment = function (adjustmentId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ adjustmentId: [adjustmentId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/inventory/adjustments/", ""], ["/v2/inventory/adjustments/", ""])), mapped.adjustmentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryAdjustmentResponse_1.retrieveInventoryAdjustmentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deprecated version of [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) after the
     * endpoint URL
     * is updated to conform to the standard convention.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     * @deprecated
     */
    InventoryApi.prototype.deprecatedBatchChangeInventory = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/inventory/batch-change');
                mapped = req.prepareArgs({
                    body: [body, batchChangeInventoryRequest_1.batchChangeInventoryRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.deprecated('InventoryApi.deprecatedBatchChangeInventory');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchChangeInventoryResponse_1.batchChangeInventoryResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deprecated version of [BatchRetrieveInventoryChanges](api-endpoint:Inventory-
     * BatchRetrieveInventoryChanges) after the endpoint URL
     * is updated to conform to the standard convention.
     *
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    InventoryApi.prototype.deprecatedBatchRetrieveInventoryChanges = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/inventory/batch-retrieve-changes');
                mapped = req.prepareArgs({
                    body: [body, batchRetrieveInventoryChangesRequest_1.batchRetrieveInventoryChangesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.deprecated('InventoryApi.deprecatedBatchRetrieveInventoryChanges');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchRetrieveInventoryChangesResponse_1.batchRetrieveInventoryChangesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deprecated version of [BatchRetrieveInventoryCounts](api-endpoint:Inventory-
     * BatchRetrieveInventoryCounts) after the endpoint URL
     * is updated to conform to the standard convention.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                   request.  See the corresponding object
     *                                                                   definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    InventoryApi.prototype.deprecatedBatchRetrieveInventoryCounts = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/inventory/batch-retrieve-counts');
                mapped = req.prepareArgs({
                    body: [body, batchRetrieveInventoryCountsRequest_1.batchRetrieveInventoryCountsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.deprecated('InventoryApi.deprecatedBatchRetrieveInventoryCounts');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchRetrieveInventoryCountsResponse_1.batchRetrieveInventoryCountsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Applies adjustments and counts to the provided item quantities.
     *
     * On success: returns the current calculated counts for all objects
     * referenced in the request.
     * On failure: returns a list of related errors.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    InventoryApi.prototype.batchChangeInventory = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/inventory/changes/batch-create');
                mapped = req.prepareArgs({
                    body: [body, batchChangeInventoryRequest_1.batchChangeInventoryRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchChangeInventoryResponse_1.batchChangeInventoryResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns historical physical counts and adjustments based on the
     * provided filter criteria.
     *
     * Results are paginated and sorted in ascending order according their
     * `occurred_at` timestamp (oldest first).
     *
     * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
     * that cannot be handled by other, simpler endpoints.
     *
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     */
    InventoryApi.prototype.batchRetrieveInventoryChanges = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/inventory/changes/batch-retrieve');
                mapped = req.prepareArgs({
                    body: [body, batchRetrieveInventoryChangesRequest_1.batchRetrieveInventoryChangesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchRetrieveInventoryChangesResponse_1.batchRetrieveInventoryChangesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns current counts for the provided
     * [CatalogObject]($m/CatalogObject)s at the requested
     * [Location]($m/Location)s.
     *
     * Results are paginated and sorted in descending order according to their
     * `calculated_at` timestamp (newest first).
     *
     * When `updated_after` is specified, only counts that have changed since that
     * time (based on the server timestamp for the most recent change) are
     * returned. This allows clients to perform a "sync" operation, for example
     * in response to receiving a Webhook notification.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                   request.  See the corresponding object
     *                                                                   definition for field details.
     * @return Response from the API call
     */
    InventoryApi.prototype.batchRetrieveInventoryCounts = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/inventory/counts/batch-retrieve');
                mapped = req.prepareArgs({
                    body: [body, batchRetrieveInventoryCountsRequest_1.batchRetrieveInventoryCountsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchRetrieveInventoryCountsResponse_1.batchRetrieveInventoryCountsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deprecated version of [RetrieveInventoryPhysicalCount](api-endpoint:Inventory-
     * RetrieveInventoryPhysicalCount) after the endpoint URL
     * is updated to conform to the standard convention.
     *
     * @param physicalCountId   ID of the [InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve.
     * @return Response from the API call
     * @deprecated
     */
    InventoryApi.prototype.deprecatedRetrieveInventoryPhysicalCount = function (physicalCountId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    physicalCountId: [physicalCountId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/inventory/physical-count/", ""], ["/v2/inventory/physical-count/", ""])), mapped.physicalCountId);
                req.deprecated('InventoryApi.deprecatedRetrieveInventoryPhysicalCount');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryPhysicalCountResponse_1.retrieveInventoryPhysicalCountResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns the [InventoryPhysicalCount]($m/InventoryPhysicalCount)
     * object with the provided `physical_count_id`.
     *
     * @param physicalCountId   ID of the [InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve.
     * @return Response from the API call
     */
    InventoryApi.prototype.retrieveInventoryPhysicalCount = function (physicalCountId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    physicalCountId: [physicalCountId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/inventory/physical-counts/", ""], ["/v2/inventory/physical-counts/", ""])), mapped.physicalCountId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryPhysicalCountResponse_1.retrieveInventoryPhysicalCountResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns the [InventoryTransfer]($m/InventoryTransfer) object
     * with the provided `transfer_id`.
     *
     * @param transferId  ID of the [InventoryTransfer](entity:InventoryTransfer) to retrieve.
     * @return Response from the API call
     */
    InventoryApi.prototype.retrieveInventoryTransfer = function (transferId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ transferId: [transferId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/inventory/transfers/", ""], ["/v2/inventory/transfers/", ""])), mapped.transferId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryTransferResponse_1.retrieveInventoryTransferResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves the current calculated stock count for a given
     * [CatalogObject]($m/CatalogObject) at a given set of
     * [Location]($m/Location)s. Responses are paginated and unsorted.
     * For more sophisticated queries, use a batch endpoint.
     *
     * @param catalogObjectId   ID of the [CatalogObject](entity:CatalogObject) to retrieve.
     * @param locationIds       The [Location](entity:Location) IDs to look up as a comma-separated list. An
     *                                    empty list queries all locations.
     * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for the original query.  See the
     *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
     *                                    guide for more information.
     * @return Response from the API call
     */
    InventoryApi.prototype.retrieveInventoryCount = function (catalogObjectId, locationIds, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    catalogObjectId: [catalogObjectId, (0, schema_1.string)()],
                    locationIds: [locationIds, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('location_ids', mapped.locationIds);
                req.query('cursor', mapped.cursor);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/inventory/", ""], ["/v2/inventory/", ""])), mapped.catalogObjectId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryCountResponse_1.retrieveInventoryCountResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a set of physical counts and inventory adjustments for the
     * provided [CatalogObject](entity:CatalogObject) at the requested
     * [Location](entity:Location)s.
     *
     * You can achieve the same result by calling [BatchRetrieveInventoryChanges](api-endpoint:Inventory-
     * BatchRetrieveInventoryChanges)
     * and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.
     *
     * Results are paginated and sorted in descending order according to their
     * `occurred_at` timestamp (newest first).
     *
     * There are no limits on how far back the caller can page. This endpoint can be
     * used to display recent changes for a specific item. For more
     * sophisticated queries, use a batch endpoint.
     *
     * @param catalogObjectId   ID of the [CatalogObject](entity:CatalogObject) to retrieve.
     * @param locationIds       The [Location](entity:Location) IDs to look up as a comma-separated list. An
     *                                    empty list queries all locations.
     * @param cursor            A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for the original query.  See the
     *                                    [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination)
     *                                    guide for more information.
     * @return Response from the API call
     * @deprecated
     */
    InventoryApi.prototype.retrieveInventoryChanges = function (catalogObjectId, locationIds, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    catalogObjectId: [catalogObjectId, (0, schema_1.string)()],
                    locationIds: [locationIds, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('location_ids', mapped.locationIds);
                req.query('cursor', mapped.cursor);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/inventory/", "/changes"], ["/v2/inventory/", "/changes"])), mapped.catalogObjectId);
                req.deprecated('InventoryApi.retrieveInventoryChanges');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveInventoryChangesResponse_1.retrieveInventoryChangesResponseSchema, requestOptions)];
            });
        });
    };
    return InventoryApi;
}(baseApi_1.BaseApi));
exports.InventoryApi = InventoryApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=inventoryApi.js.map