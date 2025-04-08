import { array, boolean, nullable, object, optional, string, } from '../schema';
export const employeeSchema = object({
    id: ['id', optional(string())],
    firstName: ['first_name', optional(nullable(string()))],
    lastName: ['last_name', optional(nullable(string()))],
    email: ['email', optional(nullable(string()))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    status: ['status', optional(string())],
    isOwner: ['is_owner', optional(nullable(boolean()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=employee.js.map