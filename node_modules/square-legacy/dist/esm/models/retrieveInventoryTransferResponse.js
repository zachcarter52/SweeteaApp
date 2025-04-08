import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { inventoryTransferSchema, } from './inventoryTransfer';
export const retrieveInventoryTransferResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    transfer: ['transfer', optional(lazy(() => inventoryTransferSchema))],
});
//# sourceMappingURL=retrieveInventoryTransferResponse.js.map