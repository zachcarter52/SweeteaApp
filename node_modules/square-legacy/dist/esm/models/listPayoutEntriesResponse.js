import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { payoutEntrySchema } from './payoutEntry';
export const listPayoutEntriesResponseSchema = object({
    payoutEntries: [
        'payout_entries',
        optional(array(lazy(() => payoutEntrySchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listPayoutEntriesResponse.js.map