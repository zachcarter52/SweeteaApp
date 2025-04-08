import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `DeprecatedCreateDisputeEvidenceText` response. */
export interface DeprecatedCreateDisputeEvidenceTextResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    evidence?: DisputeEvidence;
}
export declare const deprecatedCreateDisputeEvidenceTextResponseSchema: Schema<DeprecatedCreateDisputeEvidenceTextResponse>;
