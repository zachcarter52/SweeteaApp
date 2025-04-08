import { Schema } from '../schema';
/** Information about the destination against which the payout was made. */
export interface Destination {
    /** List of possible destinations against which a payout can be made. */
    type?: string;
    /** Square issued unique ID (also known as the instrument ID) associated with this destination. */
    id?: string;
}
export declare const destinationSchema: Schema<Destination>;
