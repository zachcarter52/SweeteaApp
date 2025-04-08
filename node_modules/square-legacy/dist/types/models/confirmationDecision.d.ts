import { Schema } from '../schema';
export interface ConfirmationDecision {
    /** The buyer's decision to the displayed terms. */
    hasAgreed?: boolean;
}
export declare const confirmationDecisionSchema: Schema<ConfirmationDecision>;
