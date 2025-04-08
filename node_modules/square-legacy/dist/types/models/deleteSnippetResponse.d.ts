import { Schema } from '../schema';
import { Error } from './error';
/** Represents a `DeleteSnippet` response. */
export interface DeleteSnippetResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteSnippetResponseSchema: Schema<DeleteSnippetResponse>;
