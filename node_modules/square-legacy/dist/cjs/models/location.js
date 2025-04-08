"use strict";
exports.__esModule = true;
exports.locationSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var businessHours_1 = require("./businessHours");
var coordinates_1 = require("./coordinates");
var taxIds_1 = require("./taxIds");
exports.locationSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    timezone: ['timezone', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    capabilities: ['capabilities', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.string)())],
    country: ['country', (0, schema_1.optional)((0, schema_1.string)())],
    languageCode: ['language_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    currency: ['currency', (0, schema_1.optional)((0, schema_1.string)())],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    businessName: ['business_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    websiteUrl: ['website_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    businessHours: ['business_hours', (0, schema_1.optional)((0, schema_1.lazy)(function () { return businessHours_1.businessHoursSchema; }))],
    businessEmail: ['business_email', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    twitterUsername: ['twitter_username', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    instagramUsername: ['instagram_username', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    facebookUrl: ['facebook_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    coordinates: ['coordinates', (0, schema_1.optional)((0, schema_1.lazy)(function () { return coordinates_1.coordinatesSchema; }))],
    logoUrl: ['logo_url', (0, schema_1.optional)((0, schema_1.string)())],
    posBackgroundUrl: ['pos_background_url', (0, schema_1.optional)((0, schema_1.string)())],
    mcc: ['mcc', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    fullFormatLogoUrl: ['full_format_logo_url', (0, schema_1.optional)((0, schema_1.string)())],
    taxIds: ['tax_ids', (0, schema_1.optional)((0, schema_1.lazy)(function () { return taxIds_1.taxIdsSchema; }))]
});
//# sourceMappingURL=location.js.map