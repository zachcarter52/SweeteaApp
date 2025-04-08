import { boolean, nullable, object, optional, string } from '../schema';
export const deviceComponentDetailsEthernetDetailsSchema = object({
    active: ['active', optional(nullable(boolean()))],
    ipAddressV4: ['ip_address_v4', optional(nullable(string()))],
});
//# sourceMappingURL=deviceComponentDetailsEthernetDetails.js.map