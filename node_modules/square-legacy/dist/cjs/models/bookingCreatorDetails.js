"use strict";
exports.__esModule = true;
exports.bookingCreatorDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.bookingCreatorDetailsSchema = (0, schema_1.object)({
    creatorType: ['creator_type', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.string)())],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=bookingCreatorDetails.js.map