import { PageCtrl } from '../../../../../js/controllers/PageCtrl.js';
import { OverviewPageView } from '../views/OverviewPageView.js';
import { ActiveLoanGroup } from '../components/ActiveLoanGroup.js';

/**
 * Page controller for Loans Overview.
 *
 * @class
 * @extends PageCtrl
 */
export class OverviewPageCtrl extends PageCtrl {
  get _ViewClass() {
    return OverviewPageView;
  }

  _initControllers() {
    new ActiveLoanGroup();
  }
}
