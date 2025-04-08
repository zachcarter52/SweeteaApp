"use strict";
exports.__esModule = true;
exports.riskEvaluationSchema = void 0;
var schema_1 = require("../schema");
exports.riskEvaluationSchema = (0, schema_1.object)({
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    riskLevel: ['risk_level', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=riskEvaluation.js.map