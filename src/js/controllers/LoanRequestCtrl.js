import { ComponentCtrl} from "./ComponentCtrl.js";
import { LoanRequestView } from "../views/LoanRequestView.js";

export class LoanRequestCtrl extends ComponentCtrl {
  constructor(container) {
    super(container, LoanRequestView);
  }

  _noComponentsHandler() {
    const t1 = "There are no opened requests...";
    const t2 = "Get a new loan :)";
    super._noComponentsHandler(t1, t2);
  }

  removeComponent(requestId) {
    super._removeComponent("request", requestId);
  }
}