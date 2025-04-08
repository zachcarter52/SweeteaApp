import { ApiResponse, RequestOptions } from '../core';
import { BulkCreateVendorsRequest } from '../models/bulkCreateVendorsRequest';
import { BulkCreateVendorsResponse } from '../models/bulkCreateVendorsResponse';
import { BulkRetrieveVendorsRequest } from '../models/bulkRetrieveVendorsRequest';
import { BulkRetrieveVendorsResponse } from '../models/bulkRetrieveVendorsResponse';
import { BulkUpdateVendorsRequest } from '../models/bulkUpdateVendorsRequest';
import { BulkUpdateVendorsResponse } from '../models/bulkUpdateVendorsResponse';
import { CreateVendorRequest } from '../models/createVendorRequest';
import { CreateVendorResponse } from '../models/createVendorResponse';
import { RetrieveVendorResponse } from '../models/retrieveVendorResponse';
import { SearchVendorsRequest } from '../models/searchVendorsRequest';
import { SearchVendorsResponse } from '../models/searchVendorsResponse';
import { UpdateVendorRequest } from '../models/updateVendorRequest';
import { UpdateVendorResponse } from '../models/updateVendorResponse';
import { BaseApi } from './baseApi';
export declare class VendorsApi extends BaseApi {
    /**
     * Creates one or more [Vendor]($m/Vendor) objects to represent suppliers to a seller.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    bulkCreateVendors(body: BulkCreateVendorsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkCreateVendorsResponse>>;
    /**
     * Retrieves one or more vendors of specified [Vendor]($m/Vendor) IDs.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    bulkRetrieveVendors(body: BulkRetrieveVendorsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkRetrieveVendorsResponse>>;
    /**
     * Updates one or more of existing [Vendor]($m/Vendor) objects as suppliers to a seller.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    bulkUpdateVendors(body: BulkUpdateVendorsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpdateVendorsResponse>>;
    /**
     * Creates a single [Vendor]($m/Vendor) object to represent a supplier to a seller.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    createVendor(body: CreateVendorRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateVendorResponse>>;
    /**
     * Searches for vendors using a filter against supported [Vendor]($m/Vendor) properties and a supported
     * sorter.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchVendors(body: SearchVendorsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchVendorsResponse>>;
    /**
     * Retrieves the vendor of a specified [Vendor]($m/Vendor) ID.
     *
     * @param vendorId  ID of the [Vendor](entity:Vendor) to retrieve.
     * @return Response from the API call
     */
    retrieveVendor(vendorId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveVendorResponse>>;
    /**
     * Updates an existing [Vendor]($m/Vendor) object as a supplier to a seller.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @param vendorId
     * @return Response from the API call
     */
    updateVendor(body: UpdateVendorRequest, vendorId: string, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateVendorResponse>>;
}
