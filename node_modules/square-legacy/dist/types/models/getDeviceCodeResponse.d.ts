import { Schema } from '../schema';
import { DeviceCode } from './deviceCode';
import { Error } from './error';
export interface GetDeviceCodeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    deviceCode?: DeviceCode;
}
export declare const getDeviceCodeResponseSchema: Schema<GetDeviceCodeResponse>;
