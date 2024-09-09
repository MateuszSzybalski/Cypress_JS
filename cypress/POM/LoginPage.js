/// <reference types="Cypress" />

import { Common } from "./Common"
import { commands } from "commander"

export class LoginPage extends Common {

    //selectors

    loginUser = '#login_user'
    loginPass = '#login_pass'
    loginButton = '#login_button'

    logIntoPortal() {
        cy.fixture("data").then((loginCredentials) => {
            cy.get(this.loginUser).type(loginCredentials.username)
            cy.get(this.loginPass).type(loginCredentials.password)
        })
    }
}

export const loginPage = new LoginPage();