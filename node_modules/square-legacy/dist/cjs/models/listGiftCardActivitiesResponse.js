"use strict";
exports.__esModule = true;
exports.listGiftCardActivitiesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var giftCardActivity_1 = require("./giftCardActivity");
exports.listGiftCardActivitiesResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    giftCardActivities: [
        'gift_card_activities',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return giftCardActivity_1.giftCardActivitySchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listGiftCardActivitiesResponse.js.map