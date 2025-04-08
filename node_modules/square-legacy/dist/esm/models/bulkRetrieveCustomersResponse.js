import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { retrieveCustomerResponseSchema, } from './retrieveCustomerResponse';
export const bulkRetrieveCustomersResponseSchema = object({
    responses: [
        'responses',
        optional(dict(lazy(() => retrieveCustomerResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkRetrieveCustomersResponse.js.map