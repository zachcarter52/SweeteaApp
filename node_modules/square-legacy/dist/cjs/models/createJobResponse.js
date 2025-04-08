"use strict";
exports.__esModule = true;
exports.createJobResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var job_1 = require("./job");
exports.createJobResponseSchema = (0, schema_1.object)({
    job: ['job', (0, schema_1.optional)((0, schema_1.lazy)(function () { return job_1.jobSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=createJobResponse.js.map