import { Schema } from '../schema';
import { CatalogIdMapping } from './catalogIdMapping';
import { CatalogObject } from './catalogObject';
import { Error } from './error';
export interface UpsertCatalogObjectResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * The wrapper object for the catalog entries of a given object type.
     * Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data to yield the corresponding type of catalog object.
     * For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem` instance.
     * In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting `CatalogObject` instance is also a `Catalog<ObjectType>` instance.
     * For a more detailed discussion of the Catalog data model, please see the
     * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
     */
    catalogObject?: CatalogObject;
    /** The mapping between client and server IDs for this upsert. */
    idMappings?: CatalogIdMapping[];
}
export declare const upsertCatalogObjectResponseSchema: Schema<UpsertCatalogObjectResponse>;
