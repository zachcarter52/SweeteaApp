import { array, lazy, object, optional, string } from '../schema';
import { employeeWageSchema } from './employeeWage';
import { errorSchema } from './error';
export const listEmployeeWagesResponseSchema = object({
    employeeWages: [
        'employee_wages',
        optional(array(lazy(() => employeeWageSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listEmployeeWagesResponse.js.map