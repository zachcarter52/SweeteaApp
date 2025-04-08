import { array, lazy, object, optional } from '../schema';
import { employeeSchema } from './employee';
import { errorSchema } from './error';
export const retrieveEmployeeResponseSchema = object({
    employee: ['employee', optional(lazy(() => employeeSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveEmployeeResponse.js.map