import '../../types/formDataType.js';
import { FormCtrl } from '../../../../global/js/components/controllers/FormCtrl.js';
import { emailValidator } from '../../../../global/js/utils/validators.js';

export default class LoginFormCtrl extends FormCtrl {
  get _viewParams() {
    return {
      id: 'login-form',
      containerElement: document.querySelector('.form-container'),
    };
  }

  get _formElementsParams() {
    return [
      {
        id: 'email',
        category: 'default',
        labelText: 'E-mail',
        inputmode: 'email',
        type: 'email',
        customValidator: emailValidator,
      },
      {
        category: 'password',
        id: 'password',
        labelText: 'Password',
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'submit',
      labelText: 'Login',
    };
  }

  get _endpoint() {
    return '/auth/login';
  }

  /**
   * @type {FormDataLogin}
   */
  get _formData() {
    return super._formData;
  }
}
