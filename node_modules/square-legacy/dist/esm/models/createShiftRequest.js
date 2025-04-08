import { lazy, object, optional, string } from '../schema';
import { shiftSchema } from './shift';
export const createShiftRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    shift: ['shift', lazy(() => shiftSchema)],
});
//# sourceMappingURL=createShiftRequest.js.map