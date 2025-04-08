import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { workweekConfigSchema } from './workweekConfig';
export const listWorkweekConfigsResponseSchema = object({
    workweekConfigs: [
        'workweek_configs',
        optional(array(lazy(() => workweekConfigSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listWorkweekConfigsResponse.js.map