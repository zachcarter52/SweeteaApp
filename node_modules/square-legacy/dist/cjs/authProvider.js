"use strict";
exports.__esModule = true;
exports.createAuthProviderFromConfig = void 0;
var authentication_1 = require("./authentication");
function createAuthProviderFromConfig(config) {
    var authConfig = {
        global: config.bearerAuthCredentials &&
            (0, authentication_1.accessTokenAuthenticationProvider)(config.bearerAuthCredentials)
    };
    return (0, authentication_1.compositeAuthenticationProvider)(authConfig);
}
exports.createAuthProviderFromConfig = createAuthProviderFromConfig;
//# sourceMappingURL=authProvider.js.map