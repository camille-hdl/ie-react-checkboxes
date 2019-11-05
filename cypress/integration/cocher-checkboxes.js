/* eslint-disable */

/**
 * Cocher des checkboxes, et observer
 * les changements sur la 1ere case
 */
describe('checkboxes', function () {
    it("Cliquer sur une checkbox devrait changer son état", function () {
        cy.visit("/");
        cy.get("[data-cy=checkbox-0]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-0]").click().should("be", "checked");
        cy.get("[data-cy=checkbox-0]").click().should("not.be", "checked");
    });

    it("Cocher toutes les checkbox devrait cocher la checkbox globale", function () {
        cy.visit("/");
        cy.get("[data-cy=check-all]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-0]").click();
        cy.get("[data-cy=checkbox-1]").click();
        cy.get("[data-cy=checkbox-2]").click();
        cy.get("[data-cy=checkbox-3]").click();
        cy.get("[data-cy=check-all]").should("be", "checked");
        cy.get("[data-cy=checkbox-2]").click();
        cy.get("[data-cy=check-all]").should("not.be", "checked");
    });

    it("Cocher/décocher la checkbox globale devrait tout cocher/décocher", function () {
        cy.visit("/");
        cy.get("[data-cy=check-all]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-0]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-1]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-2]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-3]").should("not.be", "checked");
        cy.get("[data-cy=check-all]").click();
        cy.get("[data-cy=checkbox-0]").should("be", "checked");
        cy.get("[data-cy=checkbox-1]").should("be", "checked");
        cy.get("[data-cy=checkbox-2]").should("be", "checked");
        cy.get("[data-cy=checkbox-3]").should("be", "checked");
        cy.get("[data-cy=check-all]").click();
        cy.get("[data-cy=check-all]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-0]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-1]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-2]").should("not.be", "checked");
        cy.get("[data-cy=checkbox-3]").should("not.be", "checked");

        cy.get("[data-cy=check-all]").click();
        cy.get("[data-cy=checkbox-2]").should("be", "checked");
        cy.get("[data-cy=checkbox-2]").click();
        cy.get("[data-cy=checkbox-2]").should("not.be", "checked");
        cy.get("[data-cy=check-all]").click();
        cy.get("[data-cy=checkbox-2]").should("be", "checked");
    });

});