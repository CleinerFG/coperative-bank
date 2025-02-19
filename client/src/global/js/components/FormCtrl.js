import '../types/formElementsType.js';
import { FormView } from './FormView.js';
import { AbstractGetterError } from '../errors/AbstractErrors.js';

export class FormCtrl {
  #view;
  #responsePromise;
  #resolvePromise;
  constructor() {
    this.#view = new FormView(
      this._viewParams,
      this._formElementsParams,
      this._submitButtonParams
    );
    this.#responsePromise = new Promise((resolve) => {
      this.#resolvePromise = resolve;
    });
    this.#init();
  }

  async getResponse() {
    return this.#responsePromise;
  }

  get _modelClass() {
    new AbstractGetterError('_modelClass');
  }

  /**
   * @type {FormViewParams}
   */
  get _viewParams() {
    new AbstractGetterError('_viewParams');
  }

  /**
   * @type {[FormElementDefault|FormElementPassword|FormElementSearch|FormElementSelect]}
   */
  get _formElementsParams() {
    new AbstractGetterError('_formElementsParams');
  }

  /**
   * @type {SubmitButtonFormElementParams}}
   */
  get _submitButtonParams() {
    new AbstractGetterError('_submitButtonParams');
  }

  /**
   * @type {(data:object)=>Promise}
   */
  get _serviceMethod() {
    throw new AbstractGetterError('_serviceMethod');
  }

  /**
   * Collects and returns the form data.
   * Uses the model class to format data for the API.
   *
   * @returns {object}
   */
  get _formData() {
    const data = {};
    this.#view.formElements.forEach((formEl) => {
      data[formEl.id] = formEl?.parseValue ?? formEl?.value;
    });
    return data;
  }

  _handleInputsDataIsValid() {
    let isValid = true;
    this.#view.formElements.forEach((formEl) => {
      if (!formEl.dataValid) {
        isValid = false;
        formEl.handleFailMessage('add', 'Invalid data');
      }
    });
    return isValid;
  }

  async #handleSubmit() {
    this.#view.formElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isValid = this._handleInputsDataIsValid();
      console.log(this._formData);
      try {
        if (isValid) {
          const res = await this._serviceMethod(this._formData);
          this.#resolvePromise(res);
        }
      } catch (e) {
        this.#resolvePromise(null);
        console.error(e);
      }
    });
  }

  #init() {
    this.#handleSubmit();
  }
}
