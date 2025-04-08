"use strict";
exports.__esModule = true;
exports.DisputesApi = void 0;
var tslib_1 = require("tslib");
var acceptDisputeResponse_1 = require("../models/acceptDisputeResponse");
var createDisputeEvidenceFileRequest_1 = require("../models/createDisputeEvidenceFileRequest");
var createDisputeEvidenceFileResponse_1 = require("../models/createDisputeEvidenceFileResponse");
var createDisputeEvidenceTextRequest_1 = require("../models/createDisputeEvidenceTextRequest");
var createDisputeEvidenceTextResponse_1 = require("../models/createDisputeEvidenceTextResponse");
var deleteDisputeEvidenceResponse_1 = require("../models/deleteDisputeEvidenceResponse");
var listDisputeEvidenceResponse_1 = require("../models/listDisputeEvidenceResponse");
var listDisputesResponse_1 = require("../models/listDisputesResponse");
var retrieveDisputeEvidenceResponse_1 = require("../models/retrieveDisputeEvidenceResponse");
var retrieveDisputeResponse_1 = require("../models/retrieveDisputeResponse");
var submitEvidenceResponse_1 = require("../models/submitEvidenceResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var DisputesApi = /** @class */ (function (_super) {
    tslib_1.__extends(DisputesApi, _super);
    function DisputesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a list of disputes associated with a particular account.
     *
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination).
     * @param states      The dispute states used to filter the result. If not specified, the endpoint returns
     *                              all disputes.
     * @param locationId  The ID of the location for which to return a list of disputes. If not specified, the
     *                              endpoint returns disputes associated with all locations.
     * @return Response from the API call
     */
    DisputesApi.prototype.listDisputes = function (cursor, states, locationId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/disputes');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    states: [states, (0, schema_1.optional)((0, schema_1.string)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('states', mapped.states);
                req.query('location_id', mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listDisputesResponse_1.listDisputesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns details about a specific dispute.
     *
     * @param disputeId  The ID of the dispute you want more details about.
     * @return Response from the API call
     */
    DisputesApi.prototype.retrieveDispute = function (disputeId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ disputeId: [disputeId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/disputes/", ""], ["/v2/disputes/", ""])), mapped.disputeId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveDisputeResponse_1.retrieveDisputeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
     * updates the dispute state to ACCEPTED.
     *
     * Square debits the disputed amount from the seller’s Square account. If the Square account
     * does not have sufficient funds, Square debits the associated bank account.
     *
     * @param disputeId  The ID of the dispute you want to accept.
     * @return Response from the API call
     */
    DisputesApi.prototype.acceptDispute = function (disputeId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ disputeId: [disputeId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/accept"], ["/v2/disputes/", "/accept"])), mapped.disputeId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(acceptDisputeResponse_1.acceptDisputeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a list of evidence associated with a dispute.
     *
     * @param disputeId  The ID of the dispute.
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this cursor
     *                             to retrieve the next set of results for the original query. For more information, see
     *                             [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                             patterns/pagination).
     * @return Response from the API call
     */
    DisputesApi.prototype.listDisputeEvidence = function (disputeId, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    disputeId: [disputeId, (0, schema_1.string)()],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('cursor', mapped.cursor);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/evidence"], ["/v2/disputes/", "/evidence"])), mapped.disputeId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listDisputeEvidenceResponse_1.listDisputeEvidenceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
     * multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.
     *
     * @param disputeId  The ID of the dispute for which you want to upload
     *                                                              evidence.
     * @param request    Defines the parameters for a
     *                                                              `CreateDisputeEvidenceFile` request.
     * @param imageFile
     * @return Response from the API call
     */
    DisputesApi.prototype.createDisputeEvidenceFile = function (disputeId, request, imageFile, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    disputeId: [disputeId, (0, schema_1.string)()],
                    request: [request, (0, schema_1.optional)(createDisputeEvidenceFileRequest_1.createDisputeEvidenceFileRequestSchema)]
                });
                req.formData({
                    request: JSON.stringify(mapped.request),
                    image_file: imageFile
                });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/evidence-files"], ["/v2/disputes/", "/evidence-files"])), mapped.disputeId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createDisputeEvidenceFileResponse_1.createDisputeEvidenceFileResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Uploads text to use as evidence for a dispute challenge.
     *
     * @param disputeId    The ID of the dispute for which you want to upload
     *                                                                evidence.
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    DisputesApi.prototype.createDisputeEvidenceText = function (disputeId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    disputeId: [disputeId, (0, schema_1.string)()],
                    body: [body, createDisputeEvidenceTextRequest_1.createDisputeEvidenceTextRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/evidence-text"], ["/v2/disputes/", "/evidence-text"])), mapped.disputeId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createDisputeEvidenceTextResponse_1.createDisputeEvidenceTextResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Removes specified evidence from a dispute.
     * Square does not send the bank any evidence that is removed.
     *
     * @param disputeId   The ID of the dispute from which you want to remove evidence.
     * @param evidenceId  The ID of the evidence you want to remove.
     * @return Response from the API call
     */
    DisputesApi.prototype.deleteDisputeEvidence = function (disputeId, evidenceId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    disputeId: [disputeId, (0, schema_1.string)()],
                    evidenceId: [evidenceId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/evidence/", ""], ["/v2/disputes/", "/evidence/", ""])), mapped.disputeId, mapped.evidenceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteDisputeEvidenceResponse_1.deleteDisputeEvidenceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns the metadata for the evidence specified in the request URL path.
     *
     * You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence cannot
     * be downloaded after you upload it.
     *
     * @param disputeId   The ID of the dispute from which you want to retrieve evidence metadata.
     * @param evidenceId  The ID of the evidence to retrieve.
     * @return Response from the API call
     */
    DisputesApi.prototype.retrieveDisputeEvidence = function (disputeId, evidenceId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    disputeId: [disputeId, (0, schema_1.string)()],
                    evidenceId: [evidenceId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/evidence/", ""], ["/v2/disputes/", "/evidence/", ""])), mapped.disputeId, mapped.evidenceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveDisputeEvidenceResponse_1.retrieveDisputeEvidenceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Submits evidence to the cardholder's bank.
     *
     * The evidence submitted by this endpoint includes evidence uploaded
     * using the [CreateDisputeEvidenceFile]($e/Disputes/CreateDisputeEvidenceFile) and
     * [CreateDisputeEvidenceText]($e/Disputes/CreateDisputeEvidenceText) endpoints and
     * evidence automatically provided by Square, when available. Evidence cannot be removed from
     * a dispute after submission.
     *
     * @param disputeId  The ID of the dispute for which you want to submit evidence.
     * @return Response from the API call
     */
    DisputesApi.prototype.submitEvidence = function (disputeId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ disputeId: [disputeId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["/v2/disputes/", "/submit-evidence"], ["/v2/disputes/", "/submit-evidence"])), mapped.disputeId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(submitEvidenceResponse_1.submitEvidenceResponseSchema, requestOptions)];
            });
        });
    };
    return DisputesApi;
}(baseApi_1.BaseApi));
exports.DisputesApi = DisputesApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=disputesApi.js.map