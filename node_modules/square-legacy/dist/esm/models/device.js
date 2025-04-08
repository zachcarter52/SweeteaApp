import { array, lazy, nullable, object, optional, string, } from '../schema';
import { componentSchema } from './component';
import { deviceAttributesSchema } from './deviceAttributes';
import { deviceStatusSchema } from './deviceStatus';
export const deviceSchema = object({
    id: ['id', optional(string())],
    attributes: ['attributes', lazy(() => deviceAttributesSchema)],
    components: [
        'components',
        optional(nullable(array(lazy(() => componentSchema)))),
    ],
    status: ['status', optional(lazy(() => deviceStatusSchema))],
});
//# sourceMappingURL=device.js.map