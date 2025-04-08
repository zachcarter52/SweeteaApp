import { nullable, object, optional, string } from '../schema';
export const checkoutLocationSettingsPolicySchema = object({
    uid: ['uid', optional(nullable(string()))],
    title: ['title', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
});
//# sourceMappingURL=checkoutLocationSettingsPolicy.js.map