"use strict";
exports.__esModule = true;
exports.segmentFilterSchema = void 0;
var schema_1 = require("../schema");
var filterValue_1 = require("./filterValue");
exports.segmentFilterSchema = (0, schema_1.object)({
    serviceVariationId: ['service_variation_id', (0, schema_1.string)()],
    teamMemberIdFilter: [
        'team_member_id_filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return filterValue_1.filterValueSchema; })),
    ]
});
//# sourceMappingURL=segmentFilter.js.map