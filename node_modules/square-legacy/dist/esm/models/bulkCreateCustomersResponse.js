import { array, dict, lazy, object, optional } from '../schema';
import { createCustomerResponseSchema, } from './createCustomerResponse';
import { errorSchema } from './error';
export const bulkCreateCustomersResponseSchema = object({
    responses: [
        'responses',
        optional(dict(lazy(() => createCustomerResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkCreateCustomersResponse.js.map