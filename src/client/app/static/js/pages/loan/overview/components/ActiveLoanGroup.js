import { ComponentGroup } from '../../../../components/ComponentGroup.js';
import { CardActiveLoan } from './CardActiveLoan.js';

/**
 * Manages a group of active loans data components.
 */
export default class ActiveLoanGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.active-loans');
  }

  get _CardComponentClass() {
    return CardActiveLoan;
  }

  get _category() {
    return 'loans';
  }

  get _typeMappingConfig() {
    return [
      {
        name: 'payables',
        CardClass: CardActiveLoan,
        endpoint: 'loan/overview/payable',
      },
      {
        name: 'receivables',
        CardClass: CardActiveLoan,
        endpoint: 'loan/overview/receivable',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} loans...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
