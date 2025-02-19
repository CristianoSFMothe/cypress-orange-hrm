import login from "../support/pages/loginPage";

describe('Access the Orange HRM Page to perform Login validations', () => {

  it('Success Login', () => {
    login.accessPage()
    login.fillLogin("Admin", "admin123")
    login.clickLogin()

  })
})
