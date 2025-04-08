import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines the fields in a `ListDisputeEvidence` response. */
export interface ListDisputeEvidenceResponse {
    /** The list of evidence previously uploaded to the specified dispute. */
    evidence?: DisputeEvidence[];
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /**
     * The pagination cursor to be used in a subsequent request.
     * If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse>;
