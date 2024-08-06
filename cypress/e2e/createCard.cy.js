describe('Trello API Tests', () => {
  const apiKey = Cypress.env('apiKey');
  const apiToken = Cypress.env('apiToken');
  let cardId;
  let boardId = Cypress.env('boardId');

  it('Cadastrar um card', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/cards?idList=${boardId}&name=MeuCard&key=${apiKey}&token=${apiToken}`,
    }).then(response => {
      expect(response.status).to.eq(200);
      cardId = response.body.id;
      Cypress.env('cardId', cardId);
    });
  });
