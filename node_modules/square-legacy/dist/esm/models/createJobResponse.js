import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { jobSchema } from './job';
export const createJobResponseSchema = object({
    job: ['job', optional(lazy(() => jobSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createJobResponse.js.map