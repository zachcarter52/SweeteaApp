import { Schema } from '../schema';
import { ConfirmationDecision } from './confirmationDecision';
export interface ConfirmationOptions {
    /** The title text to display in the confirmation screen flow on the Terminal. */
    title: string;
    /** The agreement details to display in the confirmation flow on the Terminal. */
    body: string;
    /** The button text to display indicating the customer agrees to the displayed terms. */
    agreeButtonText: string;
    /** The button text to display indicating the customer does not agree to the displayed terms. */
    disagreeButtonText?: string | null;
    decision?: ConfirmationDecision;
}
export declare const confirmationOptionsSchema: Schema<ConfirmationOptions>;
