import {
  AbstractGetterError,
  AbstractMethodError,
} from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} CardItem
 * @property {string} label
 * @property {string} value
 */

/**
 * Base class for creating card components with customizable header, content, and footer sections.
 */
export class Card {
  #apiData;
  #containerElement;

  /**
   * @param {HTMLElement} containerElement
   * @param {object} apiData
   * @param {number} index
   */
  constructor(index, apiData, containerElement) {
    this._index = index;
    this.#apiData = apiData;
    this.#containerElement = containerElement;
  }

  /**
   * @type {Object}
   */
  get _apiData() {
    return this.#apiData;
  }

  get _containerElement() {
    return this.#containerElement;
  }

  /**
   * @type {string}
   */
  get _cssId() {
    return `${this._cssClass}-${this._index}`;
  }

  /**
   * @type {string}
   */
  get _cssClass() {
    throw new AbstractGetterError('_cssClass');
  }

  /**
   * @type {CardItem[]}
   */
  get _itemsArray() {
    throw new AbstractGetterError('_itemsArray');
  }

  /**
   * @type {string}
   */
  get _headerTemplate() {
    throw new AbstractGetterError('_headerTemplate');
  }

  /**
   * @type {string}
   */
  get _footerTemplate() {
    throw new AbstractGetterError('_footerTemplate');
  }

  /**
   * @type {string}
   */
  get _asideTemplate() {
    return '';
  }

  get _element() {
    return document.getElementById(this._cssId);
  }

  _handleModal() {
    throw new AbstractMethodError('_handleModal');
  }

  _initComponents() {}

  #buildHeaderTemplate() {
    return `
        <header class="card-data__header">
        ${this._headerTemplate}
        </header>
        `;
  }

  /**
   * @param {CardItem} cardItem
   */
  _buildItemTemplate(cardItem) {
    return `
      <div class="card-data__item">
        <span class="card-data__label">${cardItem.label}</span>
        <span class="card-data__value">${cardItem.value}</span>
      </div>
    `;
  }

  #buildMainContentTemplate() {
    const items = this._itemsArray
      .map((cardItem) => this._buildItemTemplate(cardItem))
      .join('');

    return `
    <main class="card-data__content">
    ${items}
    </main>
    `;
  }

  #buildFooterTemplate() {
    return `
    <footer class="card-data__footer">
      ${this._footerTemplate}
    </footer>
    `;
  }

  #buildAsideTemplate() {
    if (this._asideTemplate)
      return `
    <aside class="card-data__aside">
      ${this._asideTemplate}
    </aside>
    `;
    return '';
  }

  #buildCardTemplate() {
    return `
    <article id="${this._cssId}" class="card card-data ${this._cssClass}">
        ${this.#buildHeaderTemplate()}
        ${this.#buildMainContentTemplate()}
        ${this.#buildAsideTemplate()}
        ${this.#buildFooterTemplate()}
      </article>
  
    `;
  }

  #render() {
    this.#containerElement.insertAdjacentHTML(
      'afterbegin',
      this.#buildCardTemplate()
    );
  }

  selfRemove() {
    this._element.remove();
  }

  init() {
    this.#render();
    this._initComponents();
    this._handleModal();
  }
}
