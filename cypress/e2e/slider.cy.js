describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});


describe('Navigation Buttons Test', function () {
  it('Checks if navigation button works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });
});


describe('Images description Test', function () {
  it('Checks if description is correct', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});


describe('Responsive Gallery Test', function () {
  const viewports = [
    { device: 'Desktop', width: 1024, height: 768 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 },
  ];

  viewports.forEach(viewport => {
    it(`Checks gallery behavior on ${viewport.device}`, function () {
      cy.visit('http://localhost:3000');
      cy.viewport(viewport.width, viewport.height);
      cy.get('.swiper-slide-active').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible')
      cy.get('.swiper-slide-active').should('be.visible');
    });
  });
});