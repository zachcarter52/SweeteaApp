"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHmacOverride = createHmacOverride;
function createHmacOverride(payload, key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const crypto = require('crypto');
            const hmac = crypto.createHmac('sha256', key);
            hmac.update(payload, 'utf8');
            return hmac.digest('base64');
        }
        catch (err) {
            // Not in Node environmnet; use subtle crypto.
        }
        const subtleCrypto = getSubtleCrypto();
        if (!subtleCrypto) {
            throw new Error('No crypto implementation available');
        }
        const encoder = new TextEncoder();
        const cryptoKey = yield subtleCrypto.importKey('raw', encoder.encode(key), {
            name: 'HMAC',
            hash: { name: 'SHA-256' }
        }, false, ['sign']);
        const signatureBuffer = yield subtleCrypto.sign('HMAC', cryptoKey, encoder.encode(payload));
        return arrayBufferToBase64(signatureBuffer);
    });
}
function getSubtleCrypto() {
    var _a;
    if (typeof window !== 'undefined' && ((_a = window === null || window === void 0 ? void 0 : window.crypto) === null || _a === void 0 ? void 0 : _a.subtle)) {
        return window.crypto.subtle;
    }
    return undefined;
}
function arrayBufferToBase64(buffer) {
    if (typeof btoa === 'function') {
        // Browser environment
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }
    else {
        // Node environment
        return Buffer.from(buffer).toString('base64');
    }
}
