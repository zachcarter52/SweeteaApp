import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const employeeWageSchema = object({
    id: ['id', optional(string())],
    employeeId: ['employee_id', optional(nullable(string()))],
    title: ['title', optional(nullable(string()))],
    hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=employeeWage.js.map