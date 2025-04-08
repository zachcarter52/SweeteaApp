import { Schema } from '../schema';
/** Represents a set of points for a loyalty account that are scheduled to expire on a specific date. */
export interface LoyaltyAccountExpiringPointDeadline {
    /** The number of points scheduled to expire at the `expires_at` timestamp. */
    points: number;
    /** The timestamp of when the points are scheduled to expire, in RFC 3339 format. */
    expiresAt: string;
}
export declare const loyaltyAccountExpiringPointDeadlineSchema: Schema<LoyaltyAccountExpiringPointDeadline>;
