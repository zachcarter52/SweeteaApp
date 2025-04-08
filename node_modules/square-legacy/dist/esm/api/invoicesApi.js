import { cancelInvoiceRequestSchema, } from '../models/cancelInvoiceRequest';
import { cancelInvoiceResponseSchema, } from '../models/cancelInvoiceResponse';
import { createInvoiceAttachmentRequestSchema, } from '../models/createInvoiceAttachmentRequest';
import { createInvoiceAttachmentResponseSchema, } from '../models/createInvoiceAttachmentResponse';
import { createInvoiceRequestSchema, } from '../models/createInvoiceRequest';
import { createInvoiceResponseSchema, } from '../models/createInvoiceResponse';
import { deleteInvoiceAttachmentResponseSchema, } from '../models/deleteInvoiceAttachmentResponse';
import { deleteInvoiceResponseSchema, } from '../models/deleteInvoiceResponse';
import { getInvoiceResponseSchema, } from '../models/getInvoiceResponse';
import { listInvoicesResponseSchema, } from '../models/listInvoicesResponse';
import { publishInvoiceRequestSchema, } from '../models/publishInvoiceRequest';
import { publishInvoiceResponseSchema, } from '../models/publishInvoiceResponse';
import { searchInvoicesRequestSchema, } from '../models/searchInvoicesRequest';
import { searchInvoicesResponseSchema, } from '../models/searchInvoicesResponse';
import { updateInvoiceRequestSchema, } from '../models/updateInvoiceRequest';
import { updateInvoiceResponseSchema, } from '../models/updateInvoiceResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class InvoicesApi extends BaseApi {
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
    async listInvoices(locationId, cursor, limit, requestOptions) {
        const req = this.createRequest('GET', '/v2/invoices');
        const mapped = req.prepareArgs({
            locationId: [locationId, string()],
            cursor: [cursor, optional(string())],
            limit: [limit, optional(number())],
        });
        req.query('location_id', mapped.locationId);
        req.query('cursor', mapped.cursor);
        req.query('limit', mapped.limit);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listInvoicesResponseSchema, requestOptions);
    }
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
    async createInvoice(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/invoices');
        const mapped = req.prepareArgs({
            body: [body, createInvoiceRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createInvoiceResponseSchema, requestOptions);
    }
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
    async searchInvoices(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/invoices/search');
        const mapped = req.prepareArgs({
            body: [body, searchInvoicesRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(searchInvoicesResponseSchema, requestOptions);
    }
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
    async deleteInvoice(invoiceId, version, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({
            invoiceId: [invoiceId, string()],
            version: [version, optional(number())],
        });
        req.query('version', mapped.version);
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deleteInvoiceResponseSchema, requestOptions);
    }
    /**
     * Retrieves an invoice by invoice ID.
     *
     * @param invoiceId  The ID of the invoice to retrieve.
     * @return Response from the API call
     */
    async getInvoice(invoiceId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ invoiceId: [invoiceId, string()] });
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(getInvoiceResponseSchema, requestOptions);
    }
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
    async updateInvoice(invoiceId, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            invoiceId: [invoiceId, string()],
            body: [body, updateInvoiceRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateInvoiceResponseSchema, requestOptions);
    }
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
    async createInvoiceAttachment(invoiceId, request, imageFile, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            invoiceId: [invoiceId, string()],
            request: [request, optional(createInvoiceAttachmentRequestSchema)],
        });
        req.formData({
            request: JSON.stringify(mapped.request),
            image_file: imageFile,
        });
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}/attachments`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(createInvoiceAttachmentResponseSchema, requestOptions);
    }
    /**
     * Removes an attachment from an invoice and permanently deletes the file. Attachments can be removed
     * only
     * from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.
     *
     * @param invoiceId     The ID of the [invoice](entity:Invoice) to delete the attachment from.
     * @param attachmentId  The ID of the [attachment](entity:InvoiceAttachment) to delete.
     * @return Response from the API call
     */
    async deleteInvoiceAttachment(invoiceId, attachmentId, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({
            invoiceId: [invoiceId, string()],
            attachmentId: [attachmentId, string()],
        });
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}/attachments/${mapped.attachmentId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deleteInvoiceAttachmentResponseSchema, requestOptions);
    }
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
    async cancelInvoice(invoiceId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            invoiceId: [invoiceId, string()],
            body: [body, cancelInvoiceRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}/cancel`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(cancelInvoiceResponseSchema, requestOptions);
    }
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
    async publishInvoice(invoiceId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            invoiceId: [invoiceId, string()],
            body: [body, publishInvoiceRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/invoices/${mapped.invoiceId}/publish`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(publishInvoiceResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=invoicesApi.js.map