import { Schema } from '../schema';
import { Error } from './error';
import { Merchant } from './merchant';
/** The response object returned by the [ListMerchant]($e/Merchants/ListMerchants) endpoint. */
export interface ListMerchantsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The requested `Merchant` entities. */
    merchant?: Merchant[];
    /** If the  response is truncated, the cursor to use in next  request to fetch next set of objects. */
    cursor?: number;
}
export declare const listMerchantsResponseSchema: Schema<ListMerchantsResponse>;
