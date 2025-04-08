import { Schema } from '../schema';
import { CatalogObject } from './catalogObject';
/** A batch of catalog objects. */
export interface CatalogObjectBatch {
    /** A list of CatalogObjects belonging to this batch. */
    objects: CatalogObject[];
}
export declare const catalogObjectBatchSchema: Schema<CatalogObjectBatch>;
