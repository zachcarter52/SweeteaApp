"use strict";
exports.__esModule = true;
exports.BaseApi = void 0;
/** Base class for all controllers */
var BaseApi = /** @class */ (function () {
    function BaseApi(client) {
        this.createRequest = client.getRequestBuilderFactory();
    }
    return BaseApi;
}());
exports.BaseApi = BaseApi;
//# sourceMappingURL=baseApi.js.map