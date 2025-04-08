import { Schema } from '../schema';
import { BreakType } from './breakType';
/** A request to update a `BreakType`. */
export interface UpdateBreakTypeRequest {
    /**
     * A defined break template that sets an expectation for possible `Break`
     * instances on a `Shift`.
     */
    breakType: BreakType;
}
export declare const updateBreakTypeRequestSchema: Schema<UpdateBreakTypeRequest>;
