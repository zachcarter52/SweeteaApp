import { lazy, object } from '../schema';
import { workweekConfigSchema } from './workweekConfig';
export const updateWorkweekConfigRequestSchema = object({ workweekConfig: ['workweek_config', lazy(() => workweekConfigSchema)] });
//# sourceMappingURL=updateWorkweekConfigRequest.js.map