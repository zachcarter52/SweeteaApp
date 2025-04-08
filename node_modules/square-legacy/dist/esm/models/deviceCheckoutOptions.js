import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { tipSettingsSchema } from './tipSettings';
export const deviceCheckoutOptionsSchema = object({
    deviceId: ['device_id', string()],
    skipReceiptScreen: ['skip_receipt_screen', optional(nullable(boolean()))],
    collectSignature: ['collect_signature', optional(nullable(boolean()))],
    tipSettings: ['tip_settings', optional(lazy(() => tipSettingsSchema))],
    showItemizedCart: ['show_itemized_cart', optional(nullable(boolean()))],
});
//# sourceMappingURL=deviceCheckoutOptions.js.map