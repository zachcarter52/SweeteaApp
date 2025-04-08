import { array, nullable, object, optional, string } from '../schema';
export const searchOrdersSourceFilterSchema = object({ sourceNames: ['source_names', optional(nullable(array(string())))] });
//# sourceMappingURL=searchOrdersSourceFilter.js.map