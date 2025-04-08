import { Configuration } from './configuration';
export declare function createAuthProviderFromConfig(config: Partial<Configuration>): import("@apimatic/core-interfaces").AuthenticatorInterface<import("@apimatic/authentication-adapters/lib/compositeAuthenticationAdapter").CompositeAuthParams<"global", {
    global: import("@apimatic/core-interfaces").AuthenticatorInterface<boolean> | undefined;
}>>;
