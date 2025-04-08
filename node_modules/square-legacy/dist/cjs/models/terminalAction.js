"use strict";
exports.__esModule = true;
exports.terminalActionSchema = void 0;
var schema_1 = require("../schema");
var confirmationOptions_1 = require("./confirmationOptions");
var dataCollectionOptions_1 = require("./dataCollectionOptions");
var deviceMetadata_1 = require("./deviceMetadata");
var qrCodeOptions_1 = require("./qrCodeOptions");
var receiptOptions_1 = require("./receiptOptions");
var saveCardOptions_1 = require("./saveCardOptions");
var selectOptions_1 = require("./selectOptions");
var signatureOptions_1 = require("./signatureOptions");
exports.terminalActionSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    deviceId: ['device_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    deadlineDuration: ['deadline_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    cancelReason: ['cancel_reason', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    appId: ['app_id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    qrCodeOptions: ['qr_code_options', (0, schema_1.optional)((0, schema_1.lazy)(function () { return qrCodeOptions_1.qrCodeOptionsSchema; }))],
    saveCardOptions: [
        'save_card_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return saveCardOptions_1.saveCardOptionsSchema; })),
    ],
    signatureOptions: [
        'signature_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return signatureOptions_1.signatureOptionsSchema; })),
    ],
    confirmationOptions: [
        'confirmation_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return confirmationOptions_1.confirmationOptionsSchema; })),
    ],
    receiptOptions: [
        'receipt_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return receiptOptions_1.receiptOptionsSchema; })),
    ],
    dataCollectionOptions: [
        'data_collection_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return dataCollectionOptions_1.dataCollectionOptionsSchema; })),
    ],
    selectOptions: ['select_options', (0, schema_1.optional)((0, schema_1.lazy)(function () { return selectOptions_1.selectOptionsSchema; }))],
    deviceMetadata: [
        'device_metadata',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceMetadata_1.deviceMetadataSchema; })),
    ],
    awaitNextAction: ['await_next_action', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    awaitNextActionDuration: [
        'await_next_action_duration',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ]
});
//# sourceMappingURL=terminalAction.js.map