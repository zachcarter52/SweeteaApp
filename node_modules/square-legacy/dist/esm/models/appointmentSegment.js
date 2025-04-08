import { array, bigint, boolean, nullable, number, object, optional, string, } from '../schema';
export const appointmentSegmentSchema = object({
    durationMinutes: ['duration_minutes', optional(nullable(number()))],
    serviceVariationId: ['service_variation_id', optional(nullable(string()))],
    teamMemberId: ['team_member_id', string()],
    serviceVariationVersion: [
        'service_variation_version',
        optional(nullable(bigint())),
    ],
    intermissionMinutes: ['intermission_minutes', optional(number())],
    anyTeamMember: ['any_team_member', optional(boolean())],
    resourceIds: ['resource_ids', optional(array(string()))],
});
//# sourceMappingURL=appointmentSegment.js.map