"use strict";
exports.__esModule = true;
exports.InvoicesApi = void 0;
var tslib_1 = require("tslib");
var cancelInvoiceRequest_1 = require("../models/cancelInvoiceRequest");
var cancelInvoiceResponse_1 = require("../models/cancelInvoiceResponse");
var createInvoiceAttachmentRequest_1 = require("../models/createInvoiceAttachmentRequest");
var createInvoiceAttachmentResponse_1 = require("../models/createInvoiceAttachmentResponse");
var createInvoiceRequest_1 = require("../models/createInvoiceRequest");
var createInvoiceResponse_1 = require("../models/createInvoiceResponse");
var deleteInvoiceAttachmentResponse_1 = require("../models/deleteInvoiceAttachmentResponse");
var deleteInvoiceResponse_1 = require("../models/deleteInvoiceResponse");
var getInvoiceResponse_1 = require("../models/getInvoiceResponse");
var listInvoicesResponse_1 = require("../models/listInvoicesResponse");
var publishInvoiceRequest_1 = require("../models/publishInvoiceRequest");
var publishInvoiceResponse_1 = require("../models/publishInvoiceResponse");
var searchInvoicesRequest_1 = require("../models/searchInvoicesRequest");
var searchInvoicesResponse_1 = require("../models/searchInvoicesResponse");
var updateInvoiceRequest_1 = require("../models/updateInvoiceRequest");
var updateInvoiceResponse_1 = require("../models/updateInvoiceResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var InvoicesApi = /** @class */ (function (_super) {
    tslib_1.__extends(InvoicesApi, _super);
    function InvoicesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a list of invoices for a given location. The response
     * is paginated. If truncated, the response includes a `cursor` that you
     * use in a subsequent request to retrieve the next set of invoices.
     *
     * @param locationId  The ID of the location for which to list invoices.
     * @param cursor      A pagination cursor returned by a previous call to this endpoint.  Provide this
     *                              cursor to retrieve the next set of results for your original query.  For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination).
     * @param limit       The maximum number of invoices to return (200 is the maximum `limit`).  If not
     *                              provided, the server uses a default limit of 100 invoices.
     * @return Response from the API call
     */
    InvoicesApi.prototype.listInvoices = function (locationId, cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/invoices');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('location_id', mapped.locationId);
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listInvoicesResponse_1.listInvoicesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a draft [invoice]($m/Invoice)
     * for an order created using the Orders API.
     *
     * A draft invoice remains in your account and no action is taken.
     * You must publish the invoice before Square can process it (send it to the customer's email address
     * or charge the customer’s card on file).
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    InvoicesApi.prototype.createInvoice = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/invoices');
                mapped = req.prepareArgs({
                    body: [body, createInvoiceRequest_1.createInvoiceRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createInvoiceResponse_1.createInvoiceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for invoices from a location specified in
     * the filter. You can optionally specify customers in the filter for whom to
     * retrieve invoices. In the current implementation, you can only specify one location and
     * optionally one customer.
     *
     * The response is paginated. If truncated, the response includes a `cursor`
     * that you use in a subsequent request to retrieve the next set of invoices.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    InvoicesApi.prototype.searchInvoices = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/invoices/search');
                mapped = req.prepareArgs({
                    body: [body, searchInvoicesRequest_1.searchInvoicesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchInvoicesResponse_1.searchInvoicesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes the specified invoice. When an invoice is deleted, the
     * associated order status changes to CANCELED. You can only delete a draft
     * invoice (you cannot delete a published invoice, including one that is scheduled for processing).
     *
     * @param invoiceId  The ID of the invoice to delete.
     * @param version    The version of the [invoice](entity:Invoice) to delete. If you do not know the
     *                             version, you can call [GetInvoice](api-endpoint:Invoices-GetInvoice) or
     *                             [ListInvoices](api-endpoint:Invoices-ListInvoices).
     * @return Response from the API call
     */
    InvoicesApi.prototype.deleteInvoice = function (invoiceId, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    invoiceId: [invoiceId, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/invoices/", ""], ["/v2/invoices/", ""])), mapped.invoiceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteInvoiceResponse_1.deleteInvoiceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves an invoice by invoice ID.
     *
     * @param invoiceId  The ID of the invoice to retrieve.
     * @return Response from the API call
     */
    InvoicesApi.prototype.getInvoice = function (invoiceId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ invoiceId: [invoiceId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/invoices/", ""], ["/v2/invoices/", ""])), mapped.invoiceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getInvoiceResponse_1.getInvoiceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates an invoice. This endpoint supports sparse updates, so you only need
     * to specify the fields you want to change along with the required `version` field.
     * Some restrictions apply to updating invoices. For example, you cannot change the
     * `order_id` or `location_id` field.
     *
     * @param invoiceId    The ID of the invoice to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    InvoicesApi.prototype.updateInvoice = function (invoiceId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    invoiceId: [invoiceId, (0, schema_1.string)()],
                    body: [body, updateInvoiceRequest_1.updateInvoiceRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/invoices/", ""], ["/v2/invoices/", ""])), mapped.invoiceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateInvoiceResponse_1.updateInvoiceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Uploads a file and attaches it to an invoice. This endpoint accepts HTTP multipart/form-data file
     * uploads
     * with a JSON `request` part and a `file` part. The `file` part must be a `readable stream` that
     * contains a file
     * in a supported format: GIF, JPEG, PNG, TIFF, BMP, or PDF.
     *
     * Invoices can have up to 10 attachments with a total file size of 25 MB. Attachments can be added
     * only to invoices
     * in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.
     *
     * @param invoiceId  The ID of the [invoice](entity:Invoice) to attach the
     *                                                            file to.
     * @param request    Represents a
     *                                                            [CreateInvoiceAttachment]($e/Invoices/CreateInvoiceAtta
     *                                                            chment) request.
     * @param imageFile
     * @return Response from the API call
     */
    InvoicesApi.prototype.createInvoiceAttachment = function (invoiceId, request, imageFile, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    invoiceId: [invoiceId, (0, schema_1.string)()],
                    request: [request, (0, schema_1.optional)(createInvoiceAttachmentRequest_1.createInvoiceAttachmentRequestSchema)]
                });
                req.formData({
                    request: JSON.stringify(mapped.request),
                    image_file: imageFile
                });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/invoices/", "/attachments"], ["/v2/invoices/", "/attachments"])), mapped.invoiceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createInvoiceAttachmentResponse_1.createInvoiceAttachmentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Removes an attachment from an invoice and permanently deletes the file. Attachments can be removed
     * only
     * from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.
     *
     * @param invoiceId     The ID of the [invoice](entity:Invoice) to delete the attachment from.
     * @param attachmentId  The ID of the [attachment](entity:InvoiceAttachment) to delete.
     * @return Response from the API call
     */
    InvoicesApi.prototype.deleteInvoiceAttachment = function (invoiceId, attachmentId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    invoiceId: [invoiceId, (0, schema_1.string)()],
                    attachmentId: [attachmentId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/invoices/", "/attachments/", ""], ["/v2/invoices/", "/attachments/", ""])), mapped.invoiceId, mapped.attachmentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteInvoiceAttachmentResponse_1.deleteInvoiceAttachmentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels an invoice. The seller cannot collect payments for
     * the canceled invoice.
     *
     * You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`,
     * `CANCELED`, or `FAILED`.
     *
     * @param invoiceId    The ID of the [invoice](entity:Invoice) to cancel.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    InvoicesApi.prototype.cancelInvoice = function (invoiceId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    invoiceId: [invoiceId, (0, schema_1.string)()],
                    body: [body, cancelInvoiceRequest_1.cancelInvoiceRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/invoices/", "/cancel"], ["/v2/invoices/", "/cancel"])), mapped.invoiceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelInvoiceResponse_1.cancelInvoiceResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Publishes the specified draft invoice.
     *
     * After an invoice is published, Square
     * follows up based on the invoice configuration. For example, Square
     * sends the invoice to the customer's email address, charges the customer's card on file, or does
     * nothing. Square also makes the invoice available on a Square-hosted invoice page.
     *
     * The invoice `status` also changes from `DRAFT` to a status
     * based on the invoice configuration. For example, the status changes to `UNPAID` if
     * Square emails the invoice or `PARTIALLY_PAID` if Square charges a card on file for a portion of the
     * invoice amount.
     *
     * In addition to the required `ORDERS_WRITE` and `INVOICES_WRITE` permissions, `CUSTOMERS_READ`
     * and `PAYMENTS_WRITE` are required when publishing invoices configured for card-on-file payments.
     *
     * @param invoiceId    The ID of the invoice to publish.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    InvoicesApi.prototype.publishInvoice = function (invoiceId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    invoiceId: [invoiceId, (0, schema_1.string)()],
                    body: [body, publishInvoiceRequest_1.publishInvoiceRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/invoices/", "/publish"], ["/v2/invoices/", "/publish"])), mapped.invoiceId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(publishInvoiceResponse_1.publishInvoiceResponseSchema, requestOptions)];
            });
        });
    };
    return InvoicesApi;
}(baseApi_1.BaseApi));
exports.InvoicesApi = InvoicesApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=invoicesApi.js.map