import { Schema } from '../schema';
import { Error } from './error';
import { GiftCard } from './giftCard';
/**
 * A response that contains the unlinked `GiftCard` object. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface UnlinkCustomerFromGiftCardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents a Square gift card. */
    giftCard?: GiftCard;
}
export declare const unlinkCustomerFromGiftCardResponseSchema: Schema<UnlinkCustomerFromGiftCardResponse>;
