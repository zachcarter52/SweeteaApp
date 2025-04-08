import { boolean, lazy, nullable, object, optional } from '../schema';
import { customerAddressFilterSchema, } from './customerAddressFilter';
import { customerTextFilterSchema, } from './customerTextFilter';
import { filterValueSchema } from './filterValue';
import { floatNumberRangeSchema } from './floatNumberRange';
import { timeRangeSchema } from './timeRange';
export const customerCustomAttributeFilterValueSchema = object({
    email: ['email', optional(lazy(() => customerTextFilterSchema))],
    phone: ['phone', optional(lazy(() => customerTextFilterSchema))],
    text: ['text', optional(lazy(() => customerTextFilterSchema))],
    selection: ['selection', optional(lazy(() => filterValueSchema))],
    date: ['date', optional(lazy(() => timeRangeSchema))],
    number: ['number', optional(lazy(() => floatNumberRangeSchema))],
    mBoolean: ['boolean', optional(nullable(boolean()))],
    address: ['address', optional(lazy(() => customerAddressFilterSchema))],
});
//# sourceMappingURL=customerCustomAttributeFilterValue.js.map