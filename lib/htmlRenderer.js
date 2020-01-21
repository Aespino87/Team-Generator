const path = require("path");
const fs = require("fs");
const Artificer = require("./Artificer")
const Barbarian = require("./Barbarian")
const Bard = require("./Bard")
const Cleric= require("./Cleric")
const Druid = require("./Druid")
const Fighter = require("./Fighter")
const Monk = require("./Monk")
const Paladin = require("./Paladin")
const Ranger = require("./Ranger")
const Rogue = require("./Rogue")
const Sorcerer = require("./Sorcerer")
const Warlock = require("./Warlock")
const Wizard = require("./Wizard")

const templatesDir = path.resolve(__dirname, "../templates");

const render = players => {
  const html = [];

  html.push(players
    .filter(player => player.getRole() === "Master")
    .map(master => renderMaster(master))
  );
  html.push(players
    .filter(player => player.getRole() === "Artificer")
    .map(Artificer => renderArtificer(Artificer))
  );

  html.push(players
    .filter(player => player.getRole() === "Barbarian")
    .map(Barbarian => renderBarbarian(Barbarian))
  );

  html.push(players
    .filter(player => player.getRole() === "Bard")
    .map(Bard => renderBard(Bard))
  );

  html.push(players
    .filter(player => player.getRole() === "Cleric")
    .map(Cleric => renderCleric(Cleric))
  );

  html.push(players
    .filter(player => player.getRole() === "Druid")
    .map(Druid => renderDruid(Druid))
  );

  html.push(players
    .filter(player => player.getRole() === "Fighter")
    .map(Fighter => renderFighter(Fighter))
  );

  html.push(players
    .filter(player => player.getRole() === "Monk")
    .map(Monk => renderMonk(Monk))
  );

  html.push(players
    .filter(player => player.getRole() === "Paladin")
    .map(Paladin => renderPaladin(Paladin))
  );

  html.push(players
    .filter(player => player.getRole() === "Ranger")
    .map(Ranger => renderRanger(Ranger))
  );

  html.push(players
    .filter(player => player.getRole() === "Rogue")
    .map(Rogue => renderRogue(Rogue))
  );

  html.push(players
    .filter(player => player.getRole() === "Sorcerer")
    .map(Sorcerer => renderSorcerer(Sorcerer))
  );

  html.push(players
    .filter(player => player.getRole() === "Warlock")
    .map(Warlock => renderWarlock(Warlock))
  );

  html.push(players
    .filter(player => player.getRole() === "Wizard")
    .map(Wizard => renderWizard(Wizard))
  );
  
  
  

  return renderMain(html.join(""));

};

const renderMaster = Master => {
  console.log(Master)
  let template = Master.generateHTML();
  template = replacePlaceholders(template, "name", Master.getName());

  return template;
};



const renderArtificer = Artificer => {
  console.log(Artificer)
  let template = Artificer.generateHTML();
  template = replacePlaceholders(template, "name", Artificer.getName());

  return template;
};

const renderBarbarian = Barbarian => {
  console.log(Barbarian)
  let template = Barbarian.generateHTML();
  template = replacePlaceholders(template, "name", Barbarian.getName());

  return template;
};

const renderBard = Bard => {
  console.log(Bard)
  let template = Bard.generateHTML();
  template = replacePlaceholders(template, "name", Bard.getName());

  return template;
};

const renderCleric = Cleric => {
  console.log(Cleric)
  let template = Cleric.generateHTML();
  template = replacePlaceholders(template, "name", Cleric.getName());

  return template;
};

const renderDruid = Druid => {
  console.log(Druid)
  let template = Druid.generateHTML();
  template = replacePlaceholders(template, "name", Druid.getName());

  return template;
};

const renderFighter = Fighter => {
  console.log(Fighter)
  let template = Fighter.generateHTML();
  template = replacePlaceholders(template, "name", Fighter.getName());

  return template;
};

const renderMonk = Monk => {
  console.log(Monk)
  let template = Monk.generateHTML();
  template = replacePlaceholders(template, "name", Monk.getName());

  return template;
};

const renderPaladin = Paladin => {
  console.log(Paladin)
  let template = Paladin.generateHTML();
  template = replacePlaceholders(template, "name", Paladin.getName());

  return template;
};

const renderRanger = Ranger => {
  console.log(Ranger)
  let template = Ranger.generateHTML();
  template = replacePlaceholders(template, "name", Ranger.getName());

  return template;
};

const renderRogue = Rogue => {
  console.log(Rogue)
  let template = Rogue.generateHTML();
  template = replacePlaceholders(template, "name", Rogue.getName());

  return template;
};

const renderSorcerer = Sorcerer => {
  console.log(Sorcerer)
  let template = Sorcerer.generateHTML();
  template = replacePlaceholders(template, "name", Sorcerer.getName());

  return template;
};

const renderWarlock = Warlock => {
  console.log(Warlock)
  let template = Warlock.generateHTML();
  template = replacePlaceholders(template, "name", Warlock.getName());

  return template;
};

const renderWizard = Wizard => {
  console.log(Wizard)
  let template = Wizard.generateHTML();
  template = replacePlaceholders(template, "name", Wizard.getName());

  return template;
};




const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
