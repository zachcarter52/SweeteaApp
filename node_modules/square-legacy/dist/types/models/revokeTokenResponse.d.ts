import { Schema } from '../schema';
import { Error } from './error';
export interface RevokeTokenResponse {
    /** If the request is successful, this is `true`. */
    success?: boolean;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const revokeTokenResponseSchema: Schema<RevokeTokenResponse>;
