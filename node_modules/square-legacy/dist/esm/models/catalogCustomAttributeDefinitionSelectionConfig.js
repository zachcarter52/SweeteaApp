import { array, lazy, nullable, number, object, optional, } from '../schema';
import { catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema, } from './catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection';
export const catalogCustomAttributeDefinitionSelectionConfigSchema = object({
    maxAllowedSelections: [
        'max_allowed_selections',
        optional(nullable(number())),
    ],
    allowedSelections: [
        'allowed_selections',
        optional(nullable(array(lazy(() => catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema)))),
    ],
});
//# sourceMappingURL=catalogCustomAttributeDefinitionSelectionConfig.js.map