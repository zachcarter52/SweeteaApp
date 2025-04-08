import { Schema } from '../schema';
import { Error } from './error';
import { Snippet } from './snippet';
/** Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`. */
export interface UpsertSnippetResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages. */
    snippet?: Snippet;
}
export declare const upsertSnippetResponseSchema: Schema<UpsertSnippetResponse>;
