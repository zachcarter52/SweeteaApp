import { Schema } from '../schema';
import { V1Order } from './v1Order';
export interface V1ListOrdersResponse {
    items?: V1Order[];
}
export declare const v1ListOrdersResponseSchema: Schema<V1ListOrdersResponse>;
