describe('Trello API Tests', () => {
  const apiKey = Cypress.env('apiKey');
  const apiToken = Cypress.env('apiToken');
  let boardId = Cypress.env('boardId');

  it('Excluir um board', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`,
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
