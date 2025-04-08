import { Schema } from '../schema';
/** Represents a phone number. */
export interface V1PhoneNumber {
    /** The phone number's international calling code. For US phone numbers, this value is +1. */
    callingCode: string;
    /** The phone number. */
    number: string;
}
export declare const v1PhoneNumberSchema: Schema<V1PhoneNumber>;
