import { Schema } from '../schema';
/** Represents the arguments used to construct a new phase. */
export interface PhaseInput {
    /** index of phase in total subscription plan */
    ordinal: bigint;
    /** id of order to be used in billing */
    orderTemplateId?: string | null;
}
export declare const phaseInputSchema: Schema<PhaseInput>;
