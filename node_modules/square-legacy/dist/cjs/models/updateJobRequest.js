"use strict";
exports.__esModule = true;
exports.updateJobRequestSchema = void 0;
var schema_1 = require("../schema");
var job_1 = require("./job");
exports.updateJobRequestSchema = (0, schema_1.object)({
    job: ['job', (0, schema_1.lazy)(function () { return job_1.jobSchema; })]
});
//# sourceMappingURL=updateJobRequest.js.map