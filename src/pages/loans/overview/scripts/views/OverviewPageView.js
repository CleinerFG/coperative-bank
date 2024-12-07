import { PageView } from '../../../../../js/views/PageView.js';

export class OverviewPageView extends PageView {
  /**
   * Returns the HTML string for the section displaying an overview of active loans.
   * Provides an introductory message describing active loans.
   *
   * @protected
   * @type {string}
   */
  get _templateSectionInitial() {
    return `
    <section class="section active-loans">
      <h1 class="section__h1">Loans Overview</h1>
      <p class="info-text">On this page, you will find all active loans and their total value report.</p>
    </section>
    `;
  }

  /**
   * Returns the HTML string for the section displaying the total loan report.
   * Contains placeholders for total amounts to pay and to receive.
   *
   * @protected
   * @type {string}
   * @note Total values - Must be implemented
   */
  get _templateSectionTotalReport() {
    return `
    <section class="section total-report">
      <h2 class="section__h2">Total Report</h2>
      <p class="info-text">Total to Pay: R$ 4.576,00</p>
      <p class="info-text">Total to Receive: R$ 15.454,68</p>
    </section>
    `;
  }

  _pageContent() {
    return `
    ${this._templateSectionInitial}
    ${this._templateSectionTotalReport}
    `;
  }
}
