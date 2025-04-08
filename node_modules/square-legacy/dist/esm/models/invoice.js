import { array, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { invoiceAcceptedPaymentMethodsSchema, } from './invoiceAcceptedPaymentMethods';
import { invoiceAttachmentSchema, } from './invoiceAttachment';
import { invoiceCustomFieldSchema, } from './invoiceCustomField';
import { invoicePaymentRequestSchema, } from './invoicePaymentRequest';
import { invoiceRecipientSchema } from './invoiceRecipient';
import { moneySchema } from './money';
export const invoiceSchema = object({
    id: ['id', optional(string())],
    version: ['version', optional(number())],
    locationId: ['location_id', optional(nullable(string()))],
    orderId: ['order_id', optional(nullable(string()))],
    primaryRecipient: [
        'primary_recipient',
        optional(lazy(() => invoiceRecipientSchema)),
    ],
    paymentRequests: [
        'payment_requests',
        optional(nullable(array(lazy(() => invoicePaymentRequestSchema)))),
    ],
    deliveryMethod: ['delivery_method', optional(string())],
    invoiceNumber: ['invoice_number', optional(nullable(string()))],
    title: ['title', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    scheduledAt: ['scheduled_at', optional(nullable(string()))],
    publicUrl: ['public_url', optional(string())],
    nextPaymentAmountMoney: [
        'next_payment_amount_money',
        optional(lazy(() => moneySchema)),
    ],
    status: ['status', optional(string())],
    timezone: ['timezone', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    acceptedPaymentMethods: [
        'accepted_payment_methods',
        optional(lazy(() => invoiceAcceptedPaymentMethodsSchema)),
    ],
    customFields: [
        'custom_fields',
        optional(nullable(array(lazy(() => invoiceCustomFieldSchema)))),
    ],
    subscriptionId: ['subscription_id', optional(string())],
    saleOrServiceDate: ['sale_or_service_date', optional(nullable(string()))],
    paymentConditions: ['payment_conditions', optional(nullable(string()))],
    storePaymentMethodEnabled: [
        'store_payment_method_enabled',
        optional(nullable(boolean())),
    ],
    attachments: [
        'attachments',
        optional(array(lazy(() => invoiceAttachmentSchema))),
    ],
});
//# sourceMappingURL=invoice.js.map