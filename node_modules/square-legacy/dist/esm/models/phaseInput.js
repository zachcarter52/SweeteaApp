import { bigint, nullable, object, optional, string } from '../schema';
export const phaseInputSchema = object({
    ordinal: ['ordinal', bigint()],
    orderTemplateId: ['order_template_id', optional(nullable(string()))],
});
//# sourceMappingURL=phaseInput.js.map