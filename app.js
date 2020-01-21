const DungeonMaster = require("./lib/DungeonMaster");
const Artificer = require("./lib/Artificer");
const Barbarian = require("./lib/Barbarian");
const Bard = require("./lib/Bard");
const Cleric = require("./lib/Cleric");
const Druid = require("./lib/Druid");
const Fighter = require("./lib/Fighter");
const Monk = require("./lib/Monk");
const Paladin = require("./lib/Paladin");
const Ranger = require("./lib/Ranger");
const Rogue = require("./lib/Rogue");
const Sorcerer = require("./lib/Sorcerer");
const Warlock = require("./lib/Warlock");
const Wizard = require("./lib/Wizard");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function appMenu() {

  function createMaster() {
    console.log("Please build your Party");
    inquirer.prompt([
      {
        type: "input",
        name: "masterName",
        message: "What is your Dungeon Master's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "masterEmail",
        message: "What is your Dungeon Master's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },

    ]).then(answers => {
      const master = new DungeonMaster(answers.masterName, answers.masterEmail);
      teamMembers.push(master);
      idArray.push(answers.managerId);
      createTeam();
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of party member would you like to add?",
        choices: [
          "Artificer",
          "Barbarian",
          "Bard",
          "Cleric",
          "Druid",
          "Fighter",
          "Monk",
          "Paladin",
          "Ranger",
          "Rogue",
          "Sorcerer",
          "Warlock",
          "Wizard",
          "I don't want to add any more party members"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.memberChoice) {
      case "Artificer": addArtificer();
        break;
      case "Barbarian": addBarbarian();
        break;
        case "Bard": addBard();
        break;
        case "Cleric": addCleric();
        break;
        case "Druid": addDruid();
        break; 
        case "Fighter": addFighter();
        break;
        case "Monk": addMonk();
        break;
        case "Paladin": addPaladin();
        break;
        case "Ranger": addRanger();
        break;
        case "Rogue": addRogue();
        break;
        case "Sorcerer": addSorcerer();
        break;
        case "Warlock": addWarlock();
        break;
        case "Wizard": addWizard();
        break;
      default:
        buildTeam();
      }
    });
  }
//Function to Artificer
  function addArtificer() {
    inquirer.prompt([
      {
        type: "input",
        name: "artificerName",
        message: "What is your Artificer's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "artificerLvl",
        message: "What is your Artficer's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "artificerSubclass",
        message: "What is your Artificer's specialty?",
        choices: ["alchemist", "artillerist", "battle smith"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Specialty.";
        }
      },
      {
        type: "input",
        name: "artificerEmail",
        message: "What is your Artificer's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const artificer = new Artificer(answers.artificerName, answers.artificerLvl, answers.artificerEmail, answers.artificerSubclass);
      teamMembers.push(artificer);
      idArray.push(answers.artificerLvl);
      createTeam();
    });
  }
// Function to add Barbarian
  function addBarbarian() {
    inquirer.prompt([
      {
        type: "input",
        name: "barbarianName",
        message: "What is your Barbarian's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "barbarianLvl",
        message: "What is your Barbarian's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "barbarianSubclass",
        message: "What is your Barbarian's Primal Path?",
        choices: ["path of the Ancestral Guardian", "path of Battlerager", "path of the Berserker", "path of the Storm Herald",
    "path of the Totem Warrior", "path of the Zealot"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Primal Path.";
        }
      },
      {
        type: "input",
        name: "barbarianEmail",
        message: "What is your Barbarian's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const barbarian = new Barbarian(answers.barbarianName, answers.barbarianLvl, answers.barbarianEmail, answers.barbarianSubclass);
      teamMembers.push(barbarian);
      idArray.push(answers.barbarianLvl);
      createTeam();
    });
  }
// Function to add Bard
  function addBard() {
    inquirer.prompt([
      {
        type: "input",
        name: "bardName",
        message: "What is your Bard's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "bardLvl",
        message: "What is your Bard's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "bardSubclass",
        message: "What is your Bard's College?",
        choices: ["college of glamour", "college of lore", "college of swords", "college of valor", "college of whispers"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a College.";
        }
      },
      {
        type: "input",
        name: "bardEmail",
        message: "What is your Bard's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const bard = new Bard(answers.bardName, answers.bardLvl, answers.bardEmail, answers.bardSubclass);
      teamMembers.push(bard);
      idArray.push(answers.bardLvl);
      createTeam();
    });
  }
// Function to add Cleric
  function addCleric() {
    inquirer.prompt([
      {
        type: "input",
        name: "clericName",
        message: "What is your Cleric's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "clericLvl",
        message: "What is your Cleric's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "clericDomain",
        message: "What is your Cleric's divine domain?",
        choices: ["arcana domain", "death domain", "forge domain", "grave domain", "knowledge domain", "life domain", "light domain",
    "nature domain", "order domain", "tempest domain", "trickery domain", "war domain"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Divine Domain.";
        }
      },
      {
        type: "input",
        name: "clericEmail",
        message: "What is your Cleric's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const cleric = new Cleric(answers.clericName, answers.clericLvl, answers.clericEmail, answers.clericSubclass);
      teamMembers.push(cleric);
      idArray.push(answers.clericLvl);
      createTeam();
    });
  }

  // Function to add Druid
  function addDruid() {
    inquirer.prompt([
      {
        type: "input",
        name: "druidName",
        message: "What is your Druid's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "druidLvl",
        message: "What is your Druid's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "druidSubclass",
        message: "What is your Druid's circle?",
        choices: ["circle of dreams", "circle of spores", "circle of the land", "circle of the moon", "circle of the sheperd"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Druidic Circles.";
        }
      },
      {
        type: "input",
        name: "druidEmail",
        message: "What is your Druids's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const druid = new Druid(answers.druidName, answers.druidLvl, answers.druidEmail, answers.druidSubclass);
      teamMembers.push(druid);
      idArray.push(answers.druidLvl);
      createTeam();
    });
  }

  // Function to add Fighter
  function addFighter() {
    inquirer.prompt([
      {
        type: "input",
        name: "fighterName",
        message: "What is your Fighter's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "fighterLvl",
        message: "What is your Fighter's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "fighterSubclass",
        message: "What is your Fighter's Martial Archtypes?",
        choices: ["arcane archer", "battle master", "cavalier", "champion", "eldritch knight", "purple dragon knight", "samurai"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Martial Archtype.";
        }
      },
      {
        type: "input",
        name: "fighterEmail",
        message: "What is your Fighter's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const fighter = new Fighter(answers.fighterName, answers.fighterLvl, answers.fighterEmail, answers.fighterSubclass);
      teamMembers.push(fighter);
      idArray.push(answers.fighterLvl);
      createTeam();
    });
  }

  // Add Monk

  function addMonk() {
    inquirer.prompt([
      {
        type: "input",
        name: "monkName",
        message: "What is your Monk's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "fighterLvl",
        message: "What is your Monk's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "monkSubclass",
        message: "What is your Fighter's Monastic Tradition?",
        choices: ["way of the shadow", "way of the drunken master", "way of the four elements", "way of the kensei", "way of the long death", "way of the open hand", "way of the sun soul"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Monastic Tradition.";
        }
      },
      {
        type: "input",
        name: "monkEmail",
        message: "What is your Monk's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const monk = new Monk(answers.monkName, answers.monkLvl, answers.monkEmail, answers.monkSubclass);
      teamMembers.push(monk);
      idArray.push(answers.monkLvl);
      createTeam();
    });
  }

  // Add Paladin

  function addPaladin() {
    inquirer.prompt([
      {
        type: "input",
        name: "paladinName",
        message: "What is your Paladin's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "paladinLvl",
        message: "What is your Paladin's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "paladinSubclass",
        message: "What is your Sacred Oath?",
        choices: ["oath of conquest", "oath of devotion", "oath of redemption", "oath of vengeance", "oath of the ancients", "oath of the crown", "oathbreaker"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Sacred Oath.";
        }
      },
      {
        type: "input",
        name: "paladinEmail",
        message: "What is your Paladin's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const paladin = new Paladin(answers.paladinName, answers.paladinLvl, answers.paladinEmail, answers.paladinSubclass);
      teamMembers.push(paladin);
      idArray.push(answers.paladinLvl);
      createTeam();
    });
  }

  //Add Ranger
  function addRanger() {
    inquirer.prompt([
      {
        type: "input",
        name: "rangerName",
        message: "What is your Ranger's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "fighterLvl",
        message: "What is your Ranger's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "rangerSubclass",
        message: "What is your Ranger's Archtypes?",
        choices: ["beast master", "gloom stalker", "horizon walker", "hunter", "monster slayer"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Ranger Archtype.";
        }
      },
      {
        type: "input",
        name: "rangerEmail",
        message: "What is your Ranger's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const ranger = new Ranger(answers.rangerName, answers.rangerLvl, answers.rangerEmail, answers.rangerSubclass);
      teamMembers.push(ranger);
      idArray.push(answers.rangerLvl);
      createTeam();
    });
  }

  // Add Rogue

  function addRogue() {
    inquirer.prompt([
      {
        type: "input",
        name: "rogueName",
        message: "What is your Rogue's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "rogueLvl",
        message: "What is your Rogue's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "rogueSubclass",
        message: "What is your Rogue's Roguish Archtypes?",
        choices: ["arcane trickster", "assassin", "inquisitive", "mastermind", "scout", "swashbuckler", "thief"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Roguish Archtype.";
        }
      },
      {
        type: "input",
        name: "rogueEmail",
        message: "What is your Rogue's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const rogue = new Rogue(answers.rogueName, answers.rogueLvl, answers.rogueEmail, answers.rogueSubclass);
      teamMembers.push(rogue);
      idArray.push(answers.rogueLvl);
      createTeam();
    });
  }

  // Add Sorcerer

  function addSorcerer() {
    inquirer.prompt([
      {
        type: "input",
        name: "sorcererName",
        message: "What is your Sorcerer's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "fighterLvl",
        message: "What is your Sorcerer's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "sorcererSubclass",
        message: "What is your Sorcerer's Sorcerous Origins?",
        choices: ["divine soul", "draconic bloodline", "shadow magic", "wild magic"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Sorcerous Origins.";
        }
      },
      {
        type: "input",
        name: "sorcererEmail",
        message: "What is your Sorcerer's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const sorcerer = new Sorcerer(answers.sorcererName, answers.sorcererLvl, answers.sorcererEmail, answers.sorcererSubclass);
      teamMembers.push(sorcerer);
      idArray.push(answers.sorcererLvl);
      createTeam();
    });
  }

  //Add Warlock

  function addWarlock() {
    inquirer.prompt([
      {
        type: "input",
        name: "warlockName",
        message: "What is your Warlock's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "warlockLvl",
        message: "What is your Warlock's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "warlockSubclass",
        message: "What is your Warlocks's Otherwordly Patron?",
        choices: ["the archfey", "the celestial", "the fiend", "the great old one", "the hexblade", "the undying"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Otherworldly Patron.";
        }
      },
      {
        type: "input",
        name: "warlockEmail",
        message: "What is your Warlock's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const warlock = new Warlock(answers.warlockName, answers.warlockLvl, answers.warlockEmail, answers.warlockSubclass);
      teamMembers.push(warlock);
      idArray.push(answers.warlockLvl);
      createTeam();
    });
  }

  // Add Wizard

  function addWizard() {
    inquirer.prompt([
      {
        type: "input",
        name: "wizardName",
        message: "What is your Wizard's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "wizardLvl",
        message: "What is your Wizard's level?",
        validate: answer => {
          const pass = answer.match(
            ///^[1-9]\d*$/
             /^[1-9]|[1][0-9]|20\d*$/
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "Need to enter a level";
            } else {
              return true;
            }
                        
          }
          return "Please enter a level between 1-20";
        }
      },
      {
        type: "list",
        name: "wizardSubclass",
        message: "What is your Wizard's Arcane Tradition?",
        choices: ["bladesinging", "school of abjuration", "school of conjuration", "school of divination", "school of enchantment", "school of evocation", "school of illusion", "school of necromancy", "school of transmutation", "war magic"],
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Arcane Tradition.";
        }
      },
      {
        type: "input",
        name: "wizardEmail",
        message: "What is your Wizard's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      const wizard = new Wizard(answers.wizardName, answers.wizardLvl, answers.wizardEmail, answers.wizardSubclass);
      teamMembers.push(wizard);
      idArray.push(answers.wizardLvl);
      createTeam();
    });
  }
  

  

  

  function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createMaster();

}


appMenu();
