// pages/homePage.js
const commonUtils = require('../utils/commonUtils');
class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
     await new commonUtils(this.page).navigateTo("https://web-playground.ultralesson.com/");
    }
  }
  
  module.exports = HomePage;
  