import { Schema } from '../schema';
import { CashDrawerShift } from './cashDrawerShift';
import { Error } from './error';
export interface RetrieveCashDrawerShiftResponse {
    /**
     * This model gives the details of a cash drawer shift.
     * The cash_payment_money, cash_refund_money, cash_paid_in_money,
     * and cash_paid_out_money fields are all computed by summing their respective
     * event types.
     */
    cashDrawerShift?: CashDrawerShift;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveCashDrawerShiftResponseSchema: Schema<RetrieveCashDrawerShiftResponse>;
