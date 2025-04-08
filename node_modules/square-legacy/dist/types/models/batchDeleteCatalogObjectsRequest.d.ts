import { Schema } from '../schema';
export interface BatchDeleteCatalogObjectsRequest {
    /**
     * The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects
     * in the graph that depend on that object will be deleted as well (for example, deleting a
     * CatalogItem will delete its CatalogItemVariation.
     */
    objectIds?: string[] | null;
}
export declare const batchDeleteCatalogObjectsRequestSchema: Schema<BatchDeleteCatalogObjectsRequest>;
