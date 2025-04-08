import { Schema } from '../schema';
export interface RetrieveCashDrawerShiftRequest {
    /** The ID of the location to retrieve cash drawer shifts from. */
    locationId: string;
}
export declare const retrieveCashDrawerShiftRequestSchema: Schema<RetrieveCashDrawerShiftRequest>;
