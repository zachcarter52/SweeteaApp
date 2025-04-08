import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { catalogObjectSchema } from './catalogObject';
export const catalogItemOptionSchema = object({
    name: ['name', optional(nullable(string()))],
    displayName: ['display_name', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    showColors: ['show_colors', optional(nullable(boolean()))],
    values: [
        'values',
        optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
});
//# sourceMappingURL=catalogItemOption.js.map