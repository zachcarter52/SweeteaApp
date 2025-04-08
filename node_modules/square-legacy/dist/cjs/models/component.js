"use strict";
exports.__esModule = true;
exports.componentSchema = void 0;
var schema_1 = require("../schema");
var deviceComponentDetailsApplicationDetails_1 = require("./deviceComponentDetailsApplicationDetails");
var deviceComponentDetailsBatteryDetails_1 = require("./deviceComponentDetailsBatteryDetails");
var deviceComponentDetailsCardReaderDetails_1 = require("./deviceComponentDetailsCardReaderDetails");
var deviceComponentDetailsEthernetDetails_1 = require("./deviceComponentDetailsEthernetDetails");
var deviceComponentDetailsWiFiDetails_1 = require("./deviceComponentDetailsWiFiDetails");
exports.componentSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    applicationDetails: [
        'application_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceComponentDetailsApplicationDetails_1.deviceComponentDetailsApplicationDetailsSchema; })),
    ],
    cardReaderDetails: [
        'card_reader_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceComponentDetailsCardReaderDetails_1.deviceComponentDetailsCardReaderDetailsSchema; })),
    ],
    batteryDetails: [
        'battery_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceComponentDetailsBatteryDetails_1.deviceComponentDetailsBatteryDetailsSchema; })),
    ],
    wifiDetails: [
        'wifi_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceComponentDetailsWiFiDetails_1.deviceComponentDetailsWiFiDetailsSchema; })),
    ],
    ethernetDetails: [
        'ethernet_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceComponentDetailsEthernetDetails_1.deviceComponentDetailsEthernetDetailsSchema; })),
    ]
});
//# sourceMappingURL=component.js.map