import { ComponentGroup } from '../../../../../js/components/ComponentGroup.js';
import { CardLoanRequestReceived } from './CardLoanRequestReceived.js';
import { CardLoanRequestOpened } from './CardLoanRequestOpened.js';

/**
 * Manages a group of loan requests data components.
 * This class configures specific card types, categories, and default messages.
 *
 * @class
 * @extends ComponentGroup
 */
export class LoanRequestGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.loan-requests');
  }

  get _category() {
    return 'requests';
  }

  get _typeMappingConfig() {
    return [
      {
        name: 'received',
        CardClass: CardLoanRequestReceived,
        endpoint: 'requests-received',
      },
      {
        name: 'opened',
        CardClass: CardLoanRequestOpened,
        endpoint: 'requests-opened',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      `There are no ${this._activeType} requests...`,
      "When there is news, we'll let you know ; )",
    ];
  }
}
