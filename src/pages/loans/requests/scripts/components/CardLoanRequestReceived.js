import { CardComponent } from '../../../../../js/components/CardComponent.js';
import { LoanRequestModel } from '../models/LoanRequestModel.js';
import { capitalize } from '../../../../../js/utils/stringUtils.js';

/**
 * Represents a card component specifically for displaying Loan Request Received.
 * Implements abstract methods from `CardComponent` to provide templates and configurations
 * for rendering Loan Request Received details.
 *
 * @class
 * @extends CardComponent
 */
export class CardLoanRequestReceived extends CardComponent {
  get _ModelClass() {
    return LoanRequestModel;
  }

  get _cssId() {
    return `loan-request-${this._model.id}`;
  }

  get _cssClass() {
    return `loan-request`;
  }

  get _cardItemsTemplate() {
    return [
      { label: 'Debtor', value: this._model.debtor },
      { label: 'Date', value: this._model.date },
      { label: 'Value', value: this._model.value },
      { label: 'Description', value: this._model.description },
      { label: 'Installments', value: this._model.installments },
      {
        label: 'Installment Value',
        value: this._model.installmentValue,
      },
      { label: 'Interest Rate', value: this._model.rate },
    ];
  }

  get _cardHeaderTemplate() {
    return capitalize(this._model.status);
  }

  get _cardFooterTemplate() {
    return `
     <button id="btn-loan-request-approve-${this._model.id}" class="btn card-data__btn btn-success">
        Approve 
     </button>
     <button id="btn-loan-request-repprove-${this._model.id}" class="btn card-data__btn btn-fail">
        Repprove
     </button>
    `;
  }

  /**
   * Handles modal behavior.
   * In this case, it does not open a modal.
   *
   * @protected
   * @returns {boolean}
   * @override
   *
   * @note The modal for the cardLoanRequest is still to be built.
   */
  _modalHandler() {
    return false;
  }
}
