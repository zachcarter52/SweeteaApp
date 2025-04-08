"use strict";
exports.__esModule = true;
exports.Client = exports.SDK_VERSION = void 0;
var tslib_1 = require("tslib");
var applePayApi_1 = require("./api/applePayApi");
var bankAccountsApi_1 = require("./api/bankAccountsApi");
var bookingCustomAttributesApi_1 = require("./api/bookingCustomAttributesApi");
var bookingsApi_1 = require("./api/bookingsApi");
var cardsApi_1 = require("./api/cardsApi");
var cashDrawersApi_1 = require("./api/cashDrawersApi");
var catalogApi_1 = require("./api/catalogApi");
var checkoutApi_1 = require("./api/checkoutApi");
var customerCustomAttributesApi_1 = require("./api/customerCustomAttributesApi");
var customerGroupsApi_1 = require("./api/customerGroupsApi");
var customersApi_1 = require("./api/customersApi");
var customerSegmentsApi_1 = require("./api/customerSegmentsApi");
var devicesApi_1 = require("./api/devicesApi");
var disputesApi_1 = require("./api/disputesApi");
var employeesApi_1 = require("./api/employeesApi");
var eventsApi_1 = require("./api/eventsApi");
var giftCardActivitiesApi_1 = require("./api/giftCardActivitiesApi");
var giftCardsApi_1 = require("./api/giftCardsApi");
var inventoryApi_1 = require("./api/inventoryApi");
var invoicesApi_1 = require("./api/invoicesApi");
var laborApi_1 = require("./api/laborApi");
var locationCustomAttributesApi_1 = require("./api/locationCustomAttributesApi");
var locationsApi_1 = require("./api/locationsApi");
var loyaltyApi_1 = require("./api/loyaltyApi");
var merchantCustomAttributesApi_1 = require("./api/merchantCustomAttributesApi");
var merchantsApi_1 = require("./api/merchantsApi");
var mobileAuthorizationApi_1 = require("./api/mobileAuthorizationApi");
var oAuthApi_1 = require("./api/oAuthApi");
var orderCustomAttributesApi_1 = require("./api/orderCustomAttributesApi");
var ordersApi_1 = require("./api/ordersApi");
var paymentsApi_1 = require("./api/paymentsApi");
var payoutsApi_1 = require("./api/payoutsApi");
var refundsApi_1 = require("./api/refundsApi");
var sitesApi_1 = require("./api/sitesApi");
var snippetsApi_1 = require("./api/snippetsApi");
var subscriptionsApi_1 = require("./api/subscriptionsApi");
var teamApi_1 = require("./api/teamApi");
var terminalApi_1 = require("./api/terminalApi");
var transactionsApi_1 = require("./api/transactionsApi");
var v1TransactionsApi_1 = require("./api/v1TransactionsApi");
var vendorsApi_1 = require("./api/vendorsApi");
var webhookSubscriptionsApi_1 = require("./api/webhookSubscriptionsApi");
var authProvider_1 = require("./authProvider");
var configuration_1 = require("./configuration");
var defaultConfiguration_1 = require("./defaultConfiguration");
var apiError_1 = require("./errors/apiError");
var core_1 = require("./core");
var core_2 = require("./core");
var core_3 = require("./core");
var core_4 = require("./core");
var core_5 = require("./core");
var clientAdapter_1 = require("./clientAdapter");
/** Current SDK version */
exports.SDK_VERSION = '39.1.1';
var Client = /** @class */ (function () {
    function Client(config) {
        var _this = this;
        var _a, _b, _c, _d;
        this._config = tslib_1.__assign(tslib_1.__assign({}, defaultConfiguration_1.DEFAULT_CONFIGURATION), config);
        this._retryConfig = tslib_1.__assign(tslib_1.__assign({}, defaultConfiguration_1.DEFAULT_RETRY_CONFIG), (_a = this._config.httpClientOptions) === null || _a === void 0 ? void 0 : _a.retryConfig);
        this._timeout =
            typeof ((_b = this._config.httpClientOptions) === null || _b === void 0 ? void 0 : _b.timeout) != 'undefined'
                ? this._config.httpClientOptions.timeout
                : this._config.timeout;
        var clonedConfig = tslib_1.__assign(tslib_1.__assign({}, this._config), { bearerAuthCredentials: this._config.bearerAuthCredentials || {
                accessToken: this._config.accessToken || ''
            } });
        this._userAgent = (0, core_4.updateUserAgent)('Square-TypeScript-SDK/39.1.1 ({api-version}) {engine}/{engine-version} ({os-info}) {detail}', this._config.squareVersion, this._config.userAgentDetail);
        this._requestBuilderFactory = createRequestHandlerFactory(function (server) { return getBaseUri(server, _this._config); }, (0, authProvider_1.createAuthProviderFromConfig)(clonedConfig), new clientAdapter_1.HttpClient(core_5.AbortError, {
            timeout: this._timeout,
            clientConfigOverrides: this._config.unstable_httpClientOptions,
            httpAgent: (_c = this._config.httpClientOptions) === null || _c === void 0 ? void 0 : _c.httpAgent,
            httpsAgent: (_d = this._config.httpClientOptions) === null || _d === void 0 ? void 0 : _d.httpsAgent
        }), [
            withErrorHandlers,
            withUserAgent(this._userAgent),
            withAdditionalHeaders(this._config),
            withAuthenticationByDefault,
            withSquareVersion(this._config),
        ], this._retryConfig);
        this.applePayApi = new applePayApi_1.ApplePayApi(this);
        this.bankAccountsApi = new bankAccountsApi_1.BankAccountsApi(this);
        this.bookingCustomAttributesApi = new bookingCustomAttributesApi_1.BookingCustomAttributesApi(this);
        this.bookingsApi = new bookingsApi_1.BookingsApi(this);
        this.cardsApi = new cardsApi_1.CardsApi(this);
        this.cashDrawersApi = new cashDrawersApi_1.CashDrawersApi(this);
        this.catalogApi = new catalogApi_1.CatalogApi(this);
        this.checkoutApi = new checkoutApi_1.CheckoutApi(this);
        this.customerCustomAttributesApi = new customerCustomAttributesApi_1.CustomerCustomAttributesApi(this);
        this.customerGroupsApi = new customerGroupsApi_1.CustomerGroupsApi(this);
        this.customersApi = new customersApi_1.CustomersApi(this);
        this.customerSegmentsApi = new customerSegmentsApi_1.CustomerSegmentsApi(this);
        this.devicesApi = new devicesApi_1.DevicesApi(this);
        this.disputesApi = new disputesApi_1.DisputesApi(this);
        this.employeesApi = new employeesApi_1.EmployeesApi(this);
        this.eventsApi = new eventsApi_1.EventsApi(this);
        this.giftCardActivitiesApi = new giftCardActivitiesApi_1.GiftCardActivitiesApi(this);
        this.giftCardsApi = new giftCardsApi_1.GiftCardsApi(this);
        this.inventoryApi = new inventoryApi_1.InventoryApi(this);
        this.invoicesApi = new invoicesApi_1.InvoicesApi(this);
        this.laborApi = new laborApi_1.LaborApi(this);
        this.locationCustomAttributesApi = new locationCustomAttributesApi_1.LocationCustomAttributesApi(this);
        this.locationsApi = new locationsApi_1.LocationsApi(this);
        this.loyaltyApi = new loyaltyApi_1.LoyaltyApi(this);
        this.merchantCustomAttributesApi = new merchantCustomAttributesApi_1.MerchantCustomAttributesApi(this);
        this.merchantsApi = new merchantsApi_1.MerchantsApi(this);
        this.mobileAuthorizationApi = new mobileAuthorizationApi_1.MobileAuthorizationApi(this);
        this.oAuthApi = new oAuthApi_1.OAuthApi(this);
        this.orderCustomAttributesApi = new orderCustomAttributesApi_1.OrderCustomAttributesApi(this);
        this.ordersApi = new ordersApi_1.OrdersApi(this);
        this.paymentsApi = new paymentsApi_1.PaymentsApi(this);
        this.payoutsApi = new payoutsApi_1.PayoutsApi(this);
        this.refundsApi = new refundsApi_1.RefundsApi(this);
        this.sitesApi = new sitesApi_1.SitesApi(this);
        this.snippetsApi = new snippetsApi_1.SnippetsApi(this);
        this.subscriptionsApi = new subscriptionsApi_1.SubscriptionsApi(this);
        this.teamApi = new teamApi_1.TeamApi(this);
        this.terminalApi = new terminalApi_1.TerminalApi(this);
        this.transactionsApi = new transactionsApi_1.TransactionsApi(this);
        this.v1TransactionsApi = new v1TransactionsApi_1.V1TransactionsApi(this);
        this.vendorsApi = new vendorsApi_1.VendorsApi(this);
        this.webhookSubscriptionsApi = new webhookSubscriptionsApi_1.WebhookSubscriptionsApi(this);
    }
    Client.prototype.getRequestBuilderFactory = function () {
        return this._requestBuilderFactory;
    };
    /**
     * Clone this client and override given configuration options
     */
    Client.prototype.withConfiguration = function (config) {
        return new Client(tslib_1.__assign(tslib_1.__assign({}, this._config), config));
    };
    return Client;
}());
exports.Client = Client;
function createHttpClientAdapter(client) {
    var _this = this;
    return function (request, requestOptions) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.executeRequest(request, requestOptions)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
}
function getBaseUri(server, config) {
    if (server === void 0) { server = 'default'; }
    if (config.environment === configuration_1.Environment.Production) {
        if (server === 'default') {
            return 'https://connect.squareup.com';
        }
    }
    if (config.environment === configuration_1.Environment.Sandbox) {
        if (server === 'default') {
            return 'https://connect.squareupsandbox.com';
        }
    }
    if (config.environment === configuration_1.Environment.Custom) {
        if (server === 'default') {
            return (0, core_2.pathTemplate)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["", ""], ["", ""])), new core_2.SkipEncode(config.customUrl));
        }
    }
    throw new Error('Could not get Base URL. Invalid environment or server.');
}
function createRequestHandlerFactory(baseUrlProvider, authProvider, httpClient, addons, retryConfig) {
    var requestBuilderFactory = (0, core_5.createRequestBuilderFactory)(createHttpClientAdapter(httpClient), baseUrlProvider, apiError_1.ApiError, authProvider, retryConfig);
    return tap.apply(void 0, tslib_1.__spreadArray([requestBuilderFactory], addons, false));
}
function tap(requestBuilderFactory) {
    var callback = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        callback[_i - 1] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var requestBuilder = requestBuilderFactory.apply(void 0, args);
        callback.forEach(function (c) { return c(requestBuilder); });
        return requestBuilder;
    };
}
function withErrorHandlers(rb) {
    rb.defaultToError(apiError_1.ApiError);
}
function withAdditionalHeaders(_a) {
    var additionalHeaders = _a.additionalHeaders;
    var clone = tslib_1.__assign({}, additionalHeaders);
    (0, core_1.assertHeaders)(clone);
    return function (rb) {
        rb.interceptRequest(function (request) {
            var _a;
            var headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
            (0, core_1.mergeHeaders)(headers, clone);
            return tslib_1.__assign(tslib_1.__assign({}, request), { headers: headers });
        });
    };
}
function withUserAgent(userAgent) {
    return function (rb) {
        rb.interceptRequest(function (request) {
            var _a;
            var headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
            (0, core_3.setHeader)(headers, 'user-agent', userAgent);
            return tslib_1.__assign(tslib_1.__assign({}, request), { headers: headers });
        });
    };
}
function withSquareVersion(_a) {
    var squareVersion = _a.squareVersion;
    return function (rb) {
        rb.interceptRequest(function (request) {
            var _a;
            var headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
            (0, core_3.setHeader)(headers, 'Square-Version', squareVersion);
            return tslib_1.__assign(tslib_1.__assign({}, request), { headers: headers });
        });
    };
}
function withAuthenticationByDefault(rb) {
    rb.authenticate([]);
}
var templateObject_1;
//# sourceMappingURL=client.js.map