import { Schema } from '../schema';
import { Error } from './error';
import { Snippet } from './snippet';
export interface SnippetResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. */
    snippet?: Snippet;
}
export declare const snippetResponseSchema: Schema<SnippetResponse>;
