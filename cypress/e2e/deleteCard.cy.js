describe('Trello API Tests', () => {
  const apiKey = Cypress.env('apiKey');
  const apiToken = Cypress.env('apiToken');
  let cardId = Cypress.env('cardId');

  it('Excluir um card', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}`,
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
