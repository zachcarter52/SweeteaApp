import { Schema } from '../schema';
/** The timeline for card payments. */
export interface CardPaymentTimeline {
    /** The timestamp when the payment was authorized, in RFC 3339 format. */
    authorizedAt?: string | null;
    /** The timestamp when the payment was captured, in RFC 3339 format. */
    capturedAt?: string | null;
    /** The timestamp when the payment was voided, in RFC 3339 format. */
    voidedAt?: string | null;
}
export declare const cardPaymentTimelineSchema: Schema<CardPaymentTimeline>;
