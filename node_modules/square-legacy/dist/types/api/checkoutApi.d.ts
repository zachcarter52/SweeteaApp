import { ApiResponse, RequestOptions } from '../core';
import { CreateCheckoutRequest } from '../models/createCheckoutRequest';
import { CreateCheckoutResponse } from '../models/createCheckoutResponse';
import { CreatePaymentLinkRequest } from '../models/createPaymentLinkRequest';
import { CreatePaymentLinkResponse } from '../models/createPaymentLinkResponse';
import { DeletePaymentLinkResponse } from '../models/deletePaymentLinkResponse';
import { ListPaymentLinksResponse } from '../models/listPaymentLinksResponse';
import { RetrieveLocationSettingsResponse } from '../models/retrieveLocationSettingsResponse';
import { RetrieveMerchantSettingsResponse } from '../models/retrieveMerchantSettingsResponse';
import { RetrievePaymentLinkResponse } from '../models/retrievePaymentLinkResponse';
import { UpdateLocationSettingsRequest } from '../models/updateLocationSettingsRequest';
import { UpdateLocationSettingsResponse } from '../models/updateLocationSettingsResponse';
import { UpdateMerchantSettingsRequest } from '../models/updateMerchantSettingsRequest';
import { UpdateMerchantSettingsResponse } from '../models/updateMerchantSettingsResponse';
import { UpdatePaymentLinkRequest } from '../models/updatePaymentLinkRequest';
import { UpdatePaymentLinkResponse } from '../models/updatePaymentLinkResponse';
import { BaseApi } from './baseApi';
export declare class CheckoutApi extends BaseApi {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers are
     * directed to in order to provide their payment information using a
     * payment processing workflow hosted on connect.squareup.com.
     *
     *
     * NOTE: The Checkout API has been updated with new features.
     * For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-
     * api#checkout-api-highlights).
     *
     * @param locationId   The ID of the business location to associate the checkout
     *                                                     with.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    createCheckout(locationId: string, body: CreateCheckoutRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCheckoutResponse>>;
    /**
     * Retrieves the location-level settings for a Square-hosted checkout page.
     *
     * @param locationId  The ID of the location for which to retrieve settings.
     * @return Response from the API call
     */
    retrieveLocationSettings(locationId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveLocationSettingsResponse>>;
    /**
     * Updates the location-level settings for a Square-hosted checkout page.
     *
     * @param locationId   The ID of the location for which to retrieve settings.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    updateLocationSettings(locationId: string, body: UpdateLocationSettingsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateLocationSettingsResponse>>;
    /**
     * Retrieves the merchant-level settings for a Square-hosted checkout page.
     *
     * @return Response from the API call
     */
    retrieveMerchantSettings(requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveMerchantSettingsResponse>>;
    /**
     * Updates the merchant-level settings for a Square-hosted checkout page.
     *
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    updateMerchantSettings(body: UpdateMerchantSettingsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateMerchantSettingsResponse>>;
    /**
     * Lists all payment links.
     *
     * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     *                         retrieve the next set of results for the original query. If a cursor is not provided, the
     *                         endpoint returns the first page of the results. For more  information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  A limit on the number of results to return per page. The limit is advisory and the
     *                         implementation might return more or less results. If the supplied limit is negative, zero,
     *                         or greater than the maximum limit of 1000, it is ignored.  Default value: `100`
     * @return Response from the API call
     */
    listPaymentLinks(cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListPaymentLinksResponse>>;
    /**
     * Creates a Square-hosted checkout page. Applications can share the resulting payment link with their
     * buyer to pay for goods and services.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    createPaymentLink(body: CreatePaymentLinkRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreatePaymentLinkResponse>>;
    /**
     * Deletes a payment link.
     *
     * @param id The ID of the payment link to delete.
     * @return Response from the API call
     */
    deletePaymentLink(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeletePaymentLinkResponse>>;
    /**
     * Retrieves a payment link.
     *
     * @param id The ID of link to retrieve.
     * @return Response from the API call
     */
    retrievePaymentLink(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrievePaymentLinkResponse>>;
    /**
     * Updates a payment link. You can update the `payment_link` fields such as
     * `description`, `checkout_options`, and  `pre_populated_data`.
     * You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.
     *
     * @param id           The ID of the payment link to update.
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    updatePaymentLink(id: string, body: UpdatePaymentLinkRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdatePaymentLinkResponse>>;
}
