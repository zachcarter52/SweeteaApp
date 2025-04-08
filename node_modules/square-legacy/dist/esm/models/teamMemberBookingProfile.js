import { boolean, nullable, object, optional, string } from '../schema';
export const teamMemberBookingProfileSchema = object({
    teamMemberId: ['team_member_id', optional(string())],
    description: ['description', optional(string())],
    displayName: ['display_name', optional(string())],
    isBookable: ['is_bookable', optional(nullable(boolean()))],
    profileImageUrl: ['profile_image_url', optional(string())],
});
//# sourceMappingURL=teamMemberBookingProfile.js.map