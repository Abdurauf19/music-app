import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';

export default {
  install(app) {
    app.component('vee-form', VeeForm);
    app.component('vee-field', VeeField);

    defineRule('required', required);
  },
};
