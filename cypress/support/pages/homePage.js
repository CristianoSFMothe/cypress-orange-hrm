let el = require('../elements/homeElements').HOME
const { get_text_index } = require('../actions');

export default {

  validateHome() {
    return get_text_index(el.optionMenu, 0)
  },
}