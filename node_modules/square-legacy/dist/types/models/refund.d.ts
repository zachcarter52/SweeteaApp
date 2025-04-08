import { Schema } from '../schema';
import { AdditionalRecipient } from './additionalRecipient';
import { Money } from './money';
/** Represents a refund processed for a Square transaction. */
export interface Refund {
    /** The refund's unique ID. */
    id: string;
    /** The ID of the refund's associated location. */
    locationId: string;
    /** The ID of the transaction that the refunded tender is part of. */
    transactionId?: string | null;
    /** The ID of the refunded tender. */
    tenderId?: string;
    /** The timestamp for when the refund was created, in RFC 3339 format. */
    createdAt?: string;
    /** The reason for the refund being issued. */
    reason: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney: Money;
    /** Indicates a refund's current status. */
    status: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    processingFeeMoney?: Money;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this refund.
     * For example, fees assessed on a refund of a purchase by a third party integration.
     */
    additionalRecipients?: AdditionalRecipient[] | null;
}
export declare const refundSchema: Schema<Refund>;
