import { array, lazy, object, optional, string } from '../schema';
import { signatureImageSchema } from './signatureImage';
export const signatureOptionsSchema = object({
    title: ['title', string()],
    body: ['body', string()],
    signature: ['signature', optional(array(lazy(() => signatureImageSchema)))],
});
//# sourceMappingURL=signatureOptions.js.map