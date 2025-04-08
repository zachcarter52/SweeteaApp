import { Schema } from '../schema';
import { CatalogIdMapping } from './catalogIdMapping';
import { CatalogObject } from './catalogObject';
import { Error } from './error';
export interface BatchUpsertCatalogObjectsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The created successfully created CatalogObjects. */
    objects?: CatalogObject[];
    /** The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
    updatedAt?: string;
    /** The mapping between client and server IDs for this upsert. */
    idMappings?: CatalogIdMapping[];
}
export declare const batchUpsertCatalogObjectsResponseSchema: Schema<BatchUpsertCatalogObjectsResponse>;
