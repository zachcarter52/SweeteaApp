import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteInvoiceResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteInvoiceResponse.js.map