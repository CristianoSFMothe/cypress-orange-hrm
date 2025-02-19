function loadPage(url) {
  try {
    cy.visit(url)
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return waitElement_index;
}

function waitElement_index(el, index) {
  try {
    cy.get(el).eq(index, { timeout: 10000 })
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return waitElement_index;
}

function waitElement(el) {
  try {
    cy.get(el).and('be.visible');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return waitElement;
}

function click(el) {
  waitElement(el)
  try {
    cy.get(el).click();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click;
}

function set(el, text) {
  waitElement(el)
  try {
    cy.get(el).type(text)
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return set;
}

function get_text_index(el, index) {
  waitElement(el)
  let text
  try {
    text = cy.get(el).eq(index).invoke('text');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return text;
}

function get_text(el) {
  waitElement(el)
  let text
  try {
    text = cy.get(el).invoke('text');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return text;
}

function click_index(el, index) {
  waitElement_index(el, index)
  try {
    cy.get(el).eq(index).click();
    cy.log('Clicked on the Element ' + el + ' with Index ' + index)
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click_index;
}


module.exports = {
  loadPage, waitElement_index, click, waitElement, set, get_text_index, get_text,
  click_index
};