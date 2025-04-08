import { Schema } from '../schema';
/**
 * Represents a reward that can be applied to an order if the necessary
 * reward tier criteria are met. Rewards are created through the Loyalty API.
 */
export interface OrderReward {
    /** The identifier of the reward. */
    id: string;
    /** The identifier of the reward tier corresponding to this reward. */
    rewardTierId: string;
}
export declare const orderRewardSchema: Schema<OrderReward>;
