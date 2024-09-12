/// <reference types="cypress" />

import { Common } from "../pom/Common"

export class ReportsAndSettingPage extends Common {

  //selectors
  detailLink = '.detailLink'

}

export const reportsAndSettingPage = new ReportsAndSettingPage();