"use strict";
exports.__esModule = true;
exports.DEFAULT_RETRY_CONFIG = exports.DEFAULT_CONFIGURATION = void 0;
var configuration_1 = require("./configuration");
/** Default values for the configuration parameters of the client. */
exports.DEFAULT_CONFIGURATION = {
    timeout: 60000,
    squareVersion: '2024-12-18',
    additionalHeaders: {},
    userAgentDetail: '',
    environment: configuration_1.Environment.Production,
    customUrl: 'https://connect.squareup.com'
};
/** Default values for retry configuration parameters. */
exports.DEFAULT_RETRY_CONFIG = {
    maxNumberOfRetries: 0,
    retryOnTimeout: true,
    retryInterval: 1,
    maximumRetryWaitTime: 0,
    backoffFactor: 2,
    httpStatusCodesToRetry: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
    httpMethodsToRetry: ['GET', 'PUT']
};
//# sourceMappingURL=defaultConfiguration.js.map