import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { wageSettingSchema } from './wageSetting';
export const retrieveWageSettingResponseSchema = object({
    wageSetting: ['wage_setting', optional(lazy(() => wageSettingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveWageSettingResponse.js.map