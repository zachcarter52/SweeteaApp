import { ApiResponse, RequestOptions } from '../core';
import { ListCustomerSegmentsResponse } from '../models/listCustomerSegmentsResponse';
import { RetrieveCustomerSegmentResponse } from '../models/retrieveCustomerSegmentResponse';
import { BaseApi } from './baseApi';
export declare class CustomerSegmentsApi extends BaseApi {
    /**
     * Retrieves the list of customer segments of a business.
     *
     * @param cursor A pagination cursor returned by previous calls to `ListCustomerSegments`. This cursor is
     *                         used to retrieve the next set of query results.  For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  The maximum number of results to return in a single page. This limit is advisory. The
     *                         response might contain more or fewer results. If the specified limit is less than 1 or
     *                         greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The
     *                         default value is 50.  For more information, see [Pagination](https://developer.squareup.
     *                         com/docs/build-basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    listCustomerSegments(cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListCustomerSegmentsResponse>>;
    /**
     * Retrieves a specific customer segment as identified by the `segment_id` value.
     *
     * @param segmentId  The Square-issued ID of the customer segment.
     * @return Response from the API call
     */
    retrieveCustomerSegment(segmentId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCustomerSegmentResponse>>;
}
