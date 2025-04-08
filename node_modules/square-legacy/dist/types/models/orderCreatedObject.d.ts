import { Schema } from '../schema';
import { OrderCreated } from './orderCreated';
export interface OrderCreatedObject {
    orderCreated?: OrderCreated;
}
export declare const orderCreatedObjectSchema: Schema<OrderCreatedObject>;
