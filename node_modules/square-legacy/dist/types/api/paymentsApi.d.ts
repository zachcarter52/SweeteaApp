import { ApiResponse, RequestOptions } from '../core';
import { CancelPaymentByIdempotencyKeyRequest } from '../models/cancelPaymentByIdempotencyKeyRequest';
import { CancelPaymentByIdempotencyKeyResponse } from '../models/cancelPaymentByIdempotencyKeyResponse';
import { CancelPaymentResponse } from '../models/cancelPaymentResponse';
import { CompletePaymentRequest } from '../models/completePaymentRequest';
import { CompletePaymentResponse } from '../models/completePaymentResponse';
import { CreatePaymentRequest } from '../models/createPaymentRequest';
import { CreatePaymentResponse } from '../models/createPaymentResponse';
import { GetPaymentResponse } from '../models/getPaymentResponse';
import { ListPaymentsResponse } from '../models/listPaymentsResponse';
import { UpdatePaymentRequest } from '../models/updatePaymentRequest';
import { UpdatePaymentResponse } from '../models/updatePaymentResponse';
import { BaseApi } from './baseApi';
export declare class PaymentsApi extends BaseApi {
    /**
     * Retrieves a list of payments taken by the account making the request.
     *
     * Results are eventually consistent, and new payments or changes to payments might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     *
     * @param beginTime             Indicates the start of the time range to retrieve payments for, in RFC
     *                                         3339 format.   The range is determined using the `created_at` field for
     *                                         each Payment. Inclusive. Default: The current time minus one year.
     * @param endTime               Indicates the end of the time range to retrieve payments for, in RFC 3339
     *                                         format.  The  range is determined using the `created_at` field for each
     *                                         Payment.  Default: The current time.
     * @param sortOrder             The order in which results are listed by `ListPaymentsRequest.sort_field`:
     *                                         - `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
     * @param cursor                A pagination cursor returned by a previous call to this endpoint. Provide
     *                                         this cursor to retrieve the next set of results for the original query.
     *                                         For more information, see [Pagination](https://developer.squareup.
     *                                         com/docs/build-basics/common-api-patterns/pagination).
     * @param locationId            Limit results to the location supplied. By default, results are returned
     *                                         for the default (main) location associated with the seller.
     * @param total                 The exact amount in the `total_money` for a payment.
     * @param last4                 The last four digits of a payment card.
     * @param cardBrand             The brand of the payment card (for example, VISA).
     * @param limit                 The maximum number of results to be returned in a single page. It is
     *                                         possible to receive fewer results than the specified limit on a given page.
     *                                         The default value of 100 is also the maximum allowed value. If the
     *                                         provided value is  greater than 100, it is ignored and the default value
     *                                         is used instead.  Default: `100`
     * @param isOfflinePayment      Whether the payment was taken offline or not.
     * @param offlineBeginTime      Indicates the start of the time range for which to retrieve offline
     *                                         payments, in RFC 3339 format for timestamps. The range is determined using
     *                                         the `offline_payment_details.client_created_at` field for each Payment. If
     *                                         set, payments without a value set in `offline_payment_details.
     *                                         client_created_at` will not be returned.  Default: The current time.
     * @param offlineEndTime        Indicates the end of the time range for which to retrieve offline
     *                                         payments, in RFC 3339 format for timestamps. The range is determined using
     *                                         the `offline_payment_details.client_created_at` field for each Payment. If
     *                                         set, payments without a value set in `offline_payment_details.
     *                                         client_created_at` will not be returned.  Default: The current time.
     * @param updatedAtBeginTime    Indicates the start of the time range to retrieve payments for, in RFC
     *                                         3339 format.  The range is determined using the `updated_at` field for
     *                                         each Payment.
     * @param updatedAtEndTime      Indicates the end of the time range to retrieve payments for, in RFC 3339
     *                                         format.  The range is determined using the `updated_at` field for each
     *                                         Payment.
     * @param sortField             The field used to sort results by. The default is `CREATED_AT`.
     * @return Response from the API call
     */
    listPayments(beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, locationId?: string, total?: bigint, last4?: string, cardBrand?: string, limit?: number, isOfflinePayment?: boolean, offlineBeginTime?: string, offlineEndTime?: string, updatedAtBeginTime?: string, updatedAtEndTime?: string, sortField?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListPaymentsResponse>>;
    /**
     * Creates a payment using the provided source. You can use this endpoint
     * to charge a card (credit/debit card or
     * Square gift card) or record a payment that the seller received outside of Square
     * (cash payment from a buyer or a payment that an external entity
     * processed on behalf of the seller).
     *
     * The endpoint creates a
     * `Payment` object and returns it in the response.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    createPayment(body: CreatePaymentRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreatePaymentResponse>>;
    /**
     * Cancels (voids) a payment identified by the idempotency key that is specified in the
     * request.
     *
     * Use this method when the status of a `CreatePayment` request is unknown (for example, after you send
     * a
     * `CreatePayment` request, a network error occurs and you do not get a response). In this case, you
     * can
     * direct Square to cancel the payment using this endpoint. In the request, you provide the same
     * idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
     * canceling the payment, you can submit your `CreatePayment` request again.
     *
     * Note that if no payment with the specified idempotency key is found, no action is taken and the
     * endpoint
     * returns successfully.
     *
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     */
    cancelPaymentByIdempotencyKey(body: CancelPaymentByIdempotencyKeyRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CancelPaymentByIdempotencyKeyResponse>>;
    /**
     * Retrieves details for a specific payment.
     *
     * @param paymentId  A unique ID for the desired payment.
     * @return Response from the API call
     */
    getPayment(paymentId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetPaymentResponse>>;
    /**
     * Updates a payment with the APPROVED status.
     * You can update the `amount_money` and `tip_money` using this endpoint.
     *
     * @param paymentId    The ID of the payment to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    updatePayment(paymentId: string, body: UpdatePaymentRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdatePaymentResponse>>;
    /**
     * Cancels (voids) a payment. You can use this endpoint to cancel a payment with
     * the APPROVED `status`.
     *
     * @param paymentId  The ID of the payment to cancel.
     * @return Response from the API call
     */
    cancelPayment(paymentId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CancelPaymentResponse>>;
    /**
     * Completes (captures) a payment.
     * By default, payments are set to complete immediately after they are created.
     *
     * You can use this endpoint to complete a payment with the APPROVED `status`.
     *
     * @param paymentId    The unique ID identifying the payment to be completed.
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    completePayment(paymentId: string, body: CompletePaymentRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CompletePaymentResponse>>;
}
