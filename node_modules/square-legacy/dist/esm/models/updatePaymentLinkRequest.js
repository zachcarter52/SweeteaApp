import { lazy, object } from '../schema';
import { paymentLinkSchema } from './paymentLink';
export const updatePaymentLinkRequestSchema = object({ paymentLink: ['payment_link', lazy(() => paymentLinkSchema)] });
//# sourceMappingURL=updatePaymentLinkRequest.js.map