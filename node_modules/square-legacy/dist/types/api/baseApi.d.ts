import { ClientInterface, SdkRequestBuilderFactory } from '../clientInterface';
/** Base class for all controllers */
export declare class BaseApi {
    /** Create a request builder */
    protected createRequest: SdkRequestBuilderFactory;
    constructor(client: ClientInterface);
}
