import { Page } from '../../../../../global/js/core/Page.js';

export default class LoanRequestsPage extends Page {
  get _introductionTemplate() {
    return `
    <section class="section">
      <h1 class="section__h1">Take Out a Loan</h1>
      <p class="info-text">To obtain a loan, the creditor needs to access their own account and accept the loan request.
      </p>
    </section>

    `;
  }

  get _newRequestTemplate() {
    return `
    <section class="section new-request">
      <h2 class="section__h2">New Loan Request</h2>
      <p class="info-text">Provide the necessary information in the form and request a new loan.</p>
    </section>
    `;
  }

  get _requestsTemplate() {
    return `
    <section class="section loan-requests">
      <h2 class="section__h2">Loan Requests</h2>
    </section>
    `;
  }

  get _template() {
    return `
    ${this._introductionTemplate}
    ${this._newRequestTemplate}
    ${this._requestsTemplate}
    `;
  }

  get _pageTitle() {
    return 'Loan Requests';
  }

  async _initComponents() {
    const LoanRequestManagerModule = await import(
      './components/LoanRequestManager.js'
    );
    new LoanRequestManagerModule.default();
  }

  async _setup() {
    const NewLoanRequestFormCtrlModule = await import(
      './controllers/NewLoanRequestFormCtrl.js'
    );
    new NewLoanRequestFormCtrlModule.default();
  }
}
