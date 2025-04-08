import { lazy, object, string } from '../schema';
import { jobSchema } from './job';
export const createJobRequestSchema = object({
    job: ['job', lazy(() => jobSchema)],
    idempotencyKey: ['idempotency_key', string()],
});
//# sourceMappingURL=createJobRequest.js.map