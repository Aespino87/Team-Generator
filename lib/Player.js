class Player {
    
    constructor(name, lvl, email, subclass) {
      this.name = name;
      this.lvl = lvl;
      this.email = email;
      this.subclass = subclass;
    }
  
    getName() {
      return this.name;
    }
  
    getLvl() {
      return this.lvl;
    }
  
    getEmail() {
      return this.email;
    }

    getSubclass() {
      return this.subclass;
    }
  
    getRole() {
      return "Player";
    }

    generateHTML() {
      return "";
    }
  
  }
  
  module.exports = Player;
  