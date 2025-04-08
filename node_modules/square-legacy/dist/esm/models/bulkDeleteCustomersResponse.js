import { array, dict, lazy, object, optional } from '../schema';
import { deleteCustomerResponseSchema, } from './deleteCustomerResponse';
import { errorSchema } from './error';
export const bulkDeleteCustomersResponseSchema = object({
    responses: [
        'responses',
        optional(dict(lazy(() => deleteCustomerResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkDeleteCustomersResponse.js.map