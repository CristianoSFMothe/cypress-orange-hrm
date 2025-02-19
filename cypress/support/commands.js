import login from "../support/pages/loginPage";
import home from "../support/pages/homePage";

Cypress.Commands.add("loginSuccess", () => {
  login.accessPage()
  login.validateLoginPage()
  login.fillLogin("Admin", "admin123")
  login.clickLogin()
  home.validateHome().then((text) => {
    expect(text).eq('Admin')
  })
})
