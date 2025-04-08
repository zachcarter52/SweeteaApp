import { Schema } from '../schema';
/**
 * Used *internally* to encapsulate pagination details. The resulting proto will be base62 encoded
 * in order to produce a cursor that can be used externally.
 */
export interface PaginationCursor {
    /**
     * The ID of the last resource in the current page. The page can be in an ascending or
     * descending order
     */
    orderValue?: string | null;
}
export declare const paginationCursorSchema: Schema<PaginationCursor>;
