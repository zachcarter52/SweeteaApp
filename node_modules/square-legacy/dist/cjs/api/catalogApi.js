"use strict";
exports.__esModule = true;
exports.CatalogApi = void 0;
var tslib_1 = require("tslib");
var batchDeleteCatalogObjectsRequest_1 = require("../models/batchDeleteCatalogObjectsRequest");
var batchDeleteCatalogObjectsResponse_1 = require("../models/batchDeleteCatalogObjectsResponse");
var batchRetrieveCatalogObjectsRequest_1 = require("../models/batchRetrieveCatalogObjectsRequest");
var batchRetrieveCatalogObjectsResponse_1 = require("../models/batchRetrieveCatalogObjectsResponse");
var batchUpsertCatalogObjectsRequest_1 = require("../models/batchUpsertCatalogObjectsRequest");
var batchUpsertCatalogObjectsResponse_1 = require("../models/batchUpsertCatalogObjectsResponse");
var catalogInfoResponse_1 = require("../models/catalogInfoResponse");
var createCatalogImageRequest_1 = require("../models/createCatalogImageRequest");
var createCatalogImageResponse_1 = require("../models/createCatalogImageResponse");
var deleteCatalogObjectResponse_1 = require("../models/deleteCatalogObjectResponse");
var listCatalogResponse_1 = require("../models/listCatalogResponse");
var retrieveCatalogObjectResponse_1 = require("../models/retrieveCatalogObjectResponse");
var searchCatalogItemsRequest_1 = require("../models/searchCatalogItemsRequest");
var searchCatalogItemsResponse_1 = require("../models/searchCatalogItemsResponse");
var searchCatalogObjectsRequest_1 = require("../models/searchCatalogObjectsRequest");
var searchCatalogObjectsResponse_1 = require("../models/searchCatalogObjectsResponse");
var updateCatalogImageRequest_1 = require("../models/updateCatalogImageRequest");
var updateCatalogImageResponse_1 = require("../models/updateCatalogImageResponse");
var updateItemModifierListsRequest_1 = require("../models/updateItemModifierListsRequest");
var updateItemModifierListsResponse_1 = require("../models/updateItemModifierListsResponse");
var updateItemTaxesRequest_1 = require("../models/updateItemTaxesRequest");
var updateItemTaxesResponse_1 = require("../models/updateItemTaxesResponse");
var upsertCatalogObjectRequest_1 = require("../models/upsertCatalogObjectRequest");
var upsertCatalogObjectResponse_1 = require("../models/upsertCatalogObjectResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CatalogApi = /** @class */ (function (_super) {
    tslib_1.__extends(CatalogApi, _super);
    function CatalogApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Deletes a set of [CatalogItem]($m/CatalogItem)s based on the
     * provided list of target IDs and returns a set of successfully deleted IDs in
     * the response. Deletion is a cascading event such that all children of the
     * targeted object are also deleted. For example, deleting a CatalogItem will
     * also delete all of its [CatalogItemVariation]($m/CatalogItemVariation)
     * children.
     *
     * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
     * IDs can be deleted. The response will only include IDs that were
     * actually deleted.
     *
     * To ensure consistency, only one delete request is processed at a time per seller account.
     * While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
     * delete requests are rejected with the `429` error code.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    CatalogApi.prototype.batchDeleteCatalogObjects = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/batch-delete');
                mapped = req.prepareArgs({
                    body: [body, batchDeleteCatalogObjectsRequest_1.batchDeleteCatalogObjectsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchDeleteCatalogObjectsResponse_1.batchDeleteCatalogObjectsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a set of objects based on the provided ID.
     * Each [CatalogItem]($m/CatalogItem) returned in the set includes all of its
     * child information including: all of its
     * [CatalogItemVariation]($m/CatalogItemVariation) objects, references to
     * its [CatalogModifierList]($m/CatalogModifierList) objects, and the ids of
     * any [CatalogTax]($m/CatalogTax) objects that apply to it.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                  request.  See the corresponding object definition
     *                                                                  for field details.
     * @return Response from the API call
     */
    CatalogApi.prototype.batchRetrieveCatalogObjects = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/batch-retrieve');
                mapped = req.prepareArgs({
                    body: [body, batchRetrieveCatalogObjectsRequest_1.batchRetrieveCatalogObjectsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchRetrieveCatalogObjectsResponse_1.batchRetrieveCatalogObjectsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates up to 10,000 target objects based on the provided
     * list of objects. The target objects are grouped into batches and each batch is
     * inserted/updated in an all-or-nothing manner. If an object within a batch is
     * malformed in some way, or violates a database constraint, the entire batch
     * containing that item will be disregarded. However, other batches in the same
     * request may still succeed. Each batch may contain up to 1,000 objects, and
     * batches will be processed in order as long as the total object count for the
     * request (items, variations, modifier lists, discounts, and taxes) is no more
     * than 10,000.
     *
     * To ensure consistency, only one update request is processed at a time per seller account.
     * While one (batch or non-batch) update request is being processed, other (batched and non-batched)
     * update requests are rejected with the `429` error code.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    CatalogApi.prototype.batchUpsertCatalogObjects = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/batch-upsert');
                mapped = req.prepareArgs({
                    body: [body, batchUpsertCatalogObjectsRequest_1.batchUpsertCatalogObjectsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchUpsertCatalogObjectsResponse_1.batchUpsertCatalogObjectsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Uploads an image file to be represented by a [CatalogImage]($m/CatalogImage) object that can be
     * linked to an existing
     * [CatalogObject]($m/CatalogObject) instance. The resulting `CatalogImage` is unattached to any
     * `CatalogObject` if the `object_id`
     * is not specified.
     *
     * This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an
     * image file part in
     * JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
     *
     * @param request
     * @param imageFile
     * @return Response from the API call
     */
    CatalogApi.prototype.createCatalogImage = function (request, imageFile, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/images');
                mapped = req.prepareArgs({
                    request: [request, (0, schema_1.optional)(createCatalogImageRequest_1.createCatalogImageRequestSchema)]
                });
                req.formData({
                    request: JSON.stringify(mapped.request),
                    image_file: imageFile
                });
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCatalogImageResponse_1.createCatalogImageResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Uploads a new image file to replace the existing one in the specified
     * [CatalogImage]($m/CatalogImage) object.
     *
     * This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an
     * image file part in
     * JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
     *
     * @param imageId    The ID of the `CatalogImage` object to update the
     *                                                       encapsulated image file.
     * @param request
     * @param imageFile
     * @return Response from the API call
     */
    CatalogApi.prototype.updateCatalogImage = function (imageId, request, imageFile, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    imageId: [imageId, (0, schema_1.string)()],
                    request: [request, (0, schema_1.optional)(updateCatalogImageRequest_1.updateCatalogImageRequestSchema)]
                });
                req.formData({
                    request: JSON.stringify(mapped.request),
                    image_file: imageFile
                });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/catalog/images/", ""], ["/v2/catalog/images/", ""])), mapped.imageId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateCatalogImageResponse_1.updateCatalogImageResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves information about the Square Catalog API, such as batch size
     * limits that can be used by the `BatchUpsertCatalogObjects` endpoint.
     *
     * @return Response from the API call
     */
    CatalogApi.prototype.catalogInfo = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/catalog/info');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(catalogInfoResponse_1.catalogInfoResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a list of all [CatalogObject]($m/CatalogObject)s of the specified types in the catalog.
     *
     * The `types` parameter is specified as a comma-separated list of the
     * [CatalogObjectType]($m/CatalogObjectType) values,
     * for example, "`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`,
     * `IMAGE`".
     *
     * __Important:__ ListCatalog does not return deleted catalog items. To retrieve
     * deleted catalog items, use [SearchCatalogObjects]($e/Catalog/SearchCatalogObjects)
     * and set the `include_deleted_objects` attribute value to `true`.
     *
     * @param cursor          The pagination cursor returned in the previous response. Leave unset for an
     *                                  initial request. The page size is currently set to be 100. See [Pagination](https:
     *                                  //developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for
     *                                  more information.
     * @param types           An optional case-insensitive, comma-separated list of object types to retrieve.
     *                                  The valid values are defined in the [CatalogObjectType](entity:CatalogObjectType)
     *                                  enum, for example, `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,
     *                                  `MODIFIER`, `MODIFIER_LIST`, `IMAGE`, etc.  If this is unspecified, the operation
     *                                  returns objects of all the top level types at the version of the Square API used
     *                                  to make the request. Object types that are nested onto other object types are not
     *                                  included in the defaults.  At the current API version the default object types
     *                                  are: ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST,  PRICING_RULE, PRODUCT_SET,
     *                                  TIME_PERIOD, MEASUREMENT_UNIT, SUBSCRIPTION_PLAN, ITEM_OPTION,
     *                                  CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS.
     * @param catalogVersion  The specific version of the catalog objects to be included in the response. This
     *                                  allows you to retrieve historical versions of objects. The specified version
     *                                  value is matched against the [CatalogObject]($m/CatalogObject)s' `version`
     *                                  attribute.  If not included, results will be from the current version of the
     *                                  catalog.
     * @return Response from the API call
     */
    CatalogApi.prototype.listCatalog = function (cursor, types, catalogVersion, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/catalog/list');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    types: [types, (0, schema_1.optional)((0, schema_1.string)())],
                    catalogVersion: [catalogVersion, (0, schema_1.optional)((0, schema_1.bigint)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('types', mapped.types);
                req.query('catalog_version', mapped.catalogVersion);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCatalogResponse_1.listCatalogResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a new or updates the specified [CatalogObject]($m/CatalogObject).
     *
     * To ensure consistency, only one update request is processed at a time per seller account.
     * While one (batch or non-batch) update request is being processed, other (batched and non-batched)
     * update requests are rejected with the `429` error code.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    CatalogApi.prototype.upsertCatalogObject = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/object');
                mapped = req.prepareArgs({
                    body: [body, upsertCatalogObjectRequest_1.upsertCatalogObjectRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(upsertCatalogObjectResponse_1.upsertCatalogObjectResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a single [CatalogObject]($m/CatalogObject) based on the
     * provided ID and returns the set of successfully deleted IDs in the response.
     * Deletion is a cascading event such that all children of the targeted object
     * are also deleted. For example, deleting a [CatalogItem]($m/CatalogItem)
     * will also delete all of its
     * [CatalogItemVariation]($m/CatalogItemVariation) children.
     *
     * To ensure consistency, only one delete request is processed at a time per seller account.
     * While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
     * delete requests are rejected with the `429` error code.
     *
     * @param objectId  The ID of the catalog object to be deleted. When an object is deleted, other objects
     *                            in the graph that depend on that object will be deleted as well (for example, deleting
     *                            a catalog item will delete its catalog item variations).
     * @return Response from the API call
     */
    CatalogApi.prototype.deleteCatalogObject = function (objectId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ objectId: [objectId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/catalog/object/", ""], ["/v2/catalog/object/", ""])), mapped.objectId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteCatalogObjectResponse_1.deleteCatalogObjectResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a single [CatalogItem]($m/CatalogItem) as a
     * [CatalogObject]($m/CatalogObject) based on the provided ID. The returned
     * object includes all of the relevant [CatalogItem]($m/CatalogItem)
     * information including: [CatalogItemVariation]($m/CatalogItemVariation)
     * children, references to its
     * [CatalogModifierList]($m/CatalogModifierList) objects, and the ids of
     * any [CatalogTax]($m/CatalogTax) objects that apply to it.
     *
     * @param objectId                      The object ID of any type of catalog objects to be retrieved.
     * @param includeRelatedObjects         If `true`, the response will include additional objects that are
     *                                                 related to the requested objects. Related objects are defined as
     *                                                 any objects referenced by ID by the results in the `objects` field
     *                                                 of the response. These objects are put in the `related_objects`
     *                                                 field. Setting this to `true` is helpful when the objects are
     *                                                 needed for immediate display to a user. This process only goes one
     *                                                 level deep. Objects referenced by the related objects will not be
     *                                                 included. For example,  if the `objects` field of the response
     *                                                 contains a CatalogItem, its associated CatalogCategory objects,
     *                                                 CatalogTax objects, CatalogImage objects and CatalogModifierLists
     *                                                 will be returned in the `related_objects` field of the response.
     *                                                 If the `objects` field of the response contains a
     *                                                 CatalogItemVariation, its parent CatalogItem will be returned in
     *                                                 the `related_objects` field of the response.  Default value:
     *                                                 `false`
     * @param catalogVersion                Requests objects as of a specific version of the catalog. This
     *                                                 allows you to retrieve historical versions of objects. The value
     *                                                 to retrieve a specific version of an object can be found in the
     *                                                 version field of [CatalogObject]($m/CatalogObject)s. If not
     *                                                 included, results will be from the current version of the catalog.
     * @param includeCategoryPathToRoot     Specifies whether or not to include the `path_to_root` list for
     *                                                 each returned category instance. The `path_to_root` list consists
     *                                                 of `CategoryPathToRootNode` objects and specifies the path that
     *                                                 starts with the immediate parent category of the returned category
     *                                                 and ends with its root category. If the returned category is a top-
     *                                                 level category, the `path_to_root` list is empty and is not
     *                                                 returned in the response payload.
     * @return Response from the API call
     */
    CatalogApi.prototype.retrieveCatalogObject = function (objectId, includeRelatedObjects, catalogVersion, includeCategoryPathToRoot, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    objectId: [objectId, (0, schema_1.string)()],
                    includeRelatedObjects: [includeRelatedObjects, (0, schema_1.optional)((0, schema_1.boolean)())],
                    catalogVersion: [catalogVersion, (0, schema_1.optional)((0, schema_1.bigint)())],
                    includeCategoryPathToRoot: [
                        includeCategoryPathToRoot,
                        (0, schema_1.optional)((0, schema_1.boolean)()),
                    ]
                });
                req.query('include_related_objects', mapped.includeRelatedObjects);
                req.query('catalog_version', mapped.catalogVersion);
                req.query('include_category_path_to_root', mapped.includeCategoryPathToRoot);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/catalog/object/", ""], ["/v2/catalog/object/", ""])), mapped.objectId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCatalogObjectResponse_1.retrieveCatalogObjectResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for [CatalogObject]($m/CatalogObject) of any type by matching supported search attribute
     * values,
     * excluding custom attribute values on items or item variations, against one or more of the specified
     * query filters.
     *
     * This (`SearchCatalogObjects`) endpoint differs from the
     * [SearchCatalogItems]($e/Catalog/SearchCatalogItems)
     * endpoint in the following aspects:
     *
     * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects`
     * can search for any type of catalog objects.
     * - `SearchCatalogItems` supports the custom attribute query filters to return items or item
     * variations that contain custom attribute values, where `SearchCatalogObjects` does not.
     * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted
     * items or item variations, whereas `SearchCatalogObjects` does.
     * - The both endpoints have different call conventions, including the query filter formats.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    CatalogApi.prototype.searchCatalogObjects = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/search');
                mapped = req.prepareArgs({
                    body: [body, searchCatalogObjectsRequest_1.searchCatalogObjectsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchCatalogObjectsResponse_1.searchCatalogObjectsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for catalog items or item variations by matching supported search attribute values,
     * including
     * custom attribute values, against one or more of the specified query filters.
     *
     * This (`SearchCatalogItems`) endpoint differs from the
     * [SearchCatalogObjects]($e/Catalog/SearchCatalogObjects)
     * endpoint in the following aspects:
     *
     * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects`
     * can search for any type of catalog objects.
     * - `SearchCatalogItems` supports the custom attribute query filters to return items or item
     * variations that contain custom attribute values, where `SearchCatalogObjects` does not.
     * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted
     * items or item variations, whereas `SearchCatalogObjects` does.
     * - The both endpoints use different call conventions, including the query filter formats.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    CatalogApi.prototype.searchCatalogItems = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/search-catalog-items');
                mapped = req.prepareArgs({
                    body: [body, searchCatalogItemsRequest_1.searchCatalogItemsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchCatalogItemsResponse_1.searchCatalogItemsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates the [CatalogModifierList]($m/CatalogModifierList) objects
     * that apply to the targeted [CatalogItem]($m/CatalogItem) without having
     * to perform an upsert on the entire item.
     *
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    CatalogApi.prototype.updateItemModifierLists = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/update-item-modifier-lists');
                mapped = req.prepareArgs({
                    body: [body, updateItemModifierListsRequest_1.updateItemModifierListsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateItemModifierListsResponse_1.updateItemModifierListsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates the [CatalogTax]($m/CatalogTax) objects that apply to the
     * targeted [CatalogItem]($m/CatalogItem) without having to perform an
     * upsert on the entire item.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    CatalogApi.prototype.updateItemTaxes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/catalog/update-item-taxes');
                mapped = req.prepareArgs({
                    body: [body, updateItemTaxesRequest_1.updateItemTaxesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateItemTaxesResponse_1.updateItemTaxesResponseSchema, requestOptions)];
            });
        });
    };
    return CatalogApi;
}(baseApi_1.BaseApi));
exports.CatalogApi = CatalogApi;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=catalogApi.js.map