import { lazy, object, optional, string } from '../schema';
import { collectedDataSchema } from './collectedData';
export const dataCollectionOptionsSchema = object({
    title: ['title', string()],
    body: ['body', string()],
    inputType: ['input_type', string()],
    collectedData: [
        'collected_data',
        optional(lazy(() => collectedDataSchema)),
    ],
});
//# sourceMappingURL=dataCollectionOptions.js.map