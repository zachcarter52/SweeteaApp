import { object, optional, string } from '../schema';
export const tenderBuyNowPayLaterDetailsSchema = object({
    buyNowPayLaterBrand: ['buy_now_pay_later_brand', optional(string())],
    status: ['status', optional(string())],
});
//# sourceMappingURL=tenderBuyNowPayLaterDetails.js.map