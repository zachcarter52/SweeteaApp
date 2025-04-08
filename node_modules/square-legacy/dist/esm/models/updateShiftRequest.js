import { lazy, object } from '../schema';
import { shiftSchema } from './shift';
export const updateShiftRequestSchema = object({
    shift: ['shift', lazy(() => shiftSchema)],
});
//# sourceMappingURL=updateShiftRequest.js.map