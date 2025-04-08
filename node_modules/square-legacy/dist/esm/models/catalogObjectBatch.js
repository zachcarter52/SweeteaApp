import { array, lazy, object } from '../schema';
import { catalogObjectSchema } from './catalogObject';
export const catalogObjectBatchSchema = object({
    objects: ['objects', array(lazy(() => catalogObjectSchema))],
});
//# sourceMappingURL=catalogObjectBatch.js.map