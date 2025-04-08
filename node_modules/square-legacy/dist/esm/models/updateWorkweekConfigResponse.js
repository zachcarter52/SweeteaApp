import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { workweekConfigSchema } from './workweekConfig';
export const updateWorkweekConfigResponseSchema = object({
    workweekConfig: [
        'workweek_config',
        optional(lazy(() => workweekConfigSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=updateWorkweekConfigResponse.js.map