import { number, object, optional, string } from '../schema';
export const workweekConfigSchema = object({
    id: ['id', optional(string())],
    startOfWeek: ['start_of_week', string()],
    startOfDayLocalTime: ['start_of_day_local_time', string()],
    version: ['version', optional(number())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=workweekConfig.js.map