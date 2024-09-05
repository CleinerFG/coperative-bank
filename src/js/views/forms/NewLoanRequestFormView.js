import { FormView } from "./FormView.js";
import { InputView } from "./InputView.js";

export class NewLoanRequestFormView extends FormView {
  get _inputsData() {
    return [
      {
        labelText: "Search for a Creditor",
        id: "creditor",
        placeholder: "Enter creditor",
        ariaLabel: "Search Creditor",
      },
      {
        labelText: "Description",
        id: "loan-description",
        type: "text",
        placeholder: "Enter description",
        ariaLabel: "Loan Description",
      },
      {
        labelText: "Value",
        id: "loan-value",
        type: "text",
        placeholder: "R$ 0,00",
        ariaLabel: "Loan Value",
      },
      {
        labelText: "Installments",
        id: "loan-installments",
        type: "text",
        placeholder: "Enter installments",
        ariaLabel: "Quantity of Installments",
      },
      {
        labelText: "Interest Rate",
        id: "loan-rate",
        type: "text",
        placeholder: "Enter rate",
        ariaLabel: "Interest Rate",
      },
    ];
  }

  _buildInputs() {
    new InputView()
  }

  _buildSubmitButton() {
    return super._buildSubmitButton("Request");
  }
}