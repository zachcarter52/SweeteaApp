"use strict";
exports.__esModule = true;
exports.listLoyaltyProgramsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var loyaltyProgram_1 = require("./loyaltyProgram");
exports.listLoyaltyProgramsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    programs: ['programs', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return loyaltyProgram_1.loyaltyProgramSchema; })))]
});
//# sourceMappingURL=listLoyaltyProgramsResponse.js.map