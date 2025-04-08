import { Schema } from '../schema';
import { CatalogInfoResponseLimits } from './catalogInfoResponseLimits';
import { Error } from './error';
import { StandardUnitDescriptionGroup } from './standardUnitDescriptionGroup';
export interface CatalogInfoResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    limits?: CatalogInfoResponseLimits;
    /** Group of standard measurement units. */
    standardUnitDescriptionGroup?: StandardUnitDescriptionGroup;
}
export declare const catalogInfoResponseSchema: Schema<CatalogInfoResponse>;
