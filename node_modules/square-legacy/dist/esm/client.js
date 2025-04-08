import { ApplePayApi } from './api/applePayApi';
import { BankAccountsApi } from './api/bankAccountsApi';
import { BookingCustomAttributesApi } from './api/bookingCustomAttributesApi';
import { BookingsApi } from './api/bookingsApi';
import { CardsApi } from './api/cardsApi';
import { CashDrawersApi } from './api/cashDrawersApi';
import { CatalogApi } from './api/catalogApi';
import { CheckoutApi } from './api/checkoutApi';
import { CustomerCustomAttributesApi } from './api/customerCustomAttributesApi';
import { CustomerGroupsApi } from './api/customerGroupsApi';
import { CustomersApi } from './api/customersApi';
import { CustomerSegmentsApi } from './api/customerSegmentsApi';
import { DevicesApi } from './api/devicesApi';
import { DisputesApi } from './api/disputesApi';
import { EmployeesApi } from './api/employeesApi';
import { EventsApi } from './api/eventsApi';
import { GiftCardActivitiesApi } from './api/giftCardActivitiesApi';
import { GiftCardsApi } from './api/giftCardsApi';
import { InventoryApi } from './api/inventoryApi';
import { InvoicesApi } from './api/invoicesApi';
import { LaborApi } from './api/laborApi';
import { LocationCustomAttributesApi } from './api/locationCustomAttributesApi';
import { LocationsApi } from './api/locationsApi';
import { LoyaltyApi } from './api/loyaltyApi';
import { MerchantCustomAttributesApi } from './api/merchantCustomAttributesApi';
import { MerchantsApi } from './api/merchantsApi';
import { MobileAuthorizationApi } from './api/mobileAuthorizationApi';
import { OAuthApi } from './api/oAuthApi';
import { OrderCustomAttributesApi } from './api/orderCustomAttributesApi';
import { OrdersApi } from './api/ordersApi';
import { PaymentsApi } from './api/paymentsApi';
import { PayoutsApi } from './api/payoutsApi';
import { RefundsApi } from './api/refundsApi';
import { SitesApi } from './api/sitesApi';
import { SnippetsApi } from './api/snippetsApi';
import { SubscriptionsApi } from './api/subscriptionsApi';
import { TeamApi } from './api/teamApi';
import { TerminalApi } from './api/terminalApi';
import { TransactionsApi } from './api/transactionsApi';
import { V1TransactionsApi } from './api/v1TransactionsApi';
import { VendorsApi } from './api/vendorsApi';
import { WebhookSubscriptionsApi } from './api/webhookSubscriptionsApi';
import { createAuthProviderFromConfig } from './authProvider';
import { Environment } from './configuration';
import { DEFAULT_CONFIGURATION, DEFAULT_RETRY_CONFIG, } from './defaultConfiguration';
import { ApiError } from './errors/apiError';
import { assertHeaders, mergeHeaders } from './core';
import { pathTemplate, SkipEncode } from './core';
import { setHeader } from './core';
import { updateUserAgent } from './core';
import { AbortError, createRequestBuilderFactory, } from './core';
import { HttpClient } from './clientAdapter';
/** Current SDK version */
export const SDK_VERSION = '39.1.1';
export class Client {
    constructor(config) {
        var _a, _b, _c, _d;
        this._config = Object.assign(Object.assign({}, DEFAULT_CONFIGURATION), config);
        this._retryConfig = Object.assign(Object.assign({}, DEFAULT_RETRY_CONFIG), (_a = this._config.httpClientOptions) === null || _a === void 0 ? void 0 : _a.retryConfig);
        this._timeout =
            typeof ((_b = this._config.httpClientOptions) === null || _b === void 0 ? void 0 : _b.timeout) != 'undefined'
                ? this._config.httpClientOptions.timeout
                : this._config.timeout;
        const clonedConfig = Object.assign(Object.assign({}, this._config), { bearerAuthCredentials: this._config.bearerAuthCredentials || {
                accessToken: this._config.accessToken || '',
            } });
        this._userAgent = updateUserAgent('Square-TypeScript-SDK/39.1.1 ({api-version}) {engine}/{engine-version} ({os-info}) {detail}', this._config.squareVersion, this._config.userAgentDetail);
        this._requestBuilderFactory = createRequestHandlerFactory((server) => getBaseUri(server, this._config), createAuthProviderFromConfig(clonedConfig), new HttpClient(AbortError, {
            timeout: this._timeout,
            clientConfigOverrides: this._config.unstable_httpClientOptions,
            httpAgent: (_c = this._config.httpClientOptions) === null || _c === void 0 ? void 0 : _c.httpAgent,
            httpsAgent: (_d = this._config.httpClientOptions) === null || _d === void 0 ? void 0 : _d.httpsAgent,
        }), [
            withErrorHandlers,
            withUserAgent(this._userAgent),
            withAdditionalHeaders(this._config),
            withAuthenticationByDefault,
            withSquareVersion(this._config),
        ], this._retryConfig);
        this.applePayApi = new ApplePayApi(this);
        this.bankAccountsApi = new BankAccountsApi(this);
        this.bookingCustomAttributesApi = new BookingCustomAttributesApi(this);
        this.bookingsApi = new BookingsApi(this);
        this.cardsApi = new CardsApi(this);
        this.cashDrawersApi = new CashDrawersApi(this);
        this.catalogApi = new CatalogApi(this);
        this.checkoutApi = new CheckoutApi(this);
        this.customerCustomAttributesApi = new CustomerCustomAttributesApi(this);
        this.customerGroupsApi = new CustomerGroupsApi(this);
        this.customersApi = new CustomersApi(this);
        this.customerSegmentsApi = new CustomerSegmentsApi(this);
        this.devicesApi = new DevicesApi(this);
        this.disputesApi = new DisputesApi(this);
        this.employeesApi = new EmployeesApi(this);
        this.eventsApi = new EventsApi(this);
        this.giftCardActivitiesApi = new GiftCardActivitiesApi(this);
        this.giftCardsApi = new GiftCardsApi(this);
        this.inventoryApi = new InventoryApi(this);
        this.invoicesApi = new InvoicesApi(this);
        this.laborApi = new LaborApi(this);
        this.locationCustomAttributesApi = new LocationCustomAttributesApi(this);
        this.locationsApi = new LocationsApi(this);
        this.loyaltyApi = new LoyaltyApi(this);
        this.merchantCustomAttributesApi = new MerchantCustomAttributesApi(this);
        this.merchantsApi = new MerchantsApi(this);
        this.mobileAuthorizationApi = new MobileAuthorizationApi(this);
        this.oAuthApi = new OAuthApi(this);
        this.orderCustomAttributesApi = new OrderCustomAttributesApi(this);
        this.ordersApi = new OrdersApi(this);
        this.paymentsApi = new PaymentsApi(this);
        this.payoutsApi = new PayoutsApi(this);
        this.refundsApi = new RefundsApi(this);
        this.sitesApi = new SitesApi(this);
        this.snippetsApi = new SnippetsApi(this);
        this.subscriptionsApi = new SubscriptionsApi(this);
        this.teamApi = new TeamApi(this);
        this.terminalApi = new TerminalApi(this);
        this.transactionsApi = new TransactionsApi(this);
        this.v1TransactionsApi = new V1TransactionsApi(this);
        this.vendorsApi = new VendorsApi(this);
        this.webhookSubscriptionsApi = new WebhookSubscriptionsApi(this);
    }
    getRequestBuilderFactory() {
        return this._requestBuilderFactory;
    }
    /**
     * Clone this client and override given configuration options
     */
    withConfiguration(config) {
        return new Client(Object.assign(Object.assign({}, this._config), config));
    }
}
function createHttpClientAdapter(client) {
    return async (request, requestOptions) => {
        return await client.executeRequest(request, requestOptions);
    };
}
function getBaseUri(server = 'default', config) {
    if (config.environment === Environment.Production) {
        if (server === 'default') {
            return 'https://connect.squareup.com';
        }
    }
    if (config.environment === Environment.Sandbox) {
        if (server === 'default') {
            return 'https://connect.squareupsandbox.com';
        }
    }
    if (config.environment === Environment.Custom) {
        if (server === 'default') {
            return pathTemplate `${new SkipEncode(config.customUrl)}`;
        }
    }
    throw new Error('Could not get Base URL. Invalid environment or server.');
}
function createRequestHandlerFactory(baseUrlProvider, authProvider, httpClient, addons, retryConfig) {
    const requestBuilderFactory = createRequestBuilderFactory(createHttpClientAdapter(httpClient), baseUrlProvider, ApiError, authProvider, retryConfig);
    return tap(requestBuilderFactory, ...addons);
}
function tap(requestBuilderFactory, ...callback) {
    return (...args) => {
        const requestBuilder = requestBuilderFactory(...args);
        callback.forEach((c) => c(requestBuilder));
        return requestBuilder;
    };
}
function withErrorHandlers(rb) {
    rb.defaultToError(ApiError);
}
function withAdditionalHeaders({ additionalHeaders, }) {
    const clone = Object.assign({}, additionalHeaders);
    assertHeaders(clone);
    return (rb) => {
        rb.interceptRequest((request) => {
            var _a;
            const headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
            mergeHeaders(headers, clone);
            return Object.assign(Object.assign({}, request), { headers });
        });
    };
}
function withUserAgent(userAgent) {
    return (rb) => {
        rb.interceptRequest((request) => {
            var _a;
            const headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
            setHeader(headers, 'user-agent', userAgent);
            return Object.assign(Object.assign({}, request), { headers });
        });
    };
}
function withSquareVersion({ squareVersion }) {
    return (rb) => {
        rb.interceptRequest((request) => {
            var _a;
            const headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
            setHeader(headers, 'Square-Version', squareVersion);
            return Object.assign(Object.assign({}, request), { headers });
        });
    };
}
function withAuthenticationByDefault(rb) {
    rb.authenticate([]);
}
//# sourceMappingURL=client.js.map