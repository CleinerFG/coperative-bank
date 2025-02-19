import { FormCtrl } from '../../../../global/js/components/FormCtrl.js';
import authService from '../../services/AuthService.js';

export class TransactionPasswordFormCtrl extends FormCtrl {
  get _viewParams() {
    return {
      id: 'confirm-pass-form',
      containerElement: document.querySelector('.modal-content'),
      cssClass: 'modal-form',
    };
  }

  get _formElementsParams() {
    return [
      {
        id: 'transactionPass',
        category: 'password',
        labelText: 'Transaction password',
        strictToNumber: true,
      },
    ];
  }

  get _submitButtonParams() {
    return {
      id: 'transaction-confirm',
      cssClass: 'modal-btn',
      labelText: 'Confirm',
    };
  }

  get _serviceMethod() {
    return authService.transaction;
  }
}
