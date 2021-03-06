describe('test 4', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
  });
  it('adds and deletes boards', function () {
    addBoard('New Board'); // pass board name
  })
  it('add board', function () {
    addBoard('Another New Board');
  })
  it('delete board', function () {
    delBoard('Blocked');
  })
})

const addBoard = (_boardTitle) => {
  cy.get('#container > div.home > div.home-boards > div > div.addboard > div > button')
    .click()
    .get('input[placeholder="Enter Board Title"]')
    .type(_boardTitle)
    .get('#container > div.home > div.home-boards > div > div.addboard > form > div > button:nth-child(1)')
    .click()
}

const delBoard = (_boardTitle) => {
  cy.get('.board')
    .contains(_boardTitle)
    .parent()
    .siblings()
    .click()
}