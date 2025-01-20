/**
 * @typedef {Object} Route
 * @property {string} path
 * @property {() => Promise<any>} viewModule
 */
export class Router {
  #routes;
  /**
   * @param {Route[]} routes
   */
  constructor(routes) {
    this.#routes = routes;
  }

  /**
   * @param {string} url
   */
  navigateTo(url) {
    history.pushState(null, null, url);
    this.#handleRouting();
  }

  async #handleRouting() {
    let match = this.#routes.find((route) => route.path === location.pathname);

    if (!match) {
      match = this.#routes[0];
    }

    const module = await match.viewModule();
    const ViewClass = module.default;
    new ViewClass();
  }

  init() {
    window.addEventListener('popstate', this.#handleRouting.bind(this));

    document.addEventListener(
      'DOMContentLoaded',
      this.#handleRouting.bind(this)
    );
  }
}