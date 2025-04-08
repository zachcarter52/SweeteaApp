"use strict";
exports.__esModule = true;
exports.teamMemberSchema = void 0;
var schema_1 = require("../schema");
var teamMemberAssignedLocations_1 = require("./teamMemberAssignedLocations");
var wageSetting_1 = require("./wageSetting");
exports.teamMemberSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    isOwner: ['is_owner', (0, schema_1.optional)((0, schema_1.boolean)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    givenName: ['given_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    familyName: ['family_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    assignedLocations: [
        'assigned_locations',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return teamMemberAssignedLocations_1.teamMemberAssignedLocationsSchema; })),
    ],
    wageSetting: ['wage_setting', (0, schema_1.optional)((0, schema_1.lazy)(function () { return wageSetting_1.wageSettingSchema; }))]
});
//# sourceMappingURL=teamMember.js.map