let el = require('../elements/loginElements').LOGIN
const { loadPage, click, set } = require('../actions.js');

export default {
  accessPage() {
    loadPage(el.url)
  },

  fillLogin(username, password) {
    if (username !== null) {
      set(el.username, username);
    }
    if (password !== null) {
      set(el.password, password);
    }
  },

  clickLogin() {
    click(el.btnLogin)
    cy.wait(1500)
  },
}