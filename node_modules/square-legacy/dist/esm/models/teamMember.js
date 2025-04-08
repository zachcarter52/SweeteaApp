import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { teamMemberAssignedLocationsSchema, } from './teamMemberAssignedLocations';
import { wageSettingSchema } from './wageSetting';
export const teamMemberSchema = object({
    id: ['id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
    isOwner: ['is_owner', optional(boolean())],
    status: ['status', optional(string())],
    givenName: ['given_name', optional(nullable(string()))],
    familyName: ['family_name', optional(nullable(string()))],
    emailAddress: ['email_address', optional(nullable(string()))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    assignedLocations: [
        'assigned_locations',
        optional(lazy(() => teamMemberAssignedLocationsSchema)),
    ],
    wageSetting: ['wage_setting', optional(lazy(() => wageSettingSchema))],
});
//# sourceMappingURL=teamMember.js.map