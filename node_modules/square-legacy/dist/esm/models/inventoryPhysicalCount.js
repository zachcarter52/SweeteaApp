import { lazy, nullable, object, optional, string } from '../schema';
import { sourceApplicationSchema, } from './sourceApplication';
export const inventoryPhysicalCountSchema = object({
    id: ['id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogObjectType: ['catalog_object_type', optional(nullable(string()))],
    state: ['state', optional(string())],
    locationId: ['location_id', optional(nullable(string()))],
    quantity: ['quantity', optional(nullable(string()))],
    source: ['source', optional(lazy(() => sourceApplicationSchema))],
    employeeId: ['employee_id', optional(nullable(string()))],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    occurredAt: ['occurred_at', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
});
//# sourceMappingURL=inventoryPhysicalCount.js.map