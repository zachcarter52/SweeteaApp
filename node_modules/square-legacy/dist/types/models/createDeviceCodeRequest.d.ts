import { Schema } from '../schema';
import { DeviceCode } from './deviceCode';
export interface CreateDeviceCodeRequest {
    /**
     * A unique string that identifies this CreateDeviceCode request. Keys can
     * be any valid string but must be unique for every CreateDeviceCode request.
     * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
     */
    idempotencyKey: string;
    deviceCode: DeviceCode;
}
export declare const createDeviceCodeRequestSchema: Schema<CreateDeviceCodeRequest>;
