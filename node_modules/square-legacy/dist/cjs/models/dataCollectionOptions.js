"use strict";
exports.__esModule = true;
exports.dataCollectionOptionsSchema = void 0;
var schema_1 = require("../schema");
var collectedData_1 = require("./collectedData");
exports.dataCollectionOptionsSchema = (0, schema_1.object)({
    title: ['title', (0, schema_1.string)()],
    body: ['body', (0, schema_1.string)()],
    inputType: ['input_type', (0, schema_1.string)()],
    collectedData: [
        'collected_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return collectedData_1.collectedDataSchema; })),
    ]
});
//# sourceMappingURL=dataCollectionOptions.js.map