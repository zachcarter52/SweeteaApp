import { Schema } from '../schema';
export interface V1Device {
    /** The device's Square-issued ID. */
    id?: string;
    /** The device's merchant-specified name. */
    name?: string | null;
}
export declare const v1DeviceSchema: Schema<V1Device>;
