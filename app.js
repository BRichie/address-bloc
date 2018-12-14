const inquirer = require('inquirer');
const MenuConstroller = require('./controllers/MenuController');
const menu = new MenuConstroller();

menu.clear();
menu.main();


