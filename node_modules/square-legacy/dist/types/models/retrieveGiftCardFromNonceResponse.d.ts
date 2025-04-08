import { Schema } from '../schema';
import { Error } from './error';
import { GiftCard } from './giftCard';
/**
 * A response that contains a `GiftCard` object. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface RetrieveGiftCardFromNonceResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents a Square gift card. */
    giftCard?: GiftCard;
}
export declare const retrieveGiftCardFromNonceResponseSchema: Schema<RetrieveGiftCardFromNonceResponse>;
