describe('Trello API Tests', () => {
  const apiKey = Cypress.env('apiKey');
  const apiToken = Cypress.env('apiToken');
  let boardId;

  it('Cadastrar um board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/?name=MeuBoard&key=${apiKey}&token=${apiToken}`,
    }).then(response => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
      Cypress.env('boardId', boardId);
    });
  });
