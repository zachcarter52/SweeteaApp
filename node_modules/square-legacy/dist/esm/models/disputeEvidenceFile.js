import { nullable, object, optional, string } from '../schema';
export const disputeEvidenceFileSchema = object({
    filename: ['filename', optional(nullable(string()))],
    filetype: ['filetype', optional(nullable(string()))],
});
//# sourceMappingURL=disputeEvidenceFile.js.map