"use strict";
exports.__esModule = true;
exports.teamMemberAssignedLocationsSchema = void 0;
var schema_1 = require("../schema");
exports.teamMemberAssignedLocationsSchema = (0, schema_1.object)({
    assignmentType: ['assignment_type', (0, schema_1.optional)((0, schema_1.string)())],
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=teamMemberAssignedLocations.js.map