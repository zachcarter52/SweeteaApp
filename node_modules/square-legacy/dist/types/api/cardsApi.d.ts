import { ApiResponse, RequestOptions } from '../core';
import { CreateCardRequest } from '../models/createCardRequest';
import { CreateCardResponse } from '../models/createCardResponse';
import { DisableCardResponse } from '../models/disableCardResponse';
import { ListCardsResponse } from '../models/listCardsResponse';
import { RetrieveCardResponse } from '../models/retrieveCardResponse';
import { BaseApi } from './baseApi';
export declare class CardsApi extends BaseApi {
    /**
     * Retrieves a list of cards owned by the account making the request.
     * A max of 25 cards will be returned.
     *
     * @param cursor           A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for your original query.  See
     *                                    [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                                    patterns/pagination) for more information.
     * @param customerId       Limit results to cards associated with the customer supplied. By default, all
     *                                    cards owned by the merchant are returned.
     * @param includeDisabled  Includes disabled cards. By default, all enabled cards owned by the merchant
     *                                    are returned.
     * @param referenceId      Limit results to cards associated with the reference_id supplied.
     * @param sortOrder        Sorts the returned list by when the card was created with the specified order.
     *                                    This field defaults to ASC.
     * @return Response from the API call
     */
    listCards(cursor?: string, customerId?: string, includeDisabled?: boolean, referenceId?: string, sortOrder?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListCardsResponse>>;
    /**
     * Adds a card on file to an existing merchant.
     *
     * @param body         An object containing the fields to POST for the request.  See the
     *                                                 corresponding object definition for field details.
     * @return Response from the API call
     */
    createCard(body: CreateCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCardResponse>>;
    /**
     * Retrieves details for a specific Card.
     *
     * @param cardId  Unique ID for the desired Card.
     * @return Response from the API call
     */
    retrieveCard(cardId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveCardResponse>>;
    /**
     * Disables the card, preventing any further updates or charges.
     * Disabling an already disabled card is allowed but has no effect.
     *
     * @param cardId  Unique ID for the desired Card.
     * @return Response from the API call
     */
    disableCard(cardId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DisableCardResponse>>;
}
