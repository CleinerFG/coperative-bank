import { Input } from "./Input.js";
import { PathManager } from "../../utils/PathManager.js";

export class PasswordInput extends Input {
  _template() {
    return `
    <div class="form-group__inp-group">
      <label for="${this._id}" class="label form-group__label">${this._labelText}</label>
      <div class="inp__container container__${this._cssClass}">
        <input id="${this._id}" type="password" inputmode="${this._inputmode}" name="${this._id}" placeholder="${this._placeholder}" aria-label="${this._labelText}"
        class="inp form-group__inp inp-${this._cssClass}" data-visibility="off" data-valid="false">
        <button id="${this._id}-visibility" type="button" class="btn-unset">
          <img id="${this._id}-visibility-icon" class="icon inp__visibility-icon" alt="Closed eye">
        </button>
      </div>
      <span id="${this._id}-error" class="error-message"></span>
    </div>`;
  }


  _toggleInpType() {
    const currentType = this._inputElement.type;
    this._inputElement.type = currentType === "text" ? "password" : "text";
  }

  _switchVisibility() {
    const icon = document.querySelector("#${this._id}-visibility-icon");
    const currentState = this._inputElement.dataset.visibility;

    const alt = currentState === "on" ? "Closed eye" : "Opened eye";
    icon.setAttribute("alt", alt);

    const newState = currentState === "off" ? "on" : "off";
    this._updateIconPath(newState);
    this._inputElement.dataset.visibility = newState;
  }

  _setupListeners() {
    const btnSwitch = document.querySelector(`#${this._id}-visibility`);
    btnSwitch.addEventListener("click", () => {
      this._switchVisibility();
      this._toggleInpType();
    });
  }

  _updateIconPath(state) {
    PathManager.updateIcon("#visibility-icon", `icon-visibility-${state}.svg`);
  }

  init() {
    super.init();
    this._setupListeners();
    this._updateIconPath("off");
  }
}
