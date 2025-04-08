import { array, lazy, object, optional, string } from '../schema';
import { employeeSchema } from './employee';
import { errorSchema } from './error';
export const listEmployeesResponseSchema = object({
    employees: ['employees', optional(array(lazy(() => employeeSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listEmployeesResponse.js.map