import { nullable, number, object, optional, string } from '../schema';
export const listEmployeeWagesRequestSchema = object({
    employeeId: ['employee_id', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listEmployeeWagesRequest.js.map