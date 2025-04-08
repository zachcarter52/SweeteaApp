import { object, optional, string } from '../schema';
export const taxIdsSchema = object({
    euVat: ['eu_vat', optional(string())],
    frSiret: ['fr_siret', optional(string())],
    frNaf: ['fr_naf', optional(string())],
    esNif: ['es_nif', optional(string())],
    jpQii: ['jp_qii', optional(string())],
});
//# sourceMappingURL=taxIds.js.map