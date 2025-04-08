import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { jobSchema } from './job';
export const listJobsResponseSchema = object({
    jobs: ['jobs', optional(array(lazy(() => jobSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listJobsResponse.js.map