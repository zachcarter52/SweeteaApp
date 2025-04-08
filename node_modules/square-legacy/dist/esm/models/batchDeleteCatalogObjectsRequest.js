import { array, nullable, object, optional, string } from '../schema';
export const batchDeleteCatalogObjectsRequestSchema = object({ objectIds: ['object_ids', optional(nullable(array(string())))] });
//# sourceMappingURL=batchDeleteCatalogObjectsRequest.js.map