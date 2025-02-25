let el = require('../elements/homeElements').HOME
const { get_text_index, get_text, click_index } = require('../actions');

export default {

  validateHome() {
    return get_text_index(el.optionMenu, 0)
  },

  ValidateOptionMenu(option) {
    switch (option) {
      case 'Admin':
        click_index(el.optionMenu, 0)
        return get_text(el.validateMessMenu)
      case 'PIM':
        click_index(el.optionMenu, 1)
        return get_text(el.validateMessMenu)
      case 'Leave':
        click_index(el.optionMenu, 2)
        return get_text(el.validateMessMenu)
      case 'Time':
        click_index(el.optionMenu, 3)
        return get_text_index(el.validateTextMenu, 2)
      case 'Recruitment':
        click_index(el.optionMenu, 4)
        return get_text(el.validateMessMenu)
      case 'MyInfo':
        click_index(el.optionMenu, 5)
        return get_text_index(el.validateTextMenu, 2)
      case 'Performance':
        click_index(el.optionMenu, 6)
        return get_text(el.validateMessMenu)
      case 'DashBoard':
        click_index(el.optionMenu, 7)
        return get_text_index(el.validateDashboard, 0)
      case 'Directory':
        click_index(el.optionMenu, 8)
        return get_text(el.validateTextMenu)
      case 'Maintenance':
        click_index(el.optionMenu, 9)
        return get_text(el.validateTextMenu)
      case 'Claim':
        click_index(el.optionMenu, 10)
        return get_text(el.validateMessMenu)
      case 'Buzz':
        click_index(el.optionMenu, 11)
        return get_text_index(el.validateBuzz, 0)
      default:
        'Please provide a valid option'
    }
  },

  validateUrlAdmin() {
    return cy.url()
  },
}