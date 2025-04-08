import { array, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { catalogObjectSchema } from './catalogObject';
export const catalogModifierListSchema = object({
    name: ['name', optional(nullable(string()))],
    ordinal: ['ordinal', optional(nullable(number()))],
    selectionType: ['selection_type', optional(string())],
    modifiers: [
        'modifiers',
        optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
    imageIds: ['image_ids', optional(nullable(array(string())))],
    modifierType: ['modifier_type', optional(string())],
    maxLength: ['max_length', optional(nullable(number()))],
    textRequired: ['text_required', optional(nullable(boolean()))],
    internalName: ['internal_name', optional(nullable(string()))],
});
//# sourceMappingURL=catalogModifierList.js.map