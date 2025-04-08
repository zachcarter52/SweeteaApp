"use strict";
exports.__esModule = true;
exports.catalogTaxSchema = void 0;
var schema_1 = require("../schema");
exports.catalogTaxSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    calculationPhase: ['calculation_phase', (0, schema_1.optional)((0, schema_1.string)())],
    inclusionType: ['inclusion_type', (0, schema_1.optional)((0, schema_1.string)())],
    percentage: ['percentage', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    appliesToCustomAmounts: [
        'applies_to_custom_amounts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    enabled: ['enabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    appliesToProductSetId: [
        'applies_to_product_set_id',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ]
});
//# sourceMappingURL=catalogTax.js.map