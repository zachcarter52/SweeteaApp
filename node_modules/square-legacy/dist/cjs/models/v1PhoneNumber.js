"use strict";
exports.__esModule = true;
exports.v1PhoneNumberSchema = void 0;
var schema_1 = require("../schema");
exports.v1PhoneNumberSchema = (0, schema_1.object)({
    callingCode: ['calling_code', (0, schema_1.string)()],
    number: ['number', (0, schema_1.string)()]
});
//# sourceMappingURL=v1PhoneNumber.js.map