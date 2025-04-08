import { Schema } from '../schema';
/** Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`. */
export interface TenderBuyNowPayLaterDetails {
    buyNowPayLaterBrand?: string;
    status?: string;
}
export declare const tenderBuyNowPayLaterDetailsSchema: Schema<TenderBuyNowPayLaterDetails>;
