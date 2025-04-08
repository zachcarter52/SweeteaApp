import JSONBig from '@apimatic/json-bigint';
/**
 * Thrown when the HTTP status code is not okay.
 *
 * The ApiError extends the ApiResponse interface, so all ApiResponse
 * properties are available.
 */
export class ApiError extends Error {
    constructor(context, message) {
        var _a;
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        const { request, response } = context;
        this.request = request;
        this.statusCode = response.statusCode;
        this.headers = response.headers;
        this.body = response.body;
        if (typeof response.body === 'string' && response.body !== '') {
            const JSON = JSONBig();
            try {
                this.result = JSON.parse(response.body);
                if (typeof this.result === 'object') {
                    const result = this.result;
                    if ('errors' in result) {
                        this.errors = result['errors'];
                    }
                    else {
                        this.errors = [
                            {
                                category: 'V1_ERROR',
                                code: (_a = result['type']) !== null && _a !== void 0 ? _a : 'Unknown',
                                detail: result['message'],
                                field: result['field'],
                            },
                        ];
                    }
                }
            }
            catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    if (console) {
                        console.warn(`Unexpected error: Could not parse HTTP response body as JSON. ${error}`);
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=apiError.js.map