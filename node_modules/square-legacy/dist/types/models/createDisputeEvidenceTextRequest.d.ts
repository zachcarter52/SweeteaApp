import { Schema } from '../schema';
/** Defines the parameters for a `CreateDisputeEvidenceText` request. */
export interface CreateDisputeEvidenceTextRequest {
    /** A unique key identifying the request. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
    idempotencyKey: string;
    /** The type of the dispute evidence. */
    evidenceType?: string;
    /** The evidence string. */
    evidenceText: string;
}
export declare const createDisputeEvidenceTextRequestSchema: Schema<CreateDisputeEvidenceTextRequest>;
