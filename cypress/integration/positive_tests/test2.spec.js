describe('test 2 : edit card', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
  });

  it('edit card', function () {
    const cardselector = '#container > div.home > div.home-boards > div > div:nth-child(4) > div.cards-container > div:nth-child(2) > div'
    editCard(cardselector, 'new card title', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in iure fugiat modi debitis officia pariatur impedit veniam porro harum?')
  })

  function editCard(_selector, _title, _desc) {
    // .get('#container > div.home > div.home-boards > div > div:nth-child(4) > div.cards-container > div:nth-child(2) > div') // _selector
    const _modal = _selector + ' > div:nth-child(1) > div > div > div > div.cardmodal-cols > div.cardmodal-main-wrapper > div.cardmodal-main'
    
    cy
      .get(_selector + ' > div')
      .click()
      .get(_modal + ' > div:nth-child(1) > div > div.cardmodal-button-container > button')
      .click()
      .get(_modal + ' > div:nth-child(1) > form > input[type=text]')
      .clear()
      .type(_title)
      .get(_modal + ' > div:nth-child(1) > form > div > button:nth-child(1)')
      .click()
      .get(_modal + '> div.cardmodal-main-desc > div:nth-child(2) > div > button')
      .click()
      .get(_modal + ' > div.cardmodal-main-desc > form > textarea')
      .type(_desc)
      .get(_modal + ' > div.cardmodal-main-desc > form > div > button:nth-child(2)')
      .click()
      .get(_modal)
      .should('contain.text', _title)
      .get(_modal)
      .should('contain.text', _desc)
      // .get(_selector + ' > div:nth-child(1) > div')
      // .click('topLeft') // click outside modal
  }
})