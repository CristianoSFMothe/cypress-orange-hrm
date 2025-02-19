import login from "../support/pages/loginPage";
import home from "../support/pages/homePage";
import pim from "./pages/pimPage";

import { faker } from '@faker-js/faker';

const randomIdEmployee = faker.number.int({ min: 1000, max: 9999 })

Cypress.Commands.add("loginSuccess", () => {
  login.accessPage()
  login.validateLoginPage()
  login.fillLogin("Admin", "admin123")
  login.clickLogin()
  home.validateHome().then((text) => {
    expect(text).eq('Admin')
  })
})


//  PIM EMPLOYEE
Cypress.Commands.add("registerEmployee", () => {
  pim.clickAdd()
  pim.fillInformationPIM("Test", "Automation", "Employee", randomIdEmployee)
  pim.clickSave()
  pim.validateMessSuccess().then((message) => {
    expect(message).eq("Successfully Saved")
  })
  cy.window().then((win) => win.close())
})

Cypress.Commands.add("deleteEmployee", () => {
  cy.wait(5000)
  home.ValidateOptionMenu("PIM")
  pim.searchEmployee(randomIdEmployee)
  pim.clickSearch()
  pim.validateGrid().then((message) => {
    expect(message).to.equal(randomIdEmployee)
  })
  pim.clickDelete()
  pim.validateMessSuccess().then((message) => {
    expect(message).eq("Successfully Deleted")
  })
})