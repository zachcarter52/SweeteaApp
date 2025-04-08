import { Schema } from '../schema';
/** Defines the parameters for a `DeprecatedCreateDisputeEvidenceText` request. */
export interface DeprecatedCreateDisputeEvidenceTextRequest {
    /** The Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
    idempotencyKey: string;
    /** The type of the dispute evidence. */
    evidenceType?: string;
    /** The evidence string. */
    evidenceText: string;
}
export declare const deprecatedCreateDisputeEvidenceTextRequestSchema: Schema<DeprecatedCreateDisputeEvidenceTextRequest>;
