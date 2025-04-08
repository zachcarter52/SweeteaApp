import { lazy, object } from '../schema';
import { wageSettingSchema } from './wageSetting';
export const updateWageSettingRequestSchema = object({ wageSetting: ['wage_setting', lazy(() => wageSettingSchema)] });
//# sourceMappingURL=updateWageSettingRequest.js.map