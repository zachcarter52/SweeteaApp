import { Schema } from '../schema';
export interface UpdateItemTaxesRequest {
    /**
     * IDs for the CatalogItems associated with the CatalogTax objects being updated.
     * No more than 1,000 IDs may be provided.
     */
    itemIds: string[];
    /**
     * IDs of the CatalogTax objects to enable.
     * At least one of `taxes_to_enable` or `taxes_to_disable` must be specified.
     */
    taxesToEnable?: string[] | null;
    /**
     * IDs of the CatalogTax objects to disable.
     * At least one of `taxes_to_enable` or `taxes_to_disable` must be specified.
     */
    taxesToDisable?: string[] | null;
}
export declare const updateItemTaxesRequestSchema: Schema<UpdateItemTaxesRequest>;
