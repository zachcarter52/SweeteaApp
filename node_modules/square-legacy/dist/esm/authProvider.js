import { accessTokenAuthenticationProvider, compositeAuthenticationProvider, } from './authentication';
export function createAuthProviderFromConfig(config) {
    const authConfig = {
        global: config.bearerAuthCredentials &&
            accessTokenAuthenticationProvider(config.bearerAuthCredentials),
    };
    return compositeAuthenticationProvider(authConfig);
}
//# sourceMappingURL=authProvider.js.map