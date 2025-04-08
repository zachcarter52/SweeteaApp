import { array, lazy, object, optional } from '../schema';
import { employeeWageSchema } from './employeeWage';
import { errorSchema } from './error';
export const getEmployeeWageResponseSchema = object({
    employeeWage: ['employee_wage', optional(lazy(() => employeeWageSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=getEmployeeWageResponse.js.map