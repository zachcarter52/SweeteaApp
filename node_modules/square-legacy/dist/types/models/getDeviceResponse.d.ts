import { Schema } from '../schema';
import { Device } from './device';
import { Error } from './error';
export interface GetDeviceResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    device?: Device;
}
export declare const getDeviceResponseSchema: Schema<GetDeviceResponse>;
