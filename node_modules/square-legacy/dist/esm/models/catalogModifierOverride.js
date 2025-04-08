import { boolean, nullable, object, optional, string } from '../schema';
export const catalogModifierOverrideSchema = object({
    modifierId: ['modifier_id', string()],
    onByDefault: ['on_by_default', optional(nullable(boolean()))],
});
//# sourceMappingURL=catalogModifierOverride.js.map