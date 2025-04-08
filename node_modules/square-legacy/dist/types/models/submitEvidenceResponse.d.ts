import { Schema } from '../schema';
import { Dispute } from './dispute';
import { Error } from './error';
/** Defines the fields in a `SubmitEvidence` response. */
export interface SubmitEvidenceResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. */
    dispute?: Dispute;
}
export declare const submitEvidenceResponseSchema: Schema<SubmitEvidenceResponse>;
