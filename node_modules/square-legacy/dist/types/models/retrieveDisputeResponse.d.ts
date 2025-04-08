import { Schema } from '../schema';
import { Dispute } from './dispute';
import { Error } from './error';
/** Defines fields in a `RetrieveDispute` response. */
export interface RetrieveDisputeResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. */
    dispute?: Dispute;
}
export declare const retrieveDisputeResponseSchema: Schema<RetrieveDisputeResponse>;
