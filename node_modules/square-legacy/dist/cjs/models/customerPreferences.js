"use strict";
exports.__esModule = true;
exports.customerPreferencesSchema = void 0;
var schema_1 = require("../schema");
exports.customerPreferencesSchema = (0, schema_1.object)({
    emailUnsubscribed: ['email_unsubscribed', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=customerPreferences.js.map