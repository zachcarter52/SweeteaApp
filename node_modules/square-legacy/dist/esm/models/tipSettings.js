import { array, boolean, nullable, number, object, optional, } from '../schema';
export const tipSettingsSchema = object({
    allowTipping: ['allow_tipping', optional(nullable(boolean()))],
    separateTipScreen: ['separate_tip_screen', optional(nullable(boolean()))],
    customTipField: ['custom_tip_field', optional(nullable(boolean()))],
    tipPercentages: ['tip_percentages', optional(nullable(array(number())))],
    smartTipping: ['smart_tipping', optional(nullable(boolean()))],
});
//# sourceMappingURL=tipSettings.js.map