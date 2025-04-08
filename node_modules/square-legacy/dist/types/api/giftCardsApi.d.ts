import { ApiResponse, RequestOptions } from '../core';
import { CreateGiftCardRequest } from '../models/createGiftCardRequest';
import { CreateGiftCardResponse } from '../models/createGiftCardResponse';
import { LinkCustomerToGiftCardRequest } from '../models/linkCustomerToGiftCardRequest';
import { LinkCustomerToGiftCardResponse } from '../models/linkCustomerToGiftCardResponse';
import { ListGiftCardsResponse } from '../models/listGiftCardsResponse';
import { RetrieveGiftCardFromGANRequest } from '../models/retrieveGiftCardFromGANRequest';
import { RetrieveGiftCardFromGANResponse } from '../models/retrieveGiftCardFromGANResponse';
import { RetrieveGiftCardFromNonceRequest } from '../models/retrieveGiftCardFromNonceRequest';
import { RetrieveGiftCardFromNonceResponse } from '../models/retrieveGiftCardFromNonceResponse';
import { RetrieveGiftCardResponse } from '../models/retrieveGiftCardResponse';
import { UnlinkCustomerFromGiftCardRequest } from '../models/unlinkCustomerFromGiftCardRequest';
import { UnlinkCustomerFromGiftCardResponse } from '../models/unlinkCustomerFromGiftCardResponse';
import { BaseApi } from './baseApi';
export declare class GiftCardsApi extends BaseApi {
    /**
     * Lists all gift cards. You can specify optional filters to retrieve
     * a subset of the gift cards. Results are sorted by `created_at` in ascending order.
     *
     * @param type        If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the
     *                              specified type. Otherwise, the endpoint returns gift cards of all types.
     * @param state       If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards
     *                              in the specified state. Otherwise, the endpoint returns the gift cards of all states.
     * @param limit       If a limit is provided, the endpoint returns only the specified number of results
     *                              per page. The maximum value is 200. The default value is 30. For more information,
     *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. If a cursor is not
     *                              provided, the endpoint returns the first page of the results.  For more information,
     *                              see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     * @param customerId  If a customer ID is provided, the endpoint returns only the gift cards linked to the
     *                              specified customer.
     * @return Response from the API call
     */
    listGiftCards(type?: string, state?: string, limit?: number, cursor?: string, customerId?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListGiftCardsResponse>>;
    /**
     * Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift card
     * has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases, call
     * [CreateGiftCardActivity]($e/GiftCardActivities/CreateGiftCardActivity) and create an `ACTIVATE`
     * activity with the initial balance. Alternatively, you can use
     * [RefundPayment]($e/Refunds/RefundPayment)
     * to refund a payment to the new gift card.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    createGiftCard(body: CreateGiftCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateGiftCardResponse>>;
    /**
     * Retrieves a gift card using the gift card account number (GAN).
     *
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    retrieveGiftCardFromGAN(body: RetrieveGiftCardFromGANRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromGANResponse>>;
    /**
     * Retrieves a gift card using a secure payment token that represents the gift card.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    retrieveGiftCardFromNonce(body: RetrieveGiftCardFromNonceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromNonceResponse>>;
    /**
     * Links a customer to a gift card, which is also referred to as adding a card on file.
     *
     * @param giftCardId   The ID of the gift card to be linked.
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    linkCustomerToGiftCard(giftCardId: string, body: LinkCustomerToGiftCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<LinkCustomerToGiftCardResponse>>;
    /**
     * Unlinks a customer from a gift card, which is also referred to as removing a card on file.
     *
     * @param giftCardId   The ID of the gift card to be unlinked.
     * @param body         An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    unlinkCustomerFromGiftCard(giftCardId: string, body: UnlinkCustomerFromGiftCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UnlinkCustomerFromGiftCardResponse>>;
    /**
     * Retrieves a gift card using the gift card ID.
     *
     * @param id The ID of the gift card to retrieve.
     * @return Response from the API call
     */
    retrieveGiftCard(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardResponse>>;
}
