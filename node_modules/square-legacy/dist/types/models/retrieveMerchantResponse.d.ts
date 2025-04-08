import { Schema } from '../schema';
import { Error } from './error';
import { Merchant } from './merchant';
/** The response object returned by the [RetrieveMerchant]($e/Merchants/RetrieveMerchant) endpoint. */
export interface RetrieveMerchantResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** Represents a business that sells with Square. */
    merchant?: Merchant;
}
export declare const retrieveMerchantResponseSchema: Schema<RetrieveMerchantResponse>;
