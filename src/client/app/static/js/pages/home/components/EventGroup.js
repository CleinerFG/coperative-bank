import { ComponentGroup } from '../../../../js/components/ComponentGroup.js';
import { CardEvent } from './CardEvent.js';

/**
 * Manages a group of events data components.
 * This class configures specific card types, categories, and default messages.
 *
 * @class
 * @extends ComponentGroup
 */
export class EventGroup extends ComponentGroup {
  get _containerElement() {
    return document.querySelector('.section.events');
  }

  get _category() {
    return 'events';
  }

  get _typeMappingConfig() {
    return [
      { name: 'payment',
        CardClass: CardEvent,
        endpoint: 'events-payment' 
      },
      {
        name: 'investment',
        CardClass: CardEvent,
        endpoint: 'events-investment',
      },
    ];
  }

  get _emptyCardsTexts() {
    return [
      'There are no events...',
      "When there is news, we'll let you know ; )",
    ];
  }
}