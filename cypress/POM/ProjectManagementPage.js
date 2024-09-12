/// <reference types="cypress" />

import { Common } from "../pom/Common";

export class ProjectManagementPage extends Common {

  //selectors
  filterFormButton = '[class^="sec"]'
  runReport = '[name="FilterForm_applyButton"]'

}

export const projectManagementPage = new ProjectManagementPage();