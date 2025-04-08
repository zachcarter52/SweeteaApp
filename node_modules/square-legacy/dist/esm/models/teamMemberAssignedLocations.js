import { array, nullable, object, optional, string } from '../schema';
export const teamMemberAssignedLocationsSchema = object({
    assignmentType: ['assignment_type', optional(string())],
    locationIds: ['location_ids', optional(nullable(array(string())))],
});
//# sourceMappingURL=teamMemberAssignedLocations.js.map