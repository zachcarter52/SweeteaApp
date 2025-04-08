import { lazy, object } from '../schema';
import { breakTypeSchema } from './breakType';
export const updateBreakTypeRequestSchema = object({ breakType: ['break_type', lazy(() => breakTypeSchema)] });
//# sourceMappingURL=updateBreakTypeRequest.js.map