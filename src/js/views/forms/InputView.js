import { AbstractMethodError } from "../../errors/AbstractMethodError.js";
import {
  EmptyValueError,
  ZeroValueError,
} from "../../errors/InputValidationError.js";

export class InputView {
  #container; // DOM element
  #strictToNumber; // Boolean
  #formatter; // String
  #validators = [
    (ev) => {
      const value = ev.target.value;
      if (value === "") throw new EmptyValueError(this._id);
    },
    (ev) => {
      const value = ev.target.value;
      const regex = /R\$\s0,00|0,00\s%|^0+$/;
      if (regex.test(value)) throw new ZeroValueError(this._id);
    },
  ];
  #formatterMethods = {
    currency: () => {
      this._inputElement.addEventListener("input", (e) => {
        let value = e.target.value;
        value = (value / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        e.target.value = value;
      });
    },
    percent: () => {
      this._inputElement.addEventListener("input", (e) => {
        let value = e.target.value;
        value = (parseFloat(value) / 100).toFixed(2).replace(".", ",");
        e.target.value = `${value} %`;
        const cursorPosition = e.target.value.length - 2;
        e.target.setSelectionRange(cursorPosition, cursorPosition);
      });
    },
  };

  constructor(params) {
    this.#container = params.container;
    this._id = params.id;
    this._cssClass = params.cssClass ?? "";
    this._type = params.type ?? "text";
    this._inputmode = params.inputmode ?? "text";
    this.#strictToNumber = params.strictToNumber;
    this.#formatter = params.formatter;
    this._labelText = params.labelText ?? "";
    this._placeholder = params.placeholder ?? "";
  }

  get inputElement() {
    return this._inputElement;
  }

  _build() {
    throw new AbstractMethodError("_build");
  }

  #render() {
    this.#container.insertAdjacentHTML("beforeend", this._build());
  }

  #setGetterDomElement() {
    this._inputElement = document.getElementById(this._id);
  }

  #setStrictToNumber() {
    if (this.#strictToNumber) {
      this._inputElement.addEventListener("input", (ev) => {
        let value = ev.target.value.replace(/\D/g, "");
        ev.target.value = value;
      });
    }
  }

  #setFormatter() {
    this.#formatterMethods[this.#formatter]?.();
  }

  _failMessageHandler(method, errorMessage) {
    const span = document.querySelector(`#${this._id}-error`);
    span.innerHTML = errorMessage;
    this._inputElement.classList[method]("inp-error");
  }

  #setValidators() {
    this._inputElement.addEventListener("blur", (ev) => {
      try {
        this.#validators.forEach((validator) => validator(ev));
        this._failMessageHandler("remove", "");
      } catch (error) {
        this._failMessageHandler("add", error.message);
      }
    });
  }

  _addValidator(validator) {
    this.#validators.push(validator);
  }

  _updateValidators() {
    this.#setValidators();
  }

  _settersHandler(keysToRemove) {
    const setterMethods = {
      getterDomElement: this.#setGetterDomElement.bind(this),
      stringToNumber: this.#setStrictToNumber.bind(this),
      formatter: this.#setFormatter.bind(this),
      validators: this.#setValidators.bind(this),
    };
    if (keysToRemove) keysToRemove.forEach((key) => delete setterMethods[key]);
    for (const key in setterMethods) {
      setterMethods[key]();
    }
  }

  init() {
    this.#render();
    this._settersHandler();
  }
}
