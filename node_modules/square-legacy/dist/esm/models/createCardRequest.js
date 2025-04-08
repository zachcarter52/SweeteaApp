import { lazy, object, optional, string } from '../schema';
import { cardSchema } from './card';
export const createCardRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    sourceId: ['source_id', string()],
    verificationToken: ['verification_token', optional(string())],
    card: ['card', lazy(() => cardSchema)],
});
//# sourceMappingURL=createCardRequest.js.map