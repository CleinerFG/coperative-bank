import { ComponentCtrl } from "./ComponentCtrl.js";
import { EventView } from "../views/EventView.js";

export class EventCtrl extends ComponentCtrl {
  constructor(container) {
    super(container, EventView);
  }

  _noComponentsHandler() {
    const t1 = "There are no events...";
    const t2 = "When there is news, we'll let you know ; )";
    super._noComponentsHandler(t1, t2);
  }

  removeComponent(eventID) {
    super._removeComponent("event", eventID);
  }
}