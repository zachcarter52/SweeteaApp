import { array, nullable, object, optional, string } from '../schema';
export const filterValueSchema = object({
    all: ['all', optional(nullable(array(string())))],
    any: ['any', optional(nullable(array(string())))],
    none: ['none', optional(nullable(array(string())))],
});
//# sourceMappingURL=filterValue.js.map