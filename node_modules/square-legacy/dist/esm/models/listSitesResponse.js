import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { siteSchema } from './site';
export const listSitesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    sites: ['sites', optional(array(lazy(() => siteSchema)))],
});
//# sourceMappingURL=listSitesResponse.js.map