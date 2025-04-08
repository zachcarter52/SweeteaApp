import { boolean, nullable, object, optional } from '../schema';
export const customerPreferencesSchema = object({
    emailUnsubscribed: ['email_unsubscribed', optional(nullable(boolean()))],
});
//# sourceMappingURL=customerPreferences.js.map