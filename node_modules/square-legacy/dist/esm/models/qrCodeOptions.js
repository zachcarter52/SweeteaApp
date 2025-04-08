import { object, string } from '../schema';
export const qrCodeOptionsSchema = object({
    title: ['title', string()],
    body: ['body', string()],
    barcodeContents: ['barcode_contents', string()],
});
//# sourceMappingURL=qrCodeOptions.js.map