import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { updateCustomerResponseSchema, } from './updateCustomerResponse';
export const bulkUpdateCustomersResponseSchema = object({
    responses: [
        'responses',
        optional(dict(lazy(() => updateCustomerResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpdateCustomersResponse.js.map