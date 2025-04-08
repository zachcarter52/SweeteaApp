import { Schema } from '../schema';
import { LoyaltyAccount } from './loyaltyAccount';
/** A request to create a new loyalty account. */
export interface CreateLoyaltyAccountRequest {
    /**
     * Describes a loyalty account in a [loyalty program]($m/LoyaltyProgram). For more information, see
     * [Create and Retrieve Loyalty Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
     */
    loyaltyAccount: LoyaltyAccount;
    /**
     * A unique string that identifies this `CreateLoyaltyAccount` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
}
export declare const createLoyaltyAccountRequestSchema: Schema<CreateLoyaltyAccountRequest>;
