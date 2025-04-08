"use strict";
exports.__esModule = true;
exports.taxIdsSchema = void 0;
var schema_1 = require("../schema");
exports.taxIdsSchema = (0, schema_1.object)({
    euVat: ['eu_vat', (0, schema_1.optional)((0, schema_1.string)())],
    frSiret: ['fr_siret', (0, schema_1.optional)((0, schema_1.string)())],
    frNaf: ['fr_naf', (0, schema_1.optional)((0, schema_1.string)())],
    esNif: ['es_nif', (0, schema_1.optional)((0, schema_1.string)())],
    jpQii: ['jp_qii', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=taxIds.js.map