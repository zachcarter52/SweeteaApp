import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { giftCardActivitySchema } from './giftCardActivity';
export const listGiftCardActivitiesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCardActivities: [
        'gift_card_activities',
        optional(array(lazy(() => giftCardActivitySchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listGiftCardActivitiesResponse.js.map