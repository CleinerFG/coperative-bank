import '../types/notificationType.js';
import { Notification } from '../components/common/Notification.js';
import NotificationService from '../services/NotificationService.js';
import { createState } from '../../../global/js/utils/hooks.js';

class NotificationManager {
  #service = NotificationService;
  #documentListener = this.#closeOnClickOutside.bind(this);

  /**
   * @type {[TransferNotification|LoanRequestNotification|LoanStatusNotification|PaymentNotification|InstallmentNotification]}
   */
  #data = [];
  #notificationsState = createState([]);

  /**
   * @type {[Notification]}
   */
  get #notifications() {
    const [getState] = this.#notificationsState;
    return getState();
  }

  set #notifications(value) {
    const [, setState] = this.#notificationsState;
    setState(value);
  }

  get #btnElement() {
    return document.getElementById('notifications-btn');
  }

  get #containerElement() {
    return document.querySelector('.app-container .notifications-container');
  }

  get #cardsContainerElement() {
    return this.#containerElement.querySelector('.notifications-cards');
  }

  /**
   * @param {"hidden" | ""} value
   */
  set #bodyOverflow(value) {
    document.body.style.overflow = value;
  }

  get #template() {
    return `
    <h2>Notifications</h2>
    <div class="notifications-cards"></div>
    `;
  }

  async #fetchData() {
    try {
      this.#data = await this.#service.fetch();
    } catch (e) {
      console.log(e);
    }
  }

  #createNotifications() {
    this.#notifications = this.#data.map((params, index) => {
      return new Notification(index, params);
    });
  }

  #render() {
    this.#containerElement.insertAdjacentHTML('beforeend', this.#template);
  }

  #renderNotifications() {
    this.#cardsContainerElement.innerHTML = '';
    this.#notifications.forEach((notif) => notif.render());
  }

  #addDocumentListener() {
    document.addEventListener('click', this.#documentListener);
  }

  #removeDocumentListener() {
    document.removeEventListener('click', this.#documentListener);
  }

  /**
   * @param {boolean} activate
   */
  #toggleActiveState(activate) {
    this.#btnElement.dataset.active = activate ? 'true' : 'false';
    this.#bodyOverflow = activate ? 'hidden' : '';
    this.#containerElement.classList.toggle('display-flex', activate);

    if (activate) {
      this.#renderNotifications();
      this.#addDocumentListener();
    } else {
      this.#removeDocumentListener();
      this.#cardsContainerElement.innerHTML = '';
    }
  }

  /**
   * @param {Event} e
   */
  #closeOnClickOutside(e) {
    if (
      !this.#btnElement.contains(e.target) &&
      !this.#containerElement.contains(e.target)
    ) {
      this.#toggleActiveState(false);
    }
  }

  #handleBtnClick() {
    this.#toggleActiveState(this.#btnElement.dataset.active === 'false');
  }

  /**
   * @param {Event} e
   */
  #handleNotificationRemove(e) {
    this.#notifications = this.#notifications.filter((notif) => {
      return notif.id !== e.detail.id;
    });
    console.log(`Notification with index: ${e.detail.id} was removed`);
  }

  #setListeners() {
    this.#btnElement.addEventListener('click', this.#handleBtnClick.bind(this));
    this.#cardsContainerElement.addEventListener(
      'notificationRemove',
      this.#handleNotificationRemove.bind(this)
    );
  }

  async init() {
    await this.#fetchData();
    this.#createNotifications();
    this.#render();
    this.#setListeners();
  }
}

export default new NotificationManager();
