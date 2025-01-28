import { CardLoading } from './CardLoading.js';
import { CardError } from './CardError.js';
import { CardEmpty } from './CardEmpty.js';

/**
 * Manages and renders different card states (loading, empty or error).
 * This class provides templates and logic to display each state in a specified container.
 */
export class CardState {
  #containerElement;
  #category;
  /**
   * @type {"loading" | "empty" | "error"}
   */
  #state;
  /**
   * @type {string[]}
   */
  #emptyStateTexts = [];
  /**
   * @param {HTMLElement} container
   * @param {string} category
   */

  #cards = {
    loading: null,
    empty: null,
    error: null,
  };
  constructor(container, category) {
    this.#containerElement = container;
    this.#category = category;
    this.#init();
  }

  /**
   * @param {"loading" | "empty" | "error"} value
   */
  set state(value) {
    this.#state = value;
    this.#render();
  }

  /**

   * @param {string[]} texts
   */
  set emptyStateTexts(texts) {
    this.#emptyStateTexts = texts;
  }

  #setCards() {
    this.#cards.loading = new CardLoading(4);
    this.#cards.empty = new CardEmpty(this.#category, this.#emptyStateTexts);
    this.#cards.error = new CardError(this.#category);
  }

  get #templateByState() {
    const template = this.#cards[this.#state].template;
    if (this.#state === 'loading') {
      return template.repeat(4);
    }
    return template;
  }

  #render() {
    this.#containerElement.innerHTML = this.#templateByState;
  }

  #init() {
    this.#setCards();
  }
}
