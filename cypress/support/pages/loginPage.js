let el = require('../elements/loginElements').LOGIN
const { loadPage, click, set, waitElement, get_text_index, get_text } = require('../actions.js');

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

  validateLoginPage() {
    return waitElement(el.validateLogin)
  },

  validateErrorMess() {
    return get_text_index(el.validateErrorMess, 0)
  },

  validateErrorMess2() {
    return get_text_index(el.validateErrorMess, 1)
  },

  validateErrorAlert() {
    return get_text(el.alertError)
  }
}