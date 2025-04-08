"use strict";
exports.__esModule = true;
exports.businessAppointmentSettingsSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.businessAppointmentSettingsSchema = (0, schema_1.object)({
    locationTypes: ['location_types', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    alignmentTime: ['alignment_time', (0, schema_1.optional)((0, schema_1.string)())],
    minBookingLeadTimeSeconds: [
        'min_booking_lead_time_seconds',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    maxBookingLeadTimeSeconds: [
        'max_booking_lead_time_seconds',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    anyTeamMemberBookingEnabled: [
        'any_team_member_booking_enabled',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    multipleServiceBookingEnabled: [
        'multiple_service_booking_enabled',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    maxAppointmentsPerDayLimitType: [
        'max_appointments_per_day_limit_type',
        (0, schema_1.optional)((0, schema_1.string)()),
    ],
    maxAppointmentsPerDayLimit: [
        'max_appointments_per_day_limit',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    cancellationWindowSeconds: [
        'cancellation_window_seconds',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    cancellationFeeMoney: [
        'cancellation_fee_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    cancellationPolicy: ['cancellation_policy', (0, schema_1.optional)((0, schema_1.string)())],
    cancellationPolicyText: [
        'cancellation_policy_text',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    skipBookingFlowStaffSelection: [
        'skip_booking_flow_staff_selection',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=businessAppointmentSettings.js.map