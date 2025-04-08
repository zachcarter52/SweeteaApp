import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `DeprecatedCreateDisputeEvidenceFile` response. */
export interface DeprecatedCreateDisputeEvidenceFileResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    evidence?: DisputeEvidence;
}
export declare const deprecatedCreateDisputeEvidenceFileResponseSchema: Schema<DeprecatedCreateDisputeEvidenceFileResponse>;
