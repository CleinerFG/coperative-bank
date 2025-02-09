import { ASSETS_ROUTE } from '../constants/routes.js';
import { Card } from './Card.js';
import { CardState } from './cards/CardState.js';
import ApiService from '../../../global/js/services/ApiService.js';
import { capitalize } from '../../../global/js/utils/stringUtils.js';
import { handleIconDark } from '../../../global/js/utils/themeUtils.js';
import { simulateWait } from '../../../global/js/utils/tests.js';
import { AbstractGetterError } from '../../../global/js/errors/AbstractErrors.js';

/**
 * @typedef {Object} EntityCategoryConfig
 * @property {string} name
 * @property {Card} CardClass
 * @property {string} endpoint
 */

/**
 * Manages the functionality of a group of Card
 * with filters, state management and rendering options.
 */
export class CardManager {
  /**
   * @type {Card[]}
   */
  #cards;

  /**
   * @type {CardState}
   */
  #cardState;

  /**
   * @type {Object[]}
   */
  #apiData;

  #activeCategory;

  _ICON_FILTER_ID = `icon-filter-${this._entity}`;
  _FILTER_CATEGORY_1_ID = `${this._entityCategoriesMap[0].name}-${this._entity}-filter-1`;
  _FILTER_CATEGORY_2_ID = `${this._entityCategoriesMap[1].name}-${this._entity}-filter-2`;
  _ACTIVE_CATEGORY_ID = `active-category-${this._entity}`;

  /**
   * @param {boolean} useDateFilter
   */
  constructor() {
    this.#activeCategory = this._entityCategoriesMap[0];
    this.#init();
  }

  /**
   * @type {HTMLElement}
   */
  get _containerElement() {
    throw new AbstractGetterError('_containerElement');
  }

  /**
   * @type {string}
   */
  get _entity() {
    throw new AbstractGetterError('_entity');
  }

  /**
   * @type {EntityCategoryConfig[]}
   */
  get _entityCategoriesMap() {
    throw new AbstractGetterError('_entityCategoriesMap');
  }

  /**
   * @type {number}
   */
  get _cardSkelonRows() {
    // throw new AbstractGetterError('_cardSkelonRows');
  }

  /**
   * @type {boolean}
   */
  get _useDateFilter() {
    return true;
  }

  /**
   * @type {Card}
   */
  get #CardClass() {
    return this.#activeCategory.CardClass;
  }

  get #cardsContainerElement() {
    return this._containerElement.querySelector('.cards');
  }

  get #btnFilter1Element() {
    return this._containerElement.querySelector(
      `#${this._FILTER_CATEGORY_1_ID}`
    );
  }

  get #btnFilter2Element() {
    return this._containerElement.querySelector(
      `#${this._FILTER_CATEGORY_2_ID}`
    );
  }

  get #activeCategoryElement() {
    return this._containerElement.querySelector(`#${this._ACTIVE_CATEGORY_ID}`);
  }

  get #dateFilterTemplate() {
    if (this._useDateFilter) {
      const imgSrc = `${ASSETS_ROUTE}/icons/icon-filter.svg`;
      return `
    <div class="dashboard-filter">
      <div class="inputs-container">
        <div class="inp-group">
          <label for="start-date-filter-${this._entity}">Start date</label>
          <input id="start-date-filter-${this._entity}" class="inp inp-date" type="date">
        </div>
        <div class="inp-group">
          <label for="end-date-filter-${this._entity}">End date</label>
          <input id="end-date-filter-${this._entity}" class="inp inp-date" type="date">
        </div>
      </div>
      <button class="btn-unset btn-filter">
        <img id="${this._ICON_FILTER_ID}" class="icon filter-icon ${handleIconDark()}" src="${imgSrc}" alt="Filter Icon">
      </button>
    </div>
    `;
    }
    return '';
  }

  get #template() {
    const activeCatName = capitalize(this.#activeCategory.name);
    const catName1 = capitalize(this._entityCategoriesMap[0].name);
    const catName2 = capitalize(this._entityCategoriesMap[1].name);

    return `
    <div class="card-group">
      <div class="dashboard-container">
        <div class="entity-categories">
          <div id="${this._FILTER_CATEGORY_1_ID}" class="entity-category entity-category__active">${catName1}</div>
          <div id="${this._FILTER_CATEGORY_2_ID}" class="entity-category">${catName2}</div>
        </div>
        ${this.#dateFilterTemplate}
      </div>
      <h2 id="${this._ACTIVE_CATEGORY_ID}" class="card-group__h2">${activeCatName}</h2>
      <div class="cards">
      </div>
    </div>
`;
  }

  #render() {
    this._containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #initCardState() {
    this.#cardState = new CardState(
      this.#cardsContainerElement,
      this._entity,
      this._cardSkelonRows
    );
  }

  #initCards() {
    this.#cards = this.#apiData.map((data, index) => {
      return new this.#CardClass(index, data, this.#cardsContainerElement);
    });
  }

  async #fetchFromApi() {
    this.#cardState.state = 'loading';
    await simulateWait();
    this.#apiData = await ApiService.fetch(this.#activeCategory.endpoint);
  }

  async #renderCards() {
    try {
      await this.#fetchFromApi();
      if (this.#apiData.length) {
        this.#cardsContainerElement.innerHTML = '';
        this.#initCards();
      } else {
        this.#cardState.state = 'empty';
        console.log('empty');
      }
    } catch (err) {
      this.#cardState.state = 'error';
      console.log(err);
    }
  }

  #setListeners() {
    const updateActiveCategory = (category) => {
      this.#activeCategory = category;
      this.#activeCategoryElement.textContent = capitalize(category.name);
    };

    const toggle = () => {
      const buttonsMap = {
        0: this.#btnFilter1Element,
        1: this.#btnFilter2Element,
      };
      const index = this._entityCategoriesMap.findIndex(
        (category) => category.name === this.#activeCategory.name
      );
      const nextIndex = (index + 1) % 2;
      const activeBtn = buttonsMap[index];
      const nextActiveBtn = buttonsMap[nextIndex];

      activeBtn.classList.remove('entity-category__active');
      nextActiveBtn.classList.add('entity-category__active');
      updateActiveCategory(this._entityCategoriesMap[nextIndex]);
      this.#renderCards();
    };
    this.#btnFilter1Element.addEventListener('click', toggle);
    this.#btnFilter2Element.addEventListener('click', toggle);
  }

  #init() {
    this.#render();
    this.#setListeners();
    this.#initCardState();
    this.#renderCards();
  }
}
