import { Schema } from '../schema';
import { Component } from './component';
import { DeviceAttributes } from './deviceAttributes';
import { DeviceStatus } from './deviceStatus';
export interface Device {
    /**
     * A synthetic identifier for the device. The identifier includes a standardized prefix and
     * is otherwise an opaque id generated from key device fields.
     */
    id?: string;
    attributes: DeviceAttributes;
    /** A list of components applicable to the device. */
    components?: Component[] | null;
    status?: DeviceStatus;
}
export declare const deviceSchema: Schema<Device>;
