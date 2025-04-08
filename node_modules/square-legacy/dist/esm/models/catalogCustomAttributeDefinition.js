import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { catalogCustomAttributeDefinitionNumberConfigSchema, } from './catalogCustomAttributeDefinitionNumberConfig';
import { catalogCustomAttributeDefinitionSelectionConfigSchema, } from './catalogCustomAttributeDefinitionSelectionConfig';
import { catalogCustomAttributeDefinitionStringConfigSchema, } from './catalogCustomAttributeDefinitionStringConfig';
import { sourceApplicationSchema, } from './sourceApplication';
export const catalogCustomAttributeDefinitionSchema = object({
    type: ['type', string()],
    name: ['name', string()],
    description: ['description', optional(nullable(string()))],
    sourceApplication: [
        'source_application',
        optional(lazy(() => sourceApplicationSchema)),
    ],
    allowedObjectTypes: ['allowed_object_types', array(string())],
    sellerVisibility: ['seller_visibility', optional(string())],
    appVisibility: ['app_visibility', optional(string())],
    stringConfig: [
        'string_config',
        optional(lazy(() => catalogCustomAttributeDefinitionStringConfigSchema)),
    ],
    numberConfig: [
        'number_config',
        optional(lazy(() => catalogCustomAttributeDefinitionNumberConfigSchema)),
    ],
    selectionConfig: [
        'selection_config',
        optional(lazy(() => catalogCustomAttributeDefinitionSelectionConfigSchema)),
    ],
    customAttributeUsageCount: [
        'custom_attribute_usage_count',
        optional(number()),
    ],
    key: ['key', optional(nullable(string()))],
});
//# sourceMappingURL=catalogCustomAttributeDefinition.js.map