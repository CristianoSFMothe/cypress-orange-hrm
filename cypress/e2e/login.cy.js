import login from "../support/pages/loginPage";
import home from "../support/pages/homePage";

describe('Access the Orange HRM Page to perform Login validations', () => {

  it('Success Login', () => {
    login.accessPage()
    login.fillLogin("Admin", "admin123")
    login.clickLogin()
    home.validateHome().then((text) => {
      expect(text).eq('Admin')
    })
  })
})
