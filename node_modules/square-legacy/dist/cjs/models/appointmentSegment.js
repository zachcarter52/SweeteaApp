"use strict";
exports.__esModule = true;
exports.appointmentSegmentSchema = void 0;
var schema_1 = require("../schema");
exports.appointmentSegmentSchema = (0, schema_1.object)({
    durationMinutes: ['duration_minutes', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    serviceVariationId: ['service_variation_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    teamMemberId: ['team_member_id', (0, schema_1.string)()],
    serviceVariationVersion: [
        'service_variation_version',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)())),
    ],
    intermissionMinutes: ['intermission_minutes', (0, schema_1.optional)((0, schema_1.number)())],
    anyTeamMember: ['any_team_member', (0, schema_1.optional)((0, schema_1.boolean)())],
    resourceIds: ['resource_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))]
});
//# sourceMappingURL=appointmentSegment.js.map