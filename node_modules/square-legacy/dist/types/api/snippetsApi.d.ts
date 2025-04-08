import { ApiResponse, RequestOptions } from '../core';
import { DeleteSnippetResponse } from '../models/deleteSnippetResponse';
import { RetrieveSnippetResponse } from '../models/retrieveSnippetResponse';
import { UpsertSnippetRequest } from '../models/upsertSnippetRequest';
import { UpsertSnippetResponse } from '../models/upsertSnippetResponse';
import { BaseApi } from './baseApi';
export declare class SnippetsApi extends BaseApi {
    /**
     * Removes your snippet from a Square Online site.
     *
     * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @param siteId  The ID of the site that contains the snippet.
     * @return Response from the API call
     */
    deleteSnippet(siteId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteSnippetResponse>>;
    /**
     * Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet
     * applications, but you can retrieve only the snippet that was added by your application.
     *
     * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @param siteId  The ID of the site that contains the snippet.
     * @return Response from the API call
     */
    retrieveSnippet(siteId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveSnippetResponse>>;
    /**
     * Adds a snippet to a Square Online site or updates the existing snippet on the site.
     * The snippet code is appended to the end of the `head` element on every page of the site, except
     * checkout pages. A snippet application can add one snippet to a given site.
     *
     * You can call [ListSites]($e/Sites/ListSites) to get the IDs of the sites that belong to a seller.
     *
     *
     * __Note:__ Square Online APIs are publicly available as part of an early access program. For more
     * information, see [Early access program for Square Online APIs](https://developer.squareup.
     * com/docs/online-api#early-access-program-for-square-online-apis).
     *
     * @param siteId       The ID of the site where you want to add or update the snippet.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    upsertSnippet(siteId: string, body: UpsertSnippetRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpsertSnippetResponse>>;
}
