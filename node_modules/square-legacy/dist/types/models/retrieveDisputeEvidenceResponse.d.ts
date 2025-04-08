import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `RetrieveDisputeEvidence` response. */
export interface RetrieveDisputeEvidenceResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    evidence?: DisputeEvidence;
}
export declare const retrieveDisputeEvidenceResponseSchema: Schema<RetrieveDisputeEvidenceResponse>;
