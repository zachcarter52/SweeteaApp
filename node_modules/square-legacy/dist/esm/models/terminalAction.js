import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { confirmationOptionsSchema, } from './confirmationOptions';
import { dataCollectionOptionsSchema, } from './dataCollectionOptions';
import { deviceMetadataSchema } from './deviceMetadata';
import { qrCodeOptionsSchema } from './qrCodeOptions';
import { receiptOptionsSchema } from './receiptOptions';
import { saveCardOptionsSchema } from './saveCardOptions';
import { selectOptionsSchema } from './selectOptions';
import { signatureOptionsSchema } from './signatureOptions';
export const terminalActionSchema = object({
    id: ['id', optional(string())],
    deviceId: ['device_id', optional(nullable(string()))],
    deadlineDuration: ['deadline_duration', optional(nullable(string()))],
    status: ['status', optional(string())],
    cancelReason: ['cancel_reason', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    appId: ['app_id', optional(string())],
    locationId: ['location_id', optional(string())],
    type: ['type', optional(string())],
    qrCodeOptions: ['qr_code_options', optional(lazy(() => qrCodeOptionsSchema))],
    saveCardOptions: [
        'save_card_options',
        optional(lazy(() => saveCardOptionsSchema)),
    ],
    signatureOptions: [
        'signature_options',
        optional(lazy(() => signatureOptionsSchema)),
    ],
    confirmationOptions: [
        'confirmation_options',
        optional(lazy(() => confirmationOptionsSchema)),
    ],
    receiptOptions: [
        'receipt_options',
        optional(lazy(() => receiptOptionsSchema)),
    ],
    dataCollectionOptions: [
        'data_collection_options',
        optional(lazy(() => dataCollectionOptionsSchema)),
    ],
    selectOptions: ['select_options', optional(lazy(() => selectOptionsSchema))],
    deviceMetadata: [
        'device_metadata',
        optional(lazy(() => deviceMetadataSchema)),
    ],
    awaitNextAction: ['await_next_action', optional(nullable(boolean()))],
    awaitNextActionDuration: [
        'await_next_action_duration',
        optional(nullable(string())),
    ],
});
//# sourceMappingURL=terminalAction.js.map