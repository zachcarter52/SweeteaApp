import { Schema } from '../schema';
export interface RevokeTokenRequest {
    /**
     * The Square-issued ID for your application, which is available on the **OAuth** page in the
     * [Developer Dashboard](https://developer.squareup.com/apps).
     */
    clientId?: string | null;
    /**
     * The access token of the merchant whose token you want to revoke.
     * Do not provide a value for `merchant_id` if you provide this parameter.
     */
    accessToken?: string | null;
    /**
     * The ID of the merchant whose token you want to revoke.
     * Do not provide a value for `access_token` if you provide this parameter.
     */
    merchantId?: string | null;
    /**
     * If `true`, terminate the given single access token, but do not
     * terminate the entire authorization.
     * Default: `false`
     */
    revokeOnlyAccessToken?: boolean | null;
}
export declare const revokeTokenRequestSchema: Schema<RevokeTokenRequest>;
