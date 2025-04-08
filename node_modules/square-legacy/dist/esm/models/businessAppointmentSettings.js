import { array, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const businessAppointmentSettingsSchema = object({
    locationTypes: ['location_types', optional(nullable(array(string())))],
    alignmentTime: ['alignment_time', optional(string())],
    minBookingLeadTimeSeconds: [
        'min_booking_lead_time_seconds',
        optional(nullable(number())),
    ],
    maxBookingLeadTimeSeconds: [
        'max_booking_lead_time_seconds',
        optional(nullable(number())),
    ],
    anyTeamMemberBookingEnabled: [
        'any_team_member_booking_enabled',
        optional(nullable(boolean())),
    ],
    multipleServiceBookingEnabled: [
        'multiple_service_booking_enabled',
        optional(nullable(boolean())),
    ],
    maxAppointmentsPerDayLimitType: [
        'max_appointments_per_day_limit_type',
        optional(string()),
    ],
    maxAppointmentsPerDayLimit: [
        'max_appointments_per_day_limit',
        optional(nullable(number())),
    ],
    cancellationWindowSeconds: [
        'cancellation_window_seconds',
        optional(nullable(number())),
    ],
    cancellationFeeMoney: [
        'cancellation_fee_money',
        optional(lazy(() => moneySchema)),
    ],
    cancellationPolicy: ['cancellation_policy', optional(string())],
    cancellationPolicyText: [
        'cancellation_policy_text',
        optional(nullable(string())),
    ],
    skipBookingFlowStaffSelection: [
        'skip_booking_flow_staff_selection',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=businessAppointmentSettings.js.map