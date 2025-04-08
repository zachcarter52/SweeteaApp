import { Schema } from '../schema';
import { Error } from './error';
import { Payout } from './payout';
export interface GetPayoutResponse {
    /**
     * An accounting of the amount owed the seller and record of the actual transfer to their
     * external bank account or to the Square balance.
     */
    payout?: Payout;
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const getPayoutResponseSchema: Schema<GetPayoutResponse>;
