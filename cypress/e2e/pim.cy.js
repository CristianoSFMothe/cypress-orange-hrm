import home from "../support/pages/homePage";
import pim from "../support/pages/pimPage";

import { faker } from '@faker-js/faker';

const randomIdEmployee = faker.number.int({ min: 1000, max: 9999 })

describe('PIM', () => {

  context('Add an Employee', () => {
    beforeEach(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu('PIM')
    })

    it('Add Employee success', () => {
      pim.clickAdd()
      pim.fillInformationPIM('Test', 'Automation', 'Employee', randomIdEmployee)
      pim.clickSave()
      pim.validateMessSuccess().then((message) => {
        expect(message).eq('Successfully Saved')
      })
    })

  })
})