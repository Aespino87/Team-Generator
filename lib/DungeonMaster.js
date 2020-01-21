const Player = require("./Player");

class DungeonMaster extends Player {

  constructor(name, lvl, email) {
    super(name, lvl, email);
  }
  getRole() {
    return "DungeonMaster";
  }

  generateHTML(){
    return `<div class="card col-12 col-md-3 Player-card">
    <div class="card-header">
        <h2 class="card-title">${this.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        </ul>
    </div>
</div>`
  }
}
module.exports = DungeonMaster;
