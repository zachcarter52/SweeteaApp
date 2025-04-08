import { array, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { catalogModifierOverrideSchema, } from './catalogModifierOverride';
export const catalogItemModifierListInfoSchema = object({
    modifierListId: ['modifier_list_id', string()],
    modifierOverrides: [
        'modifier_overrides',
        optional(nullable(array(lazy(() => catalogModifierOverrideSchema)))),
    ],
    minSelectedModifiers: [
        'min_selected_modifiers',
        optional(nullable(number())),
    ],
    maxSelectedModifiers: [
        'max_selected_modifiers',
        optional(nullable(number())),
    ],
    enabled: ['enabled', optional(nullable(boolean()))],
    ordinal: ['ordinal', optional(nullable(number()))],
});
//# sourceMappingURL=catalogItemModifierListInfo.js.map