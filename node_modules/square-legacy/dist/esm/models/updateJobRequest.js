import { lazy, object } from '../schema';
import { jobSchema } from './job';
export const updateJobRequestSchema = object({
    job: ['job', lazy(() => jobSchema)],
});
//# sourceMappingURL=updateJobRequest.js.map