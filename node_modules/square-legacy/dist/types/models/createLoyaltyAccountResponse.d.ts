import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyAccount } from './loyaltyAccount';
/** A response that includes loyalty account created. */
export interface CreateLoyaltyAccountResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Describes a loyalty account in a [loyalty program]($m/LoyaltyProgram). For more information, see
     * [Create and Retrieve Loyalty Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
     */
    loyaltyAccount?: LoyaltyAccount;
}
export declare const createLoyaltyAccountResponseSchema: Schema<CreateLoyaltyAccountResponse>;
