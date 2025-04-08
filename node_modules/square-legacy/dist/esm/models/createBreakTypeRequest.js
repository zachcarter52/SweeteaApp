import { lazy, object, optional, string } from '../schema';
import { breakTypeSchema } from './breakType';
export const createBreakTypeRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    breakType: ['break_type', lazy(() => breakTypeSchema)],
});
//# sourceMappingURL=createBreakTypeRequest.js.map