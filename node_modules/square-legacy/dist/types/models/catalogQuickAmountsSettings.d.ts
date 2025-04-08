import { Schema } from '../schema';
import { CatalogQuickAmount } from './catalogQuickAmount';
/** A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts. */
export interface CatalogQuickAmountsSettings {
    /** Determines a seller's option on Quick Amounts feature. */
    option: string;
    /**
     * Represents location's eligibility for auto amounts
     * The boolean should be consistent with whether there are AUTO amounts in the `amounts`.
     */
    eligibleForAutoAmounts?: boolean | null;
    /** Represents a set of Quick Amounts at this location. */
    amounts?: CatalogQuickAmount[] | null;
}
export declare const catalogQuickAmountsSettingsSchema: Schema<CatalogQuickAmountsSettings>;
