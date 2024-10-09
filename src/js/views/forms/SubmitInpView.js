import { InputView } from "./InputView.js";

export class SubmitInpView extends InputView {
  _build() {
    return `
      <button id="${this._id}" class="btn btn-action ${this._cssClass}" type="submit">${this._labelText}</button>`;
  }

  _setupHandlers() {
    super._setupHandlers(false);
  }
}
