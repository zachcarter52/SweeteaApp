import { Schema } from '../schema';
/** Represents a phase, which can override subscription phases as defined by plan_id */
export interface Phase {
    /** id of subscription phase */
    uid?: string | null;
    /** index of phase in total subscription plan */
    ordinal?: bigint | null;
    /** id of order to be used in billing */
    orderTemplateId?: string | null;
    /** the uid from the plan's phase in catalog */
    planPhaseUid?: string | null;
}
export declare const phaseSchema: Schema<Phase>;
