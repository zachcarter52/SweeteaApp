import { Schema } from '../schema';
import { Error } from './error';
/** Defines the fields in a `DeleteDisputeEvidence` response. */
export interface DeleteDisputeEvidenceResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const deleteDisputeEvidenceResponseSchema: Schema<DeleteDisputeEvidenceResponse>;
