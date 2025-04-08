import { ApiResponse, RequestOptions } from '../core';
import { CancelTerminalActionResponse } from '../models/cancelTerminalActionResponse';
import { CancelTerminalCheckoutResponse } from '../models/cancelTerminalCheckoutResponse';
import { CancelTerminalRefundResponse } from '../models/cancelTerminalRefundResponse';
import { CreateTerminalActionRequest } from '../models/createTerminalActionRequest';
import { CreateTerminalActionResponse } from '../models/createTerminalActionResponse';
import { CreateTerminalCheckoutRequest } from '../models/createTerminalCheckoutRequest';
import { CreateTerminalCheckoutResponse } from '../models/createTerminalCheckoutResponse';
import { CreateTerminalRefundRequest } from '../models/createTerminalRefundRequest';
import { CreateTerminalRefundResponse } from '../models/createTerminalRefundResponse';
import { DismissTerminalActionResponse } from '../models/dismissTerminalActionResponse';
import { DismissTerminalCheckoutResponse } from '../models/dismissTerminalCheckoutResponse';
import { DismissTerminalRefundResponse } from '../models/dismissTerminalRefundResponse';
import { GetTerminalActionResponse } from '../models/getTerminalActionResponse';
import { GetTerminalCheckoutResponse } from '../models/getTerminalCheckoutResponse';
import { GetTerminalRefundResponse } from '../models/getTerminalRefundResponse';
import { SearchTerminalActionsRequest } from '../models/searchTerminalActionsRequest';
import { SearchTerminalActionsResponse } from '../models/searchTerminalActionsResponse';
import { SearchTerminalCheckoutsRequest } from '../models/searchTerminalCheckoutsRequest';
import { SearchTerminalCheckoutsResponse } from '../models/searchTerminalCheckoutsResponse';
import { SearchTerminalRefundsRequest } from '../models/searchTerminalRefundsRequest';
import { SearchTerminalRefundsResponse } from '../models/searchTerminalRefundsResponse';
import { BaseApi } from './baseApi';
export declare class TerminalApi extends BaseApi {
    /**
     * Creates a Terminal action request and sends it to the specified device.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    createTerminalAction(body: CreateTerminalActionRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTerminalActionResponse>>;
    /**
     * Retrieves a filtered list of Terminal action requests created by the account making the request.
     * Terminal action requests are available for 30 days.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    searchTerminalActions(body: SearchTerminalActionsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTerminalActionsResponse>>;
    /**
     * Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30
     * days.
     *
     * @param actionId  Unique ID for the desired `TerminalAction`.
     * @return Response from the API call
     */
    getTerminalAction(actionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetTerminalActionResponse>>;
    /**
     * Cancels a Terminal action request if the status of the request permits it.
     *
     * @param actionId  Unique ID for the desired `TerminalAction`.
     * @return Response from the API call
     */
    cancelTerminalAction(actionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelTerminalActionResponse>>;
    /**
     * Dismisses a Terminal action request if the status and type of the request permits it.
     *
     * See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-
     * features/custom-workflows/link-and-dismiss-actions) for more details.
     *
     * @param actionId  Unique ID for the `TerminalAction` associated with the action to be dismissed.
     * @return Response from the API call
     */
    dismissTerminalAction(actionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DismissTerminalActionResponse>>;
    /**
     * Creates a Terminal checkout request and sends it to the specified device to take a payment
     * for the requested amount.
     *
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    createTerminalCheckout(body: CreateTerminalCheckoutRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTerminalCheckoutResponse>>;
    /**
     * Returns a filtered list of Terminal checkout requests created by the application making the request.
     * Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned.
     * Terminal checkout requests are available for 30 days.
     *
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    searchTerminalCheckouts(body: SearchTerminalCheckoutsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTerminalCheckoutsResponse>>;
    /**
     * Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for
     * 30 days.
     *
     * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
     * @return Response from the API call
     */
    getTerminalCheckout(checkoutId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetTerminalCheckoutResponse>>;
    /**
     * Cancels a Terminal checkout request if the status of the request permits it.
     *
     * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
     * @return Response from the API call
     */
    cancelTerminalCheckout(checkoutId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelTerminalCheckoutResponse>>;
    /**
     * Dismisses a Terminal checkout request if the status and type of the request permits it.
     *
     * @param checkoutId  Unique ID for the `TerminalCheckout` associated with the checkout to be dismissed.
     * @return Response from the API call
     */
    dismissTerminalCheckout(checkoutId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DismissTerminalCheckoutResponse>>;
    /**
     * Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac
     * payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds
     * for Terminal payments should use the Refunds API. For more information, see [Refunds
     * API]($e/Refunds).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    createTerminalRefund(body: CreateTerminalRefundRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTerminalRefundResponse>>;
    /**
     * Retrieves a filtered list of Interac Terminal refund requests created by the seller making the
     * request. Terminal refund requests are available for 30 days.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    searchTerminalRefunds(body: SearchTerminalRefundsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTerminalRefundsResponse>>;
    /**
     * Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.
     *
     * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
     * @return Response from the API call
     */
    getTerminalRefund(terminalRefundId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetTerminalRefundResponse>>;
    /**
     * Cancels an Interac Terminal refund request by refund request ID if the status of the request permits
     * it.
     *
     * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
     * @return Response from the API call
     */
    cancelTerminalRefund(terminalRefundId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelTerminalRefundResponse>>;
    /**
     * Dismisses a Terminal refund request if the status and type of the request permits it.
     *
     * @param terminalRefundId   Unique ID for the `TerminalRefund` associated with the refund to be dismissed.
     * @return Response from the API call
     */
    dismissTerminalRefund(terminalRefundId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DismissTerminalRefundResponse>>;
}
