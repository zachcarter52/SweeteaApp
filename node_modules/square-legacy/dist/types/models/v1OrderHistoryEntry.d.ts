import { Schema } from '../schema';
/** V1OrderHistoryEntry */
export interface V1OrderHistoryEntry {
    action?: string;
    /** The time when the action was performed, in ISO 8601 format. */
    createdAt?: string;
}
export declare const v1OrderHistoryEntrySchema: Schema<V1OrderHistoryEntry>;
