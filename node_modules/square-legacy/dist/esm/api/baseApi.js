/** Base class for all controllers */
export class BaseApi {
    constructor(client) {
        this.createRequest = client.getRequestBuilderFactory();
    }
}
//# sourceMappingURL=baseApi.js.map