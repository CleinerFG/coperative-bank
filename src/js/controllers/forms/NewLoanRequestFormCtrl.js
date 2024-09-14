import { FormCtrl } from "../forms/FormCtrl.js";
import { NewLoanRequestFormView } from "../../views/forms/NewLoanRequestFormView.js";

export class NewLoanRequestFormCtrl extends FormCtrl {
  constructor() {
    const container = document.querySelector(".new-request");
    super(
      NewLoanRequestFormView,
      container,
      "new-request-form",
      "new-request",
      "/",
      "post"
    );
  }
}
