import { Schema } from '../schema';
import { DeviceCode } from './deviceCode';
import { Error } from './error';
export interface CreateDeviceCodeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    deviceCode?: DeviceCode;
}
export declare const createDeviceCodeResponseSchema: Schema<CreateDeviceCodeResponse>;
