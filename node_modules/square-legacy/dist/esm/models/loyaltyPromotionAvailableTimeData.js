import { array, object, optional, string } from '../schema';
export const loyaltyPromotionAvailableTimeDataSchema = object({
    startDate: ['start_date', optional(string())],
    endDate: ['end_date', optional(string())],
    timePeriods: ['time_periods', array(string())],
});
//# sourceMappingURL=loyaltyPromotionAvailableTimeData.js.map