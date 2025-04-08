import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyProgram } from './loyaltyProgram';
/** A response that contains all loyalty programs. */
export interface ListLoyaltyProgramsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** A list of `LoyaltyProgram` for the merchant. */
    programs?: LoyaltyProgram[];
}
export declare const listLoyaltyProgramsResponseSchema: Schema<ListLoyaltyProgramsResponse>;
