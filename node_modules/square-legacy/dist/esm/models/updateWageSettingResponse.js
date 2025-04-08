import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { wageSettingSchema } from './wageSetting';
export const updateWageSettingResponseSchema = object({
    wageSetting: ['wage_setting', optional(lazy(() => wageSettingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=updateWageSettingResponse.js.map