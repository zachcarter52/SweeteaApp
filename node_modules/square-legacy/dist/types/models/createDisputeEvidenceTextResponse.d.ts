import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `CreateDisputeEvidenceText` response. */
export interface CreateDisputeEvidenceTextResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    evidence?: DisputeEvidence;
}
export declare const createDisputeEvidenceTextResponseSchema: Schema<CreateDisputeEvidenceTextResponse>;
