import { array, lazy, object, optional, string } from '../schema';
import { selectOptionSchema } from './selectOption';
export const selectOptionsSchema = object({
    title: ['title', string()],
    body: ['body', string()],
    options: ['options', array(lazy(() => selectOptionSchema))],
    selectedOption: ['selected_option', optional(lazy(() => selectOptionSchema))],
});
//# sourceMappingURL=selectOptions.js.map