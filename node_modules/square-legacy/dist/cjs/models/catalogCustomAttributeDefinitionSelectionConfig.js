"use strict";
exports.__esModule = true;
exports.catalogCustomAttributeDefinitionSelectionConfigSchema = void 0;
var schema_1 = require("../schema");
var catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection_1 = require("./catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection");
exports.catalogCustomAttributeDefinitionSelectionConfigSchema = (0, schema_1.object)({
    maxAllowedSelections: [
        'max_allowed_selections',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    allowedSelections: [
        'allowed_selections',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () {
            return catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection_1.catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema;
        })))),
    ]
});
//# sourceMappingURL=catalogCustomAttributeDefinitionSelectionConfig.js.map