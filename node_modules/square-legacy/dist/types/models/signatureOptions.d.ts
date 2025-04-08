import { Schema } from '../schema';
import { SignatureImage } from './signatureImage';
export interface SignatureOptions {
    /** The title text to display in the signature capture flow on the Terminal. */
    title: string;
    /** The body text to display in the signature capture flow on the Terminal. */
    body: string;
    /** An image representation of the collected signature. */
    signature?: SignatureImage[];
}
export declare const signatureOptionsSchema: Schema<SignatureOptions>;
