"use strict";
exports.__esModule = true;
exports.invoiceSchema = void 0;
var schema_1 = require("../schema");
var invoiceAcceptedPaymentMethods_1 = require("./invoiceAcceptedPaymentMethods");
var invoiceAttachment_1 = require("./invoiceAttachment");
var invoiceCustomField_1 = require("./invoiceCustomField");
var invoicePaymentRequest_1 = require("./invoicePaymentRequest");
var invoiceRecipient_1 = require("./invoiceRecipient");
var money_1 = require("./money");
exports.invoiceSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    primaryRecipient: [
        'primary_recipient',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return invoiceRecipient_1.invoiceRecipientSchema; })),
    ],
    paymentRequests: [
        'payment_requests',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return invoicePaymentRequest_1.invoicePaymentRequestSchema; })))),
    ],
    deliveryMethod: ['delivery_method', (0, schema_1.optional)((0, schema_1.string)())],
    invoiceNumber: ['invoice_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    title: ['title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    scheduledAt: ['scheduled_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    publicUrl: ['public_url', (0, schema_1.optional)((0, schema_1.string)())],
    nextPaymentAmountMoney: [
        'next_payment_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    timezone: ['timezone', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    acceptedPaymentMethods: [
        'accepted_payment_methods',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return invoiceAcceptedPaymentMethods_1.invoiceAcceptedPaymentMethodsSchema; })),
    ],
    customFields: [
        'custom_fields',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return invoiceCustomField_1.invoiceCustomFieldSchema; })))),
    ],
    subscriptionId: ['subscription_id', (0, schema_1.optional)((0, schema_1.string)())],
    saleOrServiceDate: ['sale_or_service_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    paymentConditions: ['payment_conditions', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    storePaymentMethodEnabled: [
        'store_payment_method_enabled',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    attachments: [
        'attachments',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return invoiceAttachment_1.invoiceAttachmentSchema; }))),
    ]
});
//# sourceMappingURL=invoice.js.map