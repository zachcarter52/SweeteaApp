import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `CreateDisputeEvidenceFile` response. */
export interface CreateDisputeEvidenceFileResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    evidence?: DisputeEvidence;
}
export declare const createDisputeEvidenceFileResponseSchema: Schema<CreateDisputeEvidenceFileResponse>;
